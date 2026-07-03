import React from 'react';
import DeviceFrame from './devices/DeviceFrame';
import { whyVisuals } from '../data/homeData';
import SectionHeading from './SectionHeading';
import './WhyCloudSyncVisual.css';

const WhyCloudSyncVisual = () => (
  <section id="solutions" className="why-visual cs-section">
    <div className="cs-container">
      <SectionHeading
        label="Why CloudSync"
        title="Built by Engineers, Trusted by Enterprises"
        description="Not stock photos. Real teams building real software."
      />
      <div className="why-visual__grid">
        {whyVisuals.map((item, index) => (
          <article
            key={item.title}
            className={`why-visual__card animate-fade-up animate-delay-${(index % 4) + 1}`}
          >
            <div className="why-visual__mockup">
              {item.image === 'team' && (
                <div className="why-visual__photo why-visual__photo--team">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/kigali-convention-centre.jpg`}
                    alt="CloudSync engineering team"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `${process.env.PUBLIC_URL}/images/convention fireworks.jpg`;
                    }}
                  />
                  <div className="why-visual__overlay-device">
                    <DeviceFrame type="laptop" screen={item.screen} />
                  </div>
                </div>
              )}
              {item.image === 'screens' && (
                <div className="why-visual__screens">
                  <DeviceFrame type="macbook" screen={item.screen} />
                  <DeviceFrame type="iphone" screen="banking" />
                </div>
              )}
              {item.image === 'meeting' && (
                <div className="why-visual__photo why-visual__photo--meeting">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration"
                    loading="lazy"
                  />
                  <div className="why-visual__overlay-device why-visual__overlay-device--small">
                    <DeviceFrame type="tablet" screen={item.screen} />
                  </div>
                </div>
              )}
              {item.image === 'infra' && (
                <div className="why-visual__infra">
                  <DeviceFrame type="monitor" screen={item.screen} />
                </div>
              )}
            </div>
            <div className="why-visual__text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default WhyCloudSyncVisual;
