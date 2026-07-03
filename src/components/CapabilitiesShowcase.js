import React from 'react';
import DeviceFrame from './devices/DeviceFrame';
import { capabilities } from '../data/homeData';
import SectionHeading from './SectionHeading';
import './CapabilitiesShowcase.css';

const CapabilitiesShowcase = () => (
  <section id="services" className="capabilities cs-section cs-section--alt">
    <div className="cs-container">
      <SectionHeading
        label="Capabilities"
        title="Our Capabilities"
        description="End-to-end technology expertise — visualized."
      />
      <div className="capabilities__grid">
        {capabilities.map((cap, index) => (
          <article
            key={cap.id}
            className={`capabilities__item animate-fade-up animate-delay-${(index % 4) + 1}`}
          >
            <div className="capabilities__visual">
              <DeviceFrame
                type={cap.id === 'dev' ? 'macbook' : 'monitor'}
                screen={cap.screen}
                tilt
              />
            </div>
            <div className="capabilities__text">
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CapabilitiesShowcase;
