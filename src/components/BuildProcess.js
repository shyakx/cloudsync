import React from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import './BuildProcess.css';

const steps = [
  {
    icon: Search,
    num: '01',
    title: 'Discover',
    text: 'We map workflows, stakeholders, and technical constraints before writing a line of code.',
  },
  {
    icon: PenTool,
    num: '02',
    title: 'Design',
    text: 'Product flows, UI systems, and architecture blueprints aligned to your operations.',
  },
  {
    icon: Code2,
    num: '03',
    title: 'Build',
    text: 'Agile sprints with clean code, automated tests, and weekly demos you can react to.',
  },
  {
    icon: Rocket,
    num: '04',
    title: 'Deploy',
    text: 'Cloud rollout, monitoring, training, and ongoing support with clear SLAs.',
  },
];

const BuildProcess = () => (
  <section className="build-process cs-section">
    <div className="cs-container">
      <div className="build-process__header animate-fade-up">
        <span className="section-label">How We Work</span>
        <h2>From Brief to Production</h2>
        <p>A disciplined engineering process built for enterprise delivery.</p>
      </div>

      <div className="build-process__track">
        <div className="build-process__line" aria-hidden="true" />
        <div className="build-process__steps">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <article
                key={step.num}
                className={`build-process__step animate-fade-up animate-delay-${(i % 4) + 1}`}
              >
                <div className="build-process__card">
                  <div className="build-process__icon">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <span className="build-process__num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default BuildProcess;
