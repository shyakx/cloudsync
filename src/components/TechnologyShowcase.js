import React from 'react';
import { ArrowRight } from 'lucide-react';
import DeviceFrame from './devices/DeviceFrame';
import { technologyProducts } from '../data/homeData';
import SectionHeading from './SectionHeading';
import './TechnologyShowcase.css';

const TechnologyShowcase = () => (
  <section id="work" className="tech-showcase cs-section">
    <div className="cs-container">
      <SectionHeading
        label="Portfolio"
        title="Technology We Create"
        description="Real software for real businesses. Every system built to scale."
      />
    </div>
    <div className="tech-showcase__grid">
      {technologyProducts.map((product, index) => (
        <article
          key={product.id}
          className={`tech-showcase__item animate-fade-up animate-delay-${(index % 4) + 1}`}
        >
          <div className="tech-showcase__device-wrap">
            <DeviceFrame type={product.device} screen={product.screen} tilt />
          </div>
          <div className="tech-showcase__info">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="tech-showcase__tags">
              {product.tags.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
            <a href="#contact" className="tech-showcase__cta">
              Discuss project <ArrowRight size={14} />
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default TechnologyShowcase;
