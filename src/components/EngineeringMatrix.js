import React from 'react';
import MotionSection from './MotionSection';
import './EngineeringMatrix.css';

const cells = [
  {
    size: 'large',
    label: 'Cloud & DevOps',
    title: 'Infrastructure that scales',
    text: 'AWS, Docker, CI/CD — deployed with monitoring and zero-downtime rollouts.',
    mesh: 'cloud',
  },
  {
    size: 'small',
    label: 'Mobile',
    title: 'iOS & Android',
    text: 'React Native and Flutter apps across fintech, retail, health, and logistics.',
    mesh: 'mobile',
  },
  {
    size: 'small',
    label: 'Data',
    title: 'PostgreSQL & Redis',
    text: 'Reliable data layers at scale.',
    mesh: 'data',
  },
  {
    size: 'medium',
    label: 'Security',
    title: 'Enterprise-grade auth',
    text: 'RBAC, encryption, audit logs, and compliance-aware architecture.',
    mesh: 'security',
  },
  {
    size: 'medium',
    label: 'AI',
    title: 'Intelligent systems',
    text: 'ML pipelines and AI features woven into production workflows.',
    mesh: 'ai',
  },
];

const EngineeringMatrix = () => (
  <MotionSection variant="engineering" className="eng-matrix cs-section cs-section--alt">
    <div className="cs-container layer-surface">
      <div className="eng-matrix__header animate-fade-up">
        <span className="section-label">Engineering</span>
        <h2 className="heading-3d">The stack behind every build</h2>
      </div>

      <div className="eng-matrix__grid">
        {cells.map((cell, i) => (
          <article
            key={cell.label}
            className={`eng-matrix__cell eng-matrix__cell--${cell.size} eng-matrix__cell--${cell.mesh} card-3d panel-3d animate-fade-up animate-delay-${(i % 5) + 1}`}
          >
            <div className="eng-matrix__mesh layer-back" aria-hidden="true" />
            <div className="eng-matrix__body">
              <span className="eng-matrix__label">{cell.label}</span>
              <h3>{cell.title}</h3>
              <p>{cell.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </MotionSection>
);

export default EngineeringMatrix;
