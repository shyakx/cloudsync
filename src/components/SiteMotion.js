import React, { useEffect, useRef } from 'react';
import { GEO_PRESET, drawGeometricScene } from '../motion/scene3dEngine';
import './SiteMotion.css';

const SiteMotion = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const shellRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const shell = shellRef.current;
    if (!canvas || !shell) return;

    const mobileQuery = window.matchMedia('(max-width: 960px)');
    if (mobileQuery.matches) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

    const updateOpacity = () => {
      const vh = window.innerHeight;
      const y = scrollRef.current;
      let opacity = 1;
      if (y > vh * 0.5) {
        opacity = Math.max(0.2, 1 - (y - vh * 0.5) / (vh * 2.5));
      }
      shell.style.opacity = String(opacity);
    };

    const draw = (time) => {
      const angles = drawGeometricScene(ctx, width, height, {
        mouse: mouseRef.current,
        angleY,
        angleX,
        time,
        reducedMotion,
      }, GEO_PRESET);

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

    const onScroll = () => {
      scrollRef.current = window.scrollY;
      updateOpacity();
    };

    resize();
    updateOpacity();
    rafId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div ref={shellRef} className="site-motion site-motion--geo" aria-hidden="true">
      <div className="site-motion__beam site-motion__beam--1" />
      <div className="site-motion__beam site-motion__beam--2" />
      <div className="site-motion__shard site-motion__shard--1" />
      <div className="site-motion__shard site-motion__shard--2" />
      <div className="site-motion__shard site-motion__shard--3" />
      <canvas ref={canvasRef} className="site-motion__canvas" />
    </div>
  );
};

export default SiteMotion;
