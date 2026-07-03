import React from 'react';
import { MapPin, Cpu, Cloud, Shield, Sparkles } from 'lucide-react';
import './AboutVisual.css';

const capabilities = [
  { label: 'Enterprise ERP', x: '8%', y: '12%', delay: '0s' },
  { label: 'Mobile Apps', x: '62%', y: '8%', delay: '0.4s' },
  { label: 'Healthcare Systems', x: '4%', y: '58%', delay: '0.8s' },
  { label: 'Education Platforms', x: '58%', y: '62%', delay: '1.2s' },
];

const stack = ['React', 'Node.js', 'PostgreSQL', 'AWS', 'AI/ML', 'TypeScript'];

const AboutVisual = () => (
  <div className="about-visual animate-fade-up" aria-hidden="true">
    <div className="about-visual__frame">
      <div className="about-visual__grid" />

      <div className="about-visual__location">
        <MapPin size={14} />
        <span>Kigali, Rwanda</span>
      </div>

      {capabilities.map((cap) => (
        <div
          key={cap.label}
          className="about-visual__float-card"
          style={{ '--x': cap.x, '--y': cap.y, '--delay': cap.delay }}
        >
          {cap.label}
        </div>
      ))}

      <div className="about-visual__core">
        <div className="about-visual__core-ring" />
        <div className="about-visual__core-inner">
          <span className="about-visual__stat">50+</span>
          <span className="about-visual__stat-label">Projects engineered</span>
          <div className="about-visual__core-icons">
            <span><Cpu size={16} /></span>
            <span><Cloud size={16} /></span>
            <span><Shield size={16} /></span>
            <span><Sparkles size={16} /></span>
          </div>
        </div>
      </div>

      <div className="about-visual__metrics">
        <div className="about-visual__metric">
          <strong>3+</strong>
          <span>Years</span>
        </div>
        <div className="about-visual__metric about-visual__metric--accent">
          <strong>24/7</strong>
          <span>Support</span>
        </div>
        <div className="about-visual__metric">
          <strong>30+</strong>
          <span>Clients</span>
        </div>
      </div>

      <div className="about-visual__stack">
        {stack.map((tech) => (
          <span key={tech} className="about-visual__stack-item">{tech}</span>
        ))}
      </div>

      <svg className="about-visual__lines" viewBox="0 0 400 400" preserveAspectRatio="none">
        <line x1="200" y1="200" x2="80" y2="60" />
        <line x1="200" y1="200" x2="320" y2="50" />
        <line x1="200" y1="200" x2="60" y2="280" />
        <line x1="200" y1="200" x2="310" y2="290" />
      </svg>
    </div>
  </div>
);

export default AboutVisual;
