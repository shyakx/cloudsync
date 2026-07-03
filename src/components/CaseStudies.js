import React from 'react';
import { ArrowRight } from 'lucide-react';
import DeviceFrame from './devices/DeviceFrame';
import { caseStudies } from '../data/homeData';
import SectionHeading from './SectionHeading';
import './CaseStudies.css';

const CaseStudies = () => (
  <section id="testimonials" className="case-studies cs-section">
    <div className="cs-container">
      <SectionHeading
        label="Case Studies"
        title="Projects That Deliver"
        description="Real problems. Engineered solutions. Measurable impact."
      />
      <div className="case-studies__list">
        {caseStudies.map((study) => (
          <article
            key={study.company}
            className={`case-study ${study.reverse ? 'case-study--reverse' : ''} animate-fade-up`}
          >
            <div className="case-study__visual">
              <DeviceFrame type={study.device} screen={study.screen} tilt />
            </div>
            <div className="case-study__content">
              <span className="case-study__industry">{study.industry}</span>
              <h3>{study.company}</h3>
              <div className="case-study__block">
                <h4>Problem</h4>
                <p>{study.problem}</p>
              </div>
              <div className="case-study__block">
                <h4>Solution</h4>
                <p>{study.solution}</p>
              </div>
              <div className="case-study__block">
                <h4>Impact</h4>
                <p>{study.impact}</p>
              </div>
              <div className="case-study__metrics">
                {study.metrics.map((m) => (
                  <div key={m.label} className="case-study__metric">
                    <span className="case-study__metric-value">{m.value}</span>
                    <span className="case-study__metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
              <a href="#contact" className="case-study__cta">
                Start your project <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies;
