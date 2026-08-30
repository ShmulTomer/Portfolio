export const JOINT_NAMES = [
  "head",
  "neck",
  "chest",
  "pelvis",
  "shoulderL",
  "shoulderR",
  "elbowL",
  "elbowR",
  "handL",
  "handR",
  "hipL",
  "hipR",
  "kneeL",
  "kneeR",
  "footL",
  "footR",
];

export const JOINT_RADIUS = {
  head: 0.21,
  neck: 0.07,
  chest: 0.17,
  pelvis: 0.14,
  shoulderL: 0.085,
  shoulderR: 0.085,
  elbowL: 0.065,
  elbowR: 0.065,
  handL: 0.075,
  handR: 0.075,
  hipL: 0.075,
  hipR: 0.075,
  kneeL: 0.07,
  kneeR: 0.07,
  footL: 0.075,
  footR: 0.075,
};

const idx = Object.fromEntries(JOINT_NAMES.map((n, i) => [n, i]));

export const BONES = [
  ["head", "neck"],
  ["neck", "chest"],
  ["chest", "pelvis"],
  ["neck", "shoulderL"],
  ["neck", "shoulderR"],
  ["shoulderL", "elbowL"],
  ["elbowL", "handL"],
  ["shoulderR", "elbowR"],
  ["elbowR", "handR"],
  ["chest", "hipL"],
  ["chest", "hipR"],
  ["pelvis", "hipL"],
  ["pelvis", "hipR"],
  ["hipL", "kneeL"],
  ["kneeL", "footL"],
  ["hipR", "kneeR"],
  ["kneeR", "footR"],
].map(([a, b]) => [idx[a], idx[b]]);

const POSE_SOURCE = {
  // Crouched in the doorway, hands on the frame.
  door: {
    head: [0, 1.58, 0.06],
    neck: [0, 1.38, 0.02],
    chest: [0, 1.12, 0],
    pelvis: [0, 0.82, -0.04],
    shoulderL: [-0.3, 1.33, 0.01],
    shoulderR: [0.3, 1.33, 0.01],
    elbowL: [-0.5, 1.28, 0.2],
    elbowR: [0.5, 1.28, 0.2],
    handL: [-0.44, 1.62, 0.32],
    handR: [0.44, 1.62, 0.32],
    hipL: [-0.17, 0.8, -0.03],
    hipR: [0.17, 0.8, -0.03],
    kneeL: [-0.21, 0.42, 0.18],
    kneeR: [0.21, 0.42, 0.18],
    footL: [-0.22, 0.04, -0.02],
    footR: [0.22, 0.04, -0.02],
  },
  // Arched, belly to earth, limbs spread.
  freefall: {
    head: [0, 1.68, 0.12],
    neck: [0, 1.44, 0.04],
    chest: [0, 1.16, -0.02],
    pelvis: [0, 0.84, -0.16],
    shoulderL: [-0.32, 1.4, 0.02],
    shoulderR: [0.32, 1.4, 0.02],
    elbowL: [-0.64, 1.44, 0.04],
    elbowR: [0.64, 1.44, 0.04],
    handL: [-0.8, 1.74, 0.1],
    handR: [0.8, 1.74, 0.1],
    hipL: [-0.19, 0.82, -0.15],
    hipR: [0.19, 0.82, -0.15],
    kneeL: [-0.44, 0.46, -0.14],
    kneeR: [0.44, 0.46, -0.14],
    footL: [-0.54, 0.2, -0.42],
    footR: [0.54, 0.2, -0.42],
  },
  // Right hand back to the pilot chute.
  deploy: {
    head: [0, 1.66, 0.1],
    neck: [0, 1.43, 0.03],
    chest: [0, 1.15, -0.01],
    pelvis: [0, 0.84, -0.12],
    shoulderL: [-0.31, 1.38, 0.02],
    shoulderR: [0.31, 1.38, 0.02],
    elbowL: [-0.6, 1.42, 0.06],
    elbowR: [0.54, 1.04, -0.2],
    handL: [-0.72, 1.7, 0.12],
    handR: [0.28, 0.74, -0.44],
    hipL: [-0.19, 0.82, -0.12],
    hipR: [0.19, 0.82, -0.12],
    kneeL: [-0.4, 0.46, -0.1],
    kneeR: [0.4, 0.46, -0.1],
    footL: [-0.5, 0.22, -0.38],
    footR: [0.5, 0.22, -0.38],
  },
  // Sitting in the harness, hands up on the toggles.
  hang: {
    head: [0, 1.62, 0.02],
    neck: [0, 1.42, 0],
    chest: [0, 1.15, 0],
    pelvis: [0, 0.85, 0],
    shoulderL: [-0.3, 1.36, 0],
    shoulderR: [0.3, 1.36, 0],
    elbowL: [-0.4, 1.58, 0.04],
    elbowR: [0.4, 1.58, 0.04],
    handL: [-0.44, 1.9, 0.06],
    handR: [0.44, 1.9, 0.06],
    hipL: [-0.17, 0.82, 0],
    hipR: [0.17, 0.82, 0],
    kneeL: [-0.16, 0.44, 0.12],
    kneeR: [0.16, 0.44, 0.12],
    footL: [-0.16, 0.06, 0.2],
    footR: [0.16, 0.06, 0.2],
  },
  // Standing on the ground after the flare.
  land: {
    head: [0, 1.62, 0],
    neck: [0, 1.42, 0],
    chest: [0, 1.15, 0],
    pelvis: [0, 0.85, 0],
    shoulderL: [-0.3, 1.36, 0],
    shoulderR: [0.3, 1.36, 0],
    elbowL: [-0.42, 1.05, 0.02],
    elbowR: [0.42, 1.05, 0.02],
    handL: [-0.46, 0.74, 0.06],
    handR: [0.46, 0.74, 0.06],
    hipL: [-0.17, 0.82, 0],
    hipR: [0.17, 0.82, 0],
    kneeL: [-0.19, 0.44, 0.03],
    kneeR: [0.19, 0.44, 0.03],
    footL: [-0.2, 0.03, 0.07],
    footR: [0.2, 0.03, 0.07],
  },
  // Seated at the desk, hands on the keyboard.
  sit: {
    head: [0, 1.42, 0.04],
    neck: [0, 1.24, -0.02],
    chest: [0, 0.99, -0.06],
    pelvis: [0, 0.66, -0.12],
    shoulderL: [-0.29, 1.19, -0.05],
    shoulderR: [0.29, 1.19, -0.05],
    elbowL: [-0.35, 0.93, 0.12],
    elbowR: [0.35, 0.93, 0.12],
    handL: [-0.22, 0.82, 0.42],
    handR: [0.22, 0.82, 0.42],
    hipL: [-0.17, 0.64, -0.12],
    hipR: [0.17, 0.64, -0.12],
    kneeL: [-0.18, 0.6, 0.34],
    kneeR: [0.18, 0.6, 0.34],
    footL: [-0.18, 0.05, 0.4],
    footR: [0.18, 0.05, 0.4],
  },
};

// Flatten each pose into a Float32Array so per-frame blending is a plain loop.
export const POSES = Object.fromEntries(
  Object.entries(POSE_SOURCE).map(([name, joints]) => {
    const arr = new Float32Array(JOINT_NAMES.length * 3);
    JOINT_NAMES.forEach((joint, i) => {
      const [x, y, z] = joints[joint];
      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    });
    return [name, arr];
  })
);
