export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const seg = (p, a, b) => (a === b ? (p >= b ? 1 : 0) : clamp((p - a) / (b - a)));
export const smooth = (t) => t * t * (3 - 2 * t);
export const mix = (a, b, t) => a + (b - a) * t;

export const EXIT_ALTITUDE = 150;
export const EXIT_P = 0.13;

// Aircraft-local landmarks. The base is chosen so the door sits exactly at the
// world origin column at exit, which keeps the handoff to freefall continuous.
// He goes out of his own door, so the seat and the doorway are the same station.
export const COCKPIT_LOCAL = [-2.6, -0.7, 0.34];
export const DOOR_LOCAL = [-2.5, -0.7, 0.62];
export const AIRCRAFT_BASE = [
  -DOOR_LOCAL[0],
  EXIT_ALTITUDE - DOOR_LOCAL[1],
  -DOOR_LOCAL[2],
];

// Sample a keyframe track of [position, value] pairs. Returns the two
// neighbouring frames plus a smoothed blend factor between them.
export function sample(track, p) {
  if (p <= track[0][0]) return { a: track[0][1], b: track[0][1], t: 0 };
  const last = track[track.length - 1];
  if (p >= last[0]) return { a: last[1], b: last[1], t: 0 };
  for (let i = 0; i < track.length - 1; i++) {
    const [pa, va] = track[i];
    const [pb, vb] = track[i + 1];
    if (p >= pa && p <= pb) {
      return { a: va, b: vb, t: smooth(seg(p, pa, pb)) };
    }
  }
  return { a: last[1], b: last[1], t: 0 };
}

export function sampleNumber(track, p) {
  const { a, b, t } = sample(track, p);
  return mix(a, b, t);
}

// Which pose the figure holds, and when.
export const POSE_TRACK = [
  [0.0, "pilot"],
  [0.06, "pilot"],
  [0.115, "door"],
  [0.17, "door"],
  [0.25, "freefall"],
  [0.39, "freefall"],
  [0.43, "deploy"],
  [0.53, "hang"],
  [0.8, "hang"],
  [0.88, "land"],
  [0.93, "land"],
  [1.0, "sit"],
];

// Body pitch in radians. Positive rolls the figure belly-to-earth.
export const PITCH_TRACK = [
  [0.0, 0.0],
  [0.06, 0.0],
  [0.13, 0.14],
  [0.17, 0.14],
  [0.25, 1.3],
  [0.39, 1.38],
  [0.43, 0.72],
  [0.53, 0.12],
  [0.8, 0.1],
  [0.88, 0.0],
  [1.0, 0.0],
];

// Heading. Faces the nose while flying, then turns square to the open door.
export const YAW_TRACK = [
  [0.0, -Math.PI / 2],
  [0.06, -Math.PI / 2],
  [0.13, 0.0],
];

export function altitude(p) {
  if (p < EXIT_P) return EXIT_ALTITUDE;
  // Freefall accelerates.
  if (p < 0.44) {
    const t = seg(p, EXIT_P, 0.44);
    return mix(EXIT_ALTITUDE, 62, t * t);
  }
  // Inflation bites hard.
  if (p < 0.55) {
    const t = seg(p, 0.44, 0.55);
    return mix(62, 52, 1 - (1 - t) * (1 - t));
  }
  if (p < 0.86) return mix(52, 0.9, seg(p, 0.55, 0.86));
  if (p < 0.92) return mix(0.9, 0, smooth(seg(p, 0.86, 0.92)));
  return 0;
}

const _canopy = { lift: 0, span: 0, back: 0, opacity: 0, out: false };

// Deployment happens on two axes rather than one uniform scale: the lines
// stretch first, carrying a narrow streamer up off his back, and only then does
// the canopy inflate spanwise. On touchdown it stops flying, drops behind him
// and spreads flat on the ground instead of shrinking into nothing.
export function canopyState(p, out = _canopy) {
  const opacity = 1 - seg(p, 0.93, 0.985);
  if (p < 0.43 || opacity <= 0.01) {
    out.out = false;
    out.opacity = 0;
    return out;
  }
  const stretch = smooth(seg(p, 0.43, 0.475));
  const inflate = smooth(seg(p, 0.465, 0.55));
  const settle = smooth(seg(p, 0.88, 0.95));
  const overshoot = 1 + 0.16 * Math.sin(inflate * Math.PI);

  out.lift = mix(stretch, 0.06, settle);
  out.span = (stretch * 0.07 + inflate * 0.93) * overshoot * mix(1, 1.15, settle);
  out.back = -settle * 2.8;
  out.opacity = opacity;
  out.out = true;
  return out;
}

// Gentle lateral drift under canopy, damped to zero by touchdown.
export function drift(p) {
  const under = seg(p, 0.5, 0.9);
  const damp = 1 - smooth(under);
  return Math.sin(p * 18) * 1.5 * damp * smooth(seg(p, 0.42, 0.56));
}

const _aircraft = { x: 0, y: 0, z: 0 };
const _figure = { x: 0, y: 0, z: 0 };

export function aircraftPosition(p, out = _aircraft) {
  const away = seg(p, EXIT_P, 0.55);
  out.x = AIRCRAFT_BASE[0] + away * away * 170;
  out.y = AIRCRAFT_BASE[1] + away * 14;
  out.z = AIRCRAFT_BASE[2] - away * away * 45;
  return out;
}

export function figurePosition(p, out = _figure) {
  if (p >= EXIT_P) {
    out.x = drift(p);
    out.y = altitude(p);
    out.z = 0;
    return out;
  }
  const plane = aircraftPosition(p, _aircraft);
  const t = smooth(seg(p, 0.06, EXIT_P));
  out.x = plane.x + mix(COCKPIT_LOCAL[0], DOOR_LOCAL[0], t);
  out.y = plane.y + mix(COCKPIT_LOCAL[1], DOOR_LOCAL[1], t);
  out.z = plane.z + mix(COCKPIT_LOCAL[2], DOOR_LOCAL[2], t);
  return out;
}

// The gentle rock both rides share. Keeping it here rather than in each ride
// lets the figure aboard be carried by exactly the same motion. It levels off
// as he moves to the door, the way a pilot flies straight on jump run, which
// also parks the door exactly on the world origin for the exit.
export function rideRoll(p, time) {
  return Math.sin(time * 0.6) * 0.025 * (1 - smooth(seg(p, 0.06, EXIT_P)));
}

const _seat = { x: 0, y: 0, roll: 0 };

// Displacement the ride's roll imparts to whoever is sitting in it. The rides
// rock about their own origin, so a seat out at the cockpit swings through an
// arc rather than staying put, and the figure has to swing with it or he floats
// free of the airframe.
export function seatSway(p, time, out = _seat) {
  out.x = 0;
  out.y = 0;
  out.roll = 0;
  if (p >= EXIT_P) return out;

  const t = smooth(seg(p, 0.06, EXIT_P));
  out.roll = rideRoll(p, time);
  const lx = mix(COCKPIT_LOCAL[0], DOOR_LOCAL[0], t);
  const ly = mix(COCKPIT_LOCAL[1], DOOR_LOCAL[1], t);
  const c = Math.cos(out.roll);
  const s = Math.sin(out.roll);
  out.x = lx * c - ly * s - lx;
  out.y = lx * s + ly * c - ly;
  return out;
}
