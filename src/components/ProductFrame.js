import React, { useEffect, useRef, useState } from 'react';
import './ProductFrame.css';

const CANVAS = {
  desktop: { width: 1280, height: 800 },
  mobile: { width: 390, height: 844 },
};

const LAPTOP_CHROME = {
  bezelX: 18,
  bezelTop: 30,
  hinge: 7,
  base: 16,
};

const PHONE_CHROME = {
  pad: 10,
};

const ProductFrame = ({ device = 'desktop', children }) => {
  const rootRef = useRef(null);
  const [scale, setScale] = useState(0.45);
  const spec = CANVAS[device];
  const isMobile = device === 'mobile';

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let rafId = 0;

    const measure = () => {
      rafId = 0;
      const host = root.closest('.work-slide__preview') || root.parentElement;
      if (!host) return;

      const { width, height } = host.getBoundingClientRect();

      let availW;
      let availH;

      if (isMobile) {
        availW = width - 32;
        availH = height - 32;
      } else {
        availW = width - LAPTOP_CHROME.bezelX * 2 - 8;
        availH = height - LAPTOP_CHROME.bezelTop - LAPTOP_CHROME.hinge - LAPTOP_CHROME.base - 8;
      }

      if (availW < 1 || availH < 1) return;

      const next = Math.min(availW / spec.width, availH / spec.height, 1);
      setScale((prev) => (Math.abs(prev - next) < 0.0005 ? prev : next));
    };

    const schedule = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(measure);
    };

    schedule();
    const host = root.closest('.work-slide__preview') || root.parentElement;
    const observer = new ResizeObserver(schedule);
    if (host) observer.observe(host);
    observer.observe(root);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [device, isMobile, spec.width, spec.height]);

  const scaledW = Math.round(spec.width * scale);
  const scaledH = Math.round(spec.height * scale);

  if (isMobile) {
    const shellW = scaledW + PHONE_CHROME.pad * 2;
    const shellH = scaledH + PHONE_CHROME.pad * 2;

    return (
      <div ref={rootRef} className="ps-device ps-device--phone">
        <div
          className="ps-phone"
          style={{ width: shellW, height: shellH }}
        >
          <div className="ps-phone__island" aria-hidden="true" />
          <div
            className="ps-phone__screen"
            style={{ width: scaledW, height: scaledH }}
          >
            <div
              className="ps-phone__ui"
              style={{
                width: spec.width,
                height: spec.height,
                transform: `scale(${scale})`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const lidW = scaledW + LAPTOP_CHROME.bezelX * 2;
  const lidH = scaledH + LAPTOP_CHROME.bezelTop + 10;

  return (
    <div ref={rootRef} className="ps-device ps-device--laptop">
      <div className="ps-laptop" style={{ width: lidW }}>
        <div className="ps-laptop__lid" style={{ width: lidW, height: lidH }}>
          <div className="ps-laptop__bezel">
            <div className="ps-laptop__cam" aria-hidden="true" />
            <div
              className="ps-laptop__display"
              style={{ width: scaledW, height: scaledH }}
            >
              <div
                className="ps-laptop__ui"
                style={{
                  width: spec.width,
                  height: spec.height,
                  transform: `scale(${scale})`,
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
        <div className="ps-laptop__hinge" style={{ width: lidW * 0.92 }} />
        <div className="ps-laptop__base" style={{ width: lidW * 1.04 }}>
          <div className="ps-laptop__trackpad" />
        </div>
      </div>
    </div>
  );
};

export default ProductFrame;
