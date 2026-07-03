export const MOTION_PRESETS = {
  hero: {
    nodeCount: 48,
    connectDist: 120,
    focal: 420,
    speed: 0.0018,
    parallax: 28,
    accentRatio: 0.18,
  },
  ambient: {
    nodeCount: 32,
    connectDist: 100,
    focal: 480,
    speed: 0.0012,
    parallax: 16,
    accentRatio: 0.14,
  },
};

export function createNodes(count, accentRatio) {
  const nodes = [];
  for (let i = 0; i < count; i += 1) {
    const angle = (i / count) * Math.PI * 2;
    const radius = 120 + Math.random() * 180;
    nodes.push({
      x: Math.cos(angle) * radius * (0.4 + Math.random() * 0.6),
      y: (Math.random() - 0.5) * 240,
      z: Math.sin(angle) * radius * (0.4 + Math.random() * 0.6),
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.1,
      vz: (Math.random() - 0.5) * 0.16,
      accent: Math.random() > 1 - accentRatio,
      size: 1.2 + Math.random() * 2,
    });
  }
  return nodes;
}

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
  return {
    sx: cx + rx * scale,
    sy: cy + ry * scale,
    scale,
    z: rz,
  };
}

export function drawMotionFrame(ctx, width, height, nodes, config, state) {
  const {
    connectDist,
    focal,
    parallax,
    lineAlpha = 0.14,
    reducedMotion,
  } = config;

  const { mouse, angleY, angleX, time, scrollOffset = 0 } = state;

  ctx.clearRect(0, 0, width, height);

  const cx = width * 0.5 + mouse.x * parallax;
  const cy = height * (0.42 + scrollOffset * 0.00008) + mouse.y * (parallax * 0.65);

  if (!reducedMotion) {
    nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;
      node.z += node.vz;
      const limit = 210;
      if (Math.abs(node.x) > limit) node.vx *= -1;
      if (Math.abs(node.y) > limit) node.vy *= -1;
      if (Math.abs(node.z) > limit) node.vz *= -1;
    });
  }

  const projected = nodes.map((node) => ({
    ...node,
    ...projectPoint(node.x, node.y, node.z, angleY, angleX, cx, cy, focal),
  }));

  projected.sort((a, b) => a.z - b.z);

  projected.forEach((a, i) => {
    projected.slice(i + 1).forEach((b) => {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dz = a.z - b.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (dist > connectDist) return;

      const alpha = (1 - dist / connectDist) * lineAlpha * Math.min(a.scale, b.scale);
      ctx.beginPath();
      ctx.moveTo(a.sx, a.sy);
      ctx.lineTo(b.sx, b.sy);
      ctx.strokeStyle = a.accent || b.accent
        ? `rgba(255, 207, 0, ${alpha * 2.4})`
        : `rgba(17, 17, 17, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  });

  projected.forEach((node) => {
    const r = node.size * node.scale;
    ctx.beginPath();
    ctx.arc(node.sx, node.sy, r * 2.2, 0, Math.PI * 2);
    ctx.fillStyle = node.accent ? 'rgba(255, 207, 0, 0.3)' : 'rgba(17, 17, 17, 0.07)';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(node.sx, node.sy, r, 0, Math.PI * 2);
    ctx.fillStyle = node.accent ? '#FFCF00' : 'rgba(17, 17, 17, 0.5)';
    ctx.fill();
  });

  return {
    nextAngleY: angleY + (reducedMotion ? 0 : config.speed),
    nextAngleX: reducedMotion
      ? 0.24
      : 0.2 + Math.sin(time * 0.00035) * 0.07 + mouse.y * 0.1,
  };
}
