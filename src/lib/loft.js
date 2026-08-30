import * as THREE from "three";

// Superellipse cross-section. exponent 2 is a plain ellipse; higher values
// square it off, which is what gives an airframe its flatter belly and sides.
function sectionPoint(t, halfWidth, halfHeight, exponent) {
  const angle = t * Math.PI * 2;
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const k = 2 / exponent;
  return [
    Math.sign(c) * Math.pow(Math.abs(c), k) * halfWidth,
    Math.sign(s) * Math.pow(Math.abs(s), k) * halfHeight,
  ];
}

// Builds a wireframe hull from cross-sections spaced along x, drawn as
// circumferential frames plus longitudinal stringers. Unlike `wireframe` on a
// triangulated mesh this has no diagonals, so it reads as a lofted shape.
export function loftGeometry(stations, radial = 12, exponent = 2.2) {
  const rings = stations.map(([x, centerY, halfWidth, halfHeight]) => {
    const ring = [];
    for (let i = 0; i < radial; i++) {
      const [z, y] = sectionPoint(i / radial, halfWidth, halfHeight, exponent);
      ring.push([x, centerY + y, z]);
    }
    return ring;
  });

  const positions = [];
  const push = (p) => positions.push(p[0], p[1], p[2]);

  for (const ring of rings) {
    for (let i = 0; i < radial; i++) {
      push(ring[i]);
      push(ring[(i + 1) % radial]);
    }
  }
  for (let s = 0; s < rings.length - 1; s++) {
    for (let i = 0; i < radial; i++) {
      push(rings[s][i]);
      push(rings[s + 1][i]);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  return geometry;
}

export function loopGeometry(points) {
  return new THREE.BufferGeometry().setFromPoints(points.map((p) => new THREE.Vector3(...p)));
}

// Ram-air canopy. A modern sport parachute is a wing, not a dome: a cambered
// airfoil section repeated across a span of pressurised cells, with the whole
// planform bent into an arc so the tips hang lower than the centre. The nose
// stays open at the front, which is what the cells ram air through to inflate.
const CANOPY = {
  halfSpan: 2.4,
  halfChord: 1.15,
  cells: 7,
  arc: 0.62, // radians from the centre rib out to the tip
  camber: 0.1, // as a fraction of the local chord
  thickness: 0.16,
  taper: 0.16, // tips are shorter in chord than the centre
  sweep: 0.12, // and set slightly aft
  mouth: 0.1, // bottom skin starts this far back, leaving the nose open
};

// A point on the canopy skin. `u` runs -1..1 across the span, `t` runs 0..1
// from nose to tail, and `face` picks the top (1) or bottom (-1) surface.
function skinPoint(u, t, face) {
  const phi = u * CANOPY.arc;
  const radius = CANOPY.halfSpan / Math.sin(CANOPY.arc);
  const halfChord = CANOPY.halfChord * (1 - CANOPY.taper * u * u);
  const camber = CANOPY.camber * Math.sin(Math.PI * Math.pow(t, 0.8));
  const thickness = CANOPY.thickness * Math.sin(Math.PI * Math.pow(t, 0.62));
  const rise = (camber + face * 0.5 * thickness) * 2 * halfChord;
  const r = radius + rise;
  return [
    r * Math.sin(phi),
    r * Math.cos(phi) - radius,
    halfChord * (1 - 2 * t) - CANOPY.sweep * u * u * CANOPY.halfChord,
  ];
}

export function canopyGeometry(samples = 9) {
  const ribs = [];
  for (let i = 0; i <= CANOPY.cells; i++) {
    const u = -1 + (2 * i) / CANOPY.cells;
    const top = [];
    const bottom = [];
    for (let j = 0; j < samples; j++) {
      const t = j / (samples - 1);
      top.push(skinPoint(u, t, 1));
      bottom.push(skinPoint(u, CANOPY.mouth + (1 - CANOPY.mouth) * t, -1));
    }
    ribs.push({ top, bottom });
  }

  const positions = [];
  const edge = (a, b) => positions.push(a[0], a[1], a[2], b[0], b[1], b[2]);

  for (const rib of ribs) {
    for (let j = 0; j < samples - 1; j++) {
      edge(rib.top[j], rib.top[j + 1]);
      edge(rib.bottom[j], rib.bottom[j + 1]);
    }
    // The skins already meet at the tail, so only the nose needs closing.
    edge(rib.top[0], rib.bottom[0]);
  }
  for (let i = 0; i < ribs.length - 1; i++) {
    for (let j = 0; j < samples; j++) {
      edge(ribs[i].top[j], ribs[i + 1].top[j]);
      edge(ribs[i].bottom[j], ribs[i + 1].bottom[j]);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  return geometry;
}

// Where the suspension lines meet the bottom skin, for the +x half of the span.
// Two chord stations per loaded rib, which is how A and B lines are grouped.
export function canopyAttachments() {
  const points = [];
  for (const u of [1 / 7, 0.5, 6 / 7]) {
    for (const t of [0.25, 0.62]) points.push(skinPoint(u, t, -1));
  }
  return points;
}
