import React from 'react';
import { Container } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { MapPin, Phone, Mail } from 'lucide-react';
import BrandLogo from './components/BrandLogo';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <Container>
      <div className="footer-grid">
        <div className="footer-section">
          <div className="footer-brand">
            <BrandLogo variant="footer" />
          </div>
          <p className="footer-description">
            Engineering digital transformation for modern businesses across Rwanda and East Africa.
          </p>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/cloudsync.c?igsh=MXd4d3Z0YXk3bHB0NA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#testimonials">Case Studies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li><a href="#work">Enterprise Systems</a></li>
            <li><a href="#work">Mobile Banking</a></li>
            <li><a href="#work">Healthcare Software</a></li>
            <li><a href="#work">Education Platforms</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <div className="footer-contact">
            <p><MapPin size={16} /> Kigali, Rwanda</p>
            <p><Phone size={16} /> +250 782 194 138</p>
            <p><Phone size={16} /> +250 793 463 570</p>
            <p>
              <Mail size={16} />
              <a href="mailto:cloudsync.rw@gmail.com">cloudsync.rw@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CloudSync Rwanda. All rights reserved.</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
