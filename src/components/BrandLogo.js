import React from 'react';
import './BrandLogo.css';

const BrandMark = () => (
  <svg className="brand-logo__mark" viewBox="0 0 60 52" aria-hidden="true">
    <rect x="2" y="8" width="38" height="12" rx="4" transform="rotate(22 2 14)" fill="currentColor" />
    <rect x="2" y="32" width="28" height="12" rx="4" transform="rotate(-22 2 38)" fill="currentColor" />
  </svg>
);

const BrandLogo = ({ variant = 'nav', className = '' }) => (
  <span className={`brand-logo brand-logo--${variant} ${className}`.trim()}>
    <BrandMark />
    <span className="brand-logo__name">CloudSync</span>
  </span>
);

export default BrandLogo;
