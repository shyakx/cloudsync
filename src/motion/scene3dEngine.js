/** Alternative 3D scene — wireframe polyhedra + floating cubes (no particle network) */

const PHI = (1 + Math.sqrt(5)) / 2;

export const GEO_PRESET = {
  focal: 520,
  speed: 0.0014,
  parallax: 22,
};

const ICO_EDGES = [
  [0, 1], [0, 4], [0, 5], [0, 8], [0, 9],
  [1, 6], [1, 7], [1, 8], [1, 9],
  [2, 3], [2, 4], [2, 5], [2, 10], [2, 11],
  [3, 6], [3, 7], [3, 10], [3, 11],
  [4, 5], [4, 8], [4, 10],
  [5, 9], [5, 11],
  [6, 7], [6, 8], [6, 10],
  [7, 9], [7, 11],
  [8, 10], [9, 11],
];

function cubeVerts(size) {
  const s = size;
  return [
    { x: -s, y: -s, z: -s }, { x: s, y: -s, z: -s },
    { x: s, y: s, z: -s }, { x: -s, y: s, z: -s },
    { x: -s, y: -s, z: s }, { x: s, y: -s, z: s },
    { x: s, y: s, z: s }, { x: -s, y: s, z: s },
  ];
}

const CUBE_EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 0],
  [4, 5], [5, 6], [6, 7], [7, 4],
  [0, 4], [1, 5], [2, 6], [3, 7],
];

export function projectPoint(x, y, z, rotY, rotX, cx, cy, focal) {
  const cosY = Math.cos(rotY);
  const sinY = Math.sin(rotY);
  const cosX = Math.cos(rotX);
  const sinX = Math.sin(rotX);

  let rx = x * cosY - z * sinY;
  let rz = x * sinY + z * cosY;
  const ry = y * cosX - rz * sinX;
  rz = y * sinX + rz * cosX;

  const scale = focal / (focal + rz);
  return { sx: cx + rx * scale, sy: cy + ry * scale, scale, z: rz };
}

function rotateVerts(verts, rotY, rotX, ox, oy, oz) {
  return verts.map((v) => {
    const x = v.x + ox;
    const y = v.y + oy;
    const z = v.z + oz;
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    let rx = x * cosY - z * sinY;
    let rz = x * sinY + z * cosY;
    const ry = y * cosX - rz * sinX;
    rz = y * sinX + rz * cosX;
    return { x: rx, y: ry, z: rz };
  });
}

function drawWireMesh(ctx, projected, edges, accent) {
  edges.forEach(([a, b], i) => {
    const pa = projected[a];
    const pb = projected[b];
    if (!pa || !pb) return;
    const depth = (pa.z + pb.z) * 0.5;
    const alpha = Math.max(0.06, Math.min(0.55, 0.15 + (depth + 200) / 600));
    const isAccent = accent && i % 5 === 0;
    ctx.beginPath();
    ctx.moveTo(pa.sx, pa.sy);
    ctx.lineTo(pb.sx, pb.sy);
    ctx.strokeStyle = isAccent
      ? `rgba(255, 207, 0, ${alpha * 1.8})`
      : `rgba(17, 17, 17, ${alpha * 0.85})`;
    ctx.lineWidth = isAccent ? 1.4 : 0.9;
    ctx.stroke();
  });

  projected.forEach((p, i) => {
    const r = 2.2 * p.scale;
    ctx.beginPath();
    ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2);
    ctx.fillStyle = i % 7 === 0 ? '#FFCF00' : 'rgba(17, 17, 17, 0.35)';
    ctx.fill();
  });
}

const SHAPES = [
  { type: 'ico', ox: 0, oy: 0, oz: 0, spin: 1, accent: true, scale: 1 },
  { type: 'cube', size: 38, ox: -180, oy: 60, oz: 40, spin: 1.4, accent: false },
  { type: 'cube', size: 28, ox: 200, oy: -50, oz: -30, spin: -1.1, accent: true },
  { type: 'cube', size: 22, ox: 120, oy: 100, oz: 60, spin: 0.9, accent: false },
];

const HERO_SHAPES = [
  { type: 'ico', ox: 0, oy: 0, oz: 0, spin: 1, accent: true, scale: 1.2 },
  { type: 'ico', ox: -95, oy: 75, oz: -55, spin: -0.65, accent: false, scale: 0.5 },
  { type: 'ico', ox: 110, oy: -85, oz: 45, spin: 0.85, accent: true, scale: 0.42 },
  { type: 'cube', size: 46, ox: -125, oy: -65, oz: 55, spin: 1.25, accent: true },
  { type: 'cube', size: 34, ox: 135, oy: -35, oz: -45, spin: -1.15, accent: false },
  { type: 'cube', size: 28, ox: 85, oy: 95, oz: 65, spin: 0.75, accent: false },
  { type: 'cube', size: 22, ox: -85, oy: 105, oz: -48, spin: 1.55, accent: true },
  { type: 'cube', size: 20, ox: 0, oy: -115, oz: 35, spin: -0.95, accent: false },
  { type: 'cube', size: 26, ox: 155, oy: 55, oz: 25, spin: 1.05, accent: true },
  { type: 'cube', size: 18, ox: -155, oy: -20, oz: -70, spin: -1.3, accent: false },
];

function getIcoVerts(scale) {
  const s = 52 * scale;
  return [
    [0, 1, PHI], [0, -1, PHI], [0, 1, -PHI], [0, -1, -PHI],
    [1, PHI, 0], [-1, PHI, 0], [1, -PHI, 0], [-1, -PHI, 0],
    [PHI, 0, 1], [-PHI, 0, 1], [PHI, 0, -1], [-PHI, 0, -1],
  ].map(([x, y, z]) => ({ x: x * s, y: y * s, z: z * s }));
}

function renderShapeScene(ctx, shapes, cx, cy, state, config) {
  const { mouse, angleY, angleX, time, reducedMotion } = state;
  const { focal } = config;

  shapes.forEach((shape, idx) => {
    const spin = reducedMotion ? 0 : time * 0.0004 * shape.spin;
    const rotY = angleY * shape.spin + spin + idx * 0.35;
    const rotX = angleX + Math.sin(time * 0.0003 + idx) * 0.12;

    let verts;
    let edges;
    if (shape.type === 'ico') {
      verts = rotateVerts(getIcoVerts(shape.scale || 1), rotY, rotX, shape.ox, shape.oy, shape.oz);
      edges = ICO_EDGES;
    } else {
      verts = rotateVerts(cubeVerts(shape.size), rotY, rotX, shape.ox, shape.oy, shape.oz);
      edges = CUBE_EDGES;
    }

    const projected = verts.map((v) => ({
      ...projectPoint(v.x, v.y, v.z, 0, 0, cx, cy, focal),
      z: v.z,
    }));

    drawWireMesh(ctx, projected, edges, shape.accent);
  });
}

export const HERO_GEO_PRESET = {
  focal: 480,
  speed: 0.0016,
  parallax: 28,
};

export function drawHeroGeometricScene(ctx, width, height, state, config = HERO_GEO_PRESET) {
  const { mouse, angleY, angleX, time, reducedMotion } = state;
  const { focal, parallax } = config;

  ctx.clearRect(0, 0, width, height);

  const cx = width * 0.5 + mouse.x * parallax;
  const cy = height * 0.5 + mouse.y * (parallax * 0.55);

  const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(width, height) * 0.52);
  glow.addColorStop(0, 'rgba(255, 207, 0, 0.09)');
  glow.addColorStop(0.45, 'rgba(255, 207, 0, 0.03)');
  glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  renderShapeScene(ctx, HERO_SHAPES, cx, cy, state, config);

  return {
    nextAngleY: angleY + (reducedMotion ? 0 : config.speed),
    nextAngleX: reducedMotion
      ? 0.3
      : 0.28 + Math.sin(time * 0.00025) * 0.09 + mouse.y * 0.09,
  };
}

export function drawGeometricScene(ctx, width, height, state, config = GEO_PRESET) {
  const { mouse, angleY, angleX, time, reducedMotion } = state;
  const { parallax } = config;

  ctx.clearRect(0, 0, width, height);

  const cx = width * 0.52 + mouse.x * parallax;
  const cy = height * 0.44 + mouse.y * (parallax * 0.6);

  const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(width, height) * 0.45);
  glow.addColorStop(0, 'rgba(255, 207, 0, 0.06)');
  glow.addColorStop(0.5, 'rgba(255, 207, 0, 0.02)');
  glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  renderShapeScene(ctx, SHAPES, cx, cy, state, config);

  return {
    nextAngleY: angleY + (reducedMotion ? 0 : config.speed),
    nextAngleX: reducedMotion
      ? 0.28
      : 0.26 + Math.sin(time * 0.00028) * 0.08 + mouse.y * 0.08,
  };
}
