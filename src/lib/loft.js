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
