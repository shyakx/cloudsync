import React, { useEffect, useRef } from 'react';
import DeviceFrame from './devices/DeviceFrame';
import { processSteps } from '../data/homeData';
import SectionHeading from './SectionHeading';
import './ProcessVisual.css';

const ProcessVisual = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          line.classList.add('process-visual__line--animated');
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(line);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="process-visual cs-section cs-section--alt">
      <div className="cs-container">
        <SectionHeading
          label="How We Work"
          title="Our Process"
          description="From idea to production — a proven engineering workflow."
        />
        <div className="process-visual__flow">
          <div ref={lineRef} className="process-visual__line" aria-hidden="true" />
          {processSteps.map((step, i) => (
            <div key={step.title} className={`process-visual__step animate-fade-up animate-delay-${(i % 4) + 1}`}>
              <div className="process-visual__device">
                <DeviceFrame type="tablet" screen={step.screen} />
              </div>
              <div className="process-visual__dot" />
              <h4>{step.title}</h4>
              {i < processSteps.length - 1 && (
                <span className="process-visual__arrow" aria-hidden="true">↓</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessVisual;
