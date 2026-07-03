import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import '../CustomNavbar.css';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#careers', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`custom-navbar ${scrolled ? 'custom-navbar--scrolled' : 'custom-navbar--transparent'}`}
      aria-label="Main navigation"
    >
      <div className="nav-container">
        <a href="#home" className="nav-brand" aria-label="CloudSync home">
          <BrandLogo variant="nav" />
        </a>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link" onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-cta-mobile">
            <a href="#contact" className="cs-btn cs-btn--primary nav-cta" onClick={closeMenu}>
              Request Consultation
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a href="#contact" className="cs-btn cs-btn--primary nav-cta">
            Request Consultation
          </a>
        </div>

        <button
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
