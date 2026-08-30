export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const seg = (p, a, b) => clamp((p - a) / (b - a));
export const smooth = (t) => t * t * (3 - 2 * t);
export const mix = (a, b, t) => a + (b - a) * t;

export const EXIT_ALTITUDE = 150;

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
  [0.0, "door"],
  [0.13, "door"],
  [0.25, "freefall"],
  [0.4, "freefall"],
  [0.46, "deploy"],
  [0.54, "hang"],
  [0.8, "hang"],
  [0.88, "land"],
  [0.93, "land"],
  [1.0, "sit"],
];

// Body pitch in radians. Positive rolls the figure belly-to-earth.
export const PITCH_TRACK = [
  [0.0, 0.14],
  [0.13, 0.14],
  [0.25, 1.3],
  [0.4, 1.38],
  [0.46, 0.72],
  [0.54, 0.12],
  [0.8, 0.1],
  [0.88, 0.0],
  [1.0, 0.0],
];

export function altitude(p) {
  if (p < 0.13) return EXIT_ALTITUDE;
  // Freefall accelerates.
  if (p < 0.42) {
    const t = seg(p, 0.13, 0.42);
    return mix(EXIT_ALTITUDE, 62, t * t);
  }
  // Canopy opening bites hard.
  if (p < 0.52) {
    const t = seg(p, 0.42, 0.52);
    return mix(62, 53, 1 - (1 - t) * (1 - t));
  }
  if (p < 0.86) return mix(53, 0.9, seg(p, 0.52, 0.86));
  if (p < 0.92) return mix(0.9, 0, smooth(seg(p, 0.86, 0.92)));
  return 0;
}

// Canopy inflation, with a little overshoot on opening and a collapse on landing.
export function canopyScale(p) {
  if (p < 0.43) return 0;
  const open = seg(p, 0.43, 0.53);
  const overshoot = 1 + 0.22 * Math.sin(open * Math.PI);
  const collapse = 1 - seg(p, 0.87, 0.93);
  return smooth(open) * overshoot * collapse;
}

// Gentle lateral drift under canopy, damped to zero by touchdown.
export function drift(p) {
  const under = seg(p, 0.5, 0.9);
  const damp = 1 - smooth(under);
  return Math.sin(p * 18) * 1.5 * damp * smooth(seg(p, 0.42, 0.56));
}
