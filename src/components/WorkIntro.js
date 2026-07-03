import React from 'react';
import './WorkIntro.css';

const WorkIntro = () => (
  <div className="work-intro">
    <div className="work-intro__line" aria-hidden="true" />
    <div className="cs-container work-intro__inner">
      <span className="work-intro__index">01 — 04</span>
      <h2 className="work-intro__title">
        Production software,<br />
        <em>not mockups.</em>
      </h2>
      <p>Scroll through four systems we architected end-to-end.</p>
    </div>
  </div>
);

export default WorkIntro;
