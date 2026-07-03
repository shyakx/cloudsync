import React from 'react';
import { Building2, HeartPulse, GraduationCap, Landmark } from 'lucide-react';
import './IndustriesGrid.css';

const industries = [
  {
    id: 'enterprise',
    icon: Building2,
    title: 'Enterprise & Operations',
    text: 'ERP, inventory, finance, and executive dashboards for growing organizations.',
    accent: '#111',
    preview: 'enterprise',
  },
  {
    id: 'finance',
    icon: Landmark,
    title: 'Financial Services',
    text: 'Mobile banking, payments, KYC workflows, and secure transaction platforms.',
    accent: '#FFCF00',
    preview: 'finance',
  },
  {
    id: 'health',
    icon: HeartPulse,
    title: 'Healthcare',
    text: 'Patient records, pharmacy, billing, and clinical workflow systems.',
    accent: '#111',
    preview: 'health',
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    text: 'School management, attendance, grading, fees, and parent portals.',
    accent: '#FFCF00',
    preview: 'education',
  },
];

const IndustriesGrid = () => (
  <section className="industries cs-section cs-section--alt">
    <div className="cs-container">
      <div className="industries__header animate-fade-up">
        <span className="section-label">Industries</span>
        <h2>Sectors We Build For</h2>
        <p>Domain-specific software tailored to how each industry actually operates.</p>
      </div>

      <div className="industries__grid">
        {industries.map((item, i) => {
          const Icon = item.icon;
          return (
            <article
              key={item.id}
              className={`industries__card animate-fade-up animate-delay-${(i % 4) + 1}`}
            >
              <div className={`industries__preview industries__preview--${item.preview}`}>
                <div className="industries__preview-ui" />
              </div>
              <div className="industries__body">
                <div className="industries__icon">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default IndustriesGrid;
