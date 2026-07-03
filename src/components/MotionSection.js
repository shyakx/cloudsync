import React from 'react';
import './MotionSection.css';

const MotionSection = ({
  id,
  variant = 'default',
  alt = false,
  className = '',
  children,
  as: Tag = 'section',
}) => (
  <Tag
    id={id}
    className={[
      'motion-section',
      `motion-section--${variant}`,
      alt ? 'motion-section--alt' : '',
      className,
    ].filter(Boolean).join(' ')}
  >
    <div className="motion-section__ambient" aria-hidden="true">
      <div className="motion-section__grid" />
      <div className="motion-section__prism motion-section__prism--1" />
      <div className="motion-section__prism motion-section__prism--2" />
      <div className="motion-section__prism motion-section__prism--3" />
    </div>
    <div className="motion-section__content">
      {children}
    </div>
  </Tag>
);

export default MotionSection;
