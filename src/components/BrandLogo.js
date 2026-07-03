import React from 'react';
import './BrandLogo.css';

const LOGO_SRC = `${process.env.PUBLIC_URL}/images/NEWLOGO.png`;

const BrandLogo = ({ variant = 'nav', className = '', showName = true }) => (
  <span className={`brand-logo brand-logo--${variant} ${className}`.trim()}>
    <img
      src={LOGO_SRC}
      alt="CloudSync"
      className="brand-logo__mark"
    />
    {showName && <span className="brand-logo__name">CloudSync</span>}
  </span>
);

export default BrandLogo;
