import React, { useEffect, useRef } from 'react';
import { drawHeroGeometricScene, HERO_GEO_PRESET } from '../motion/scene3dEngine';
import './HeroGeoVisual.css';

const WireCube = ({ className, style }) => (
  <div className={`hero-geo__cube ${className || ''}`.trim()} style={style}>
    <span className="hero-geo__cube-face hero-geo__cube-face--f" />
    <span className="hero-geo__cube-face hero-geo__cube-face--b" />
    <span className="hero-geo__cube-face hero-geo__cube-face--l" />
    <span className="hero-geo__cube-face hero-geo__cube-face--r" />
    <span className="hero-geo__cube-face hero-geo__cube-face--t" />
    <span className="hero-geo__cube-face hero-geo__cube-face--bt" />
  </div>
);

const HeroGeoVisual = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mobileQuery = window.matchMedia('(max-width: 960px)');
    if (mobileQuery.matches) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let rafId = 0;
    let angleY = 0;
    let angleX = 0.3;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time) => {
      const angles = drawHeroGeometricScene(ctx, width, height, {
        mouse: mouseRef.current,
        angleY,
        angleX,
        time,
        reducedMotion,
      }, HERO_GEO_PRESET);

      angleY = angles.nextAngleY;
      angleX = angles.nextAngleX;
      rafId = requestAnimationFrame(draw);
    };

    const onMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    resize();
    rafId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className="hero-geo" aria-hidden="true">
      <div className="hero-geo__scene">
        <div className="hero-geo__ring hero-geo__ring--1" />
        <div className="hero-geo__ring hero-geo__ring--2" />
        <div className="hero-geo__ring hero-geo__ring--3" />
        <WireCube className="hero-geo__cube--a" />
        <WireCube className="hero-geo__cube--b hero-geo__cube--accent" />
        <WireCube className="hero-geo__cube--c" />
        <div className="hero-geo__prism hero-geo__prism--1" />
        <div className="hero-geo__prism hero-geo__prism--2" />
        <canvas ref={canvasRef} className="hero-geo__canvas" />
      </div>
    </div>
  );
};

export default HeroGeoVisual;
