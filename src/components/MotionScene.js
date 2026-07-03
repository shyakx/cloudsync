import React, { useEffect, useRef } from 'react';
import './MotionScene.css';

const NODE_COUNT = 48;
const FOCAL = 420;
const CONNECT_DIST = 120;

const createNodes = () => {
  const nodes = [];
  for (let i = 0; i < NODE_COUNT; i += 1) {
    const angle = (i / NODE_COUNT) * Math.PI * 2;
    const radius = 140 + Math.random() * 160;
    nodes.push({
      x: Math.cos(angle) * radius * (0.4 + Math.random() * 0.6),
      y: (Math.random() - 0.5) * 220,
      z: Math.sin(angle) * radius * (0.4 + Math.random() * 0.6),
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.12,
      vz: (Math.random() - 0.5) * 0.18,
      accent: Math.random() > 0.82,
      size: 1.5 + Math.random() * 2,
    });
  }
  return nodes;
};

const MotionScene = ({ className = '' }) => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = createNodes();
    let width = 0;
    let height = 0;
    let rafId = 0;
    let angleY = 0;
    let angleX = 0.28;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (x, y, z, rotY, rotX, cx, cy) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      let rx = x * cosY - z * sinY;
      let rz = x * sinY + z * cosY;
      let ry = y * cosX - rz * sinX;
      rz = y * sinX + rz * cosX;

      const scale = FOCAL / (FOCAL + rz);
      return {
        sx: cx + rx * scale,
        sy: cy + ry * scale,
        scale,
        z: rz,
      };
    };

    const draw = (time) => {
      frameRef.current = time;
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.52 + mouseRef.current.x * 28;
      const cy = height * 0.46 + mouseRef.current.y * 18;

      if (!reducedMotion) {
        angleY += 0.0018;
        angleX = 0.22 + Math.sin(time * 0.00035) * 0.08 + mouseRef.current.y * 0.12;
      }

      nodes.forEach((node) => {
        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          node.z += node.vz;

          const limit = 200;
          if (Math.abs(node.x) > limit) node.vx *= -1;
          if (Math.abs(node.y) > limit) node.vy *= -1;
          if (Math.abs(node.z) > limit) node.vz *= -1;
        }
      });

      const projected = nodes.map((node) => ({
        ...node,
        ...project(node.x, node.y, node.z, angleY, angleX, cx, cy),
      }));

      projected.sort((a, b) => a.z - b.z);

      projected.forEach((a, i) => {
        projected.slice(i + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dz = a.z - b.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist > CONNECT_DIST) return;

          const alpha = (1 - dist / CONNECT_DIST) * 0.14 * Math.min(a.scale, b.scale);
          ctx.beginPath();
          ctx.moveTo(a.sx, a.sy);
          ctx.lineTo(b.sx, b.sy);
          ctx.strokeStyle = a.accent || b.accent
            ? `rgba(255, 207, 0, ${alpha * 2.2})`
            : `rgba(17, 17, 17, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      });

      projected.forEach((node) => {
        const r = node.size * node.scale;
        const glow = node.accent ? 'rgba(255, 207, 0, 0.35)' : 'rgba(17, 17, 17, 0.08)';

        ctx.beginPath();
        ctx.arc(node.sx, node.sy, r * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.sx, node.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = node.accent ? '#FFCF00' : 'rgba(17, 17, 17, 0.55)';
        ctx.fill();
      });

      rafId = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      };
    };

    const onLeave = () => {
      mouseRef.current = { x: 0, y: 0 };
    };

    resize();
    rafId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener('mousemove', onMove);
    canvas.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className={`motion-scene ${className}`.trim()} aria-hidden="true">
      <div className="motion-scene__plane" />
      <div className="motion-scene__ring motion-scene__ring--1" />
      <div className="motion-scene__ring motion-scene__ring--2" />
      <canvas ref={canvasRef} className="motion-scene__canvas" />
      <div className="motion-scene__fade" />
    </div>
  );
};

export default MotionScene;
