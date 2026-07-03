import React, { useEffect, useRef } from 'react';
import './MotionScene.css';

const MotionScene = ({ intensity = 'hero' }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let raf = 0;
    let w = 0;
    let h = 0;

    const count = intensity === 'hero' ? 90 : 45;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random(),
      speed: 0.0004 + Math.random() * 0.0008,
      size: 1 + Math.random() * 2,
    }));

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * devicePixelRatio;
      canvas.height = h * devicePixelRatio;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    };

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h);

      particles.forEach((p) => {
        p.z -= p.speed;
        if (p.z <= 0.02) {
          p.z = 1;
          p.x = Math.random() * 2 - 1;
          p.y = Math.random() * 2 - 1;
        }

        const perspective = 1.8;
        const scale = perspective / (perspective + p.z);
        const px = w / 2 + p.x * w * 0.45 * scale;
        const py = h / 2 + p.y * h * 0.45 * scale;
        const alpha = (1 - p.z) * 0.55;
        const radius = p.size * scale * 2.2;

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.z < 0.35
          ? `rgba(255, 207, 0, ${alpha})`
          : `rgba(17, 17, 17, ${alpha * 0.35})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [intensity]);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const onMove = (e) => {
      const rect = scene.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      scene.style.setProperty('--tilt-x', `${y * -12}deg`);
      scene.style.setProperty('--tilt-y', `${x * 14}deg`);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className={`motion-scene motion-scene--${intensity}`} aria-hidden="true">
      <canvas ref={canvasRef} className="motion-scene__canvas" />
      <div ref={sceneRef} className="motion-scene__stage">
        <div className="motion-scene__world">
          <div className="motion-scene__plane" />
          <div className="motion-scene__cube motion-scene__cube--a">
            <div /><div /><div /><div /><div /><div />
          </div>
          <div className="motion-scene__cube motion-scene__cube--b">
            <div /><div /><div /><div /><div /><div />
          </div>
          <div className="motion-scene__ring motion-scene__ring--a" />
          <div className="motion-scene__ring motion-scene__ring--b" />
          <div className="motion-scene__orbit">
            <span className="motion-scene__node motion-scene__node--1" />
            <span className="motion-scene__node motion-scene__node--2" />
            <span className="motion-scene__node motion-scene__node--3" />
          </div>
          <div className="motion-scene__prism" />
        </div>
      </div>
      <div className="motion-scene__vignette" />
    </div>
  );
};

export default MotionScene;
