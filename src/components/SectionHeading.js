import React from 'react';

const SectionHeading = ({ label, title, description }) => (
  <div className="section-heading">
    {label && <span className="section-label">{label}</span>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);

export default SectionHeading;
