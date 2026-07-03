import React from 'react';
import './HeroVisual.css';

const HeroVisual = () => (
  <div className="hero-visual" aria-hidden="true">
    <div className="hero-dashboard">
      <div className="hero-dashboard__header">
        <span className="hero-dashboard__dot" />
        <span className="hero-dashboard__dot" />
        <span className="hero-dashboard__dot hero-dashboard__dot--accent" />
        <span className="hero-dashboard__title">CloudSync Enterprise Dashboard</span>
      </div>
      <div className="hero-dashboard__body">
        <div className="hero-dashboard__metric">
          <div className="hero-dashboard__metric-label">Uptime</div>
          <div className="hero-dashboard__metric-value">99.9%</div>
          <div className="hero-dashboard__metric-bar">
            <div className="hero-dashboard__metric-fill" style={{ width: '99%' }} />
          </div>
        </div>
        <div className="hero-dashboard__metric">
          <div className="hero-dashboard__metric-label">Active Projects</div>
          <div className="hero-dashboard__metric-value">50+</div>
          <div className="hero-dashboard__metric-bar">
            <div className="hero-dashboard__metric-fill" style={{ width: '75%' }} />
          </div>
        </div>
        <div className="hero-dashboard__metric">
          <div className="hero-dashboard__metric-label">Clients Served</div>
          <div className="hero-dashboard__metric-value">30+</div>
          <div className="hero-dashboard__metric-bar">
            <div className="hero-dashboard__metric-fill" style={{ width: '60%' }} />
          </div>
        </div>
        <div className="hero-dashboard__metric">
          <div className="hero-dashboard__metric-label">Response Time</div>
          <div className="hero-dashboard__metric-value">&lt;2h</div>
          <div className="hero-dashboard__metric-bar">
            <div className="hero-dashboard__metric-fill" style={{ width: '85%' }} />
          </div>
        </div>
        <div className="hero-dashboard__chart">
          <div className="hero-dashboard__bar" />
          <div className="hero-dashboard__bar" />
          <div className="hero-dashboard__bar" />
          <div className="hero-dashboard__bar" />
          <div className="hero-dashboard__bar" />
          <div className="hero-dashboard__bar" />
        </div>
      </div>
      <div className="hero-dashboard__status">
        <span className="hero-dashboard__status-dot" />
        All systems operational
      </div>
    </div>
  </div>
);

export default HeroVisual;
