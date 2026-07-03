import React from 'react';
import {
  Cloud,
  Shield,
  Smartphone,
  Database,
  Brain,
  Headphones,
} from 'lucide-react';
import './CapabilitiesBand.css';

const capabilities = [
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    text: 'AWS deployments, CI/CD pipelines, and infrastructure that scales with demand.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Engineering',
    text: 'Native-feel iOS and Android apps with offline support and secure auth.',
  },
  {
    icon: Database,
    title: 'Data Platforms',
    text: 'PostgreSQL, Redis, and analytics pipelines built for reliability.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    text: 'Encryption, RBAC, audit trails, and standards-aware system design.',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    text: 'Intelligent automation, chat interfaces, and ML-powered insights.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    text: 'Dedicated support with SLAs, monitoring, and proactive maintenance.',
  },
];

const CapabilitiesBand = () => (
  <section className="capabilities-band cs-section">
    <div className="cs-container">
      <div className="capabilities-band__header animate-fade-up">
        <span className="section-label">Capabilities</span>
        <h2>Full-Stack Engineering</h2>
        <p>Everything you need to design, build, and run enterprise software.</p>
      </div>

      <div className="capabilities-band__grid">
        {capabilities.map((cap, i) => {
          const Icon = cap.icon;
          return (
            <article
              key={cap.title}
              className={`capabilities-band__item animate-fade-up animate-delay-${(i % 6) + 1}`}
            >
              <div className="capabilities-band__icon">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.text}</p>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default CapabilitiesBand;
