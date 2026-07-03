import React from 'react';
import './TechMarquee.css';

const technologies = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis',
  'AWS', 'Docker', 'React Native', 'Python', 'Supabase', 'Tailwind CSS',
  'GraphQL', 'Kubernetes', 'AI / ML', 'HL7 FHIR',
];

const TechMarquee = () => (
  <section className="tech-marquee" aria-label="Technologies we use">
    <div className="tech-marquee__label">
      <span>Stack &amp; Tools</span>
    </div>
    <div className="tech-marquee__track">
      <div className="tech-marquee__inner">
        {[...technologies, ...technologies].map((tech, i) => (
          <span key={`${tech}-${i}`} className="tech-marquee__item">{tech}</span>
        ))}
      </div>
    </div>
  </section>
);

export default TechMarquee;
