import React from 'react';
import { Container } from 'react-bootstrap';
import { 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaFacebook, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const footerStyle = {
    background: 'linear-gradient(135deg, rgba(14, 14, 13, 0.3) 0%,  rgba(15, 15, 15, 0.3) 0%, rgba(28, 28, 28, 0.3) 100%)',
  };

  return (
    <footer className="new-footer" style={footerStyle}>
      {/* 3D Animation Elements */}
      <div className="footer-3d-particles"></div>
      <div className="footer-3d-shapes"></div>
      
      {/* Footer Content */}
      <div className="footer-content">
        <Container>
          <div className="footer-grid">
            {/* Logo & Description */}
            <div className="footer-section footer-logo-section">
              <div className="footer-logo">
                <img 
                  src="/images/Real Cloud Sync logo no bg.png" 
                  alt="Cloud Sync Logo" 
                />
                <h3>Cloud Sync</h3>
              </div>
              <p className="footer-description">
                Leading technology solutions provider in Rwanda, specializing in software development, 
                AI integration, and data analysis. Empowering businesses with innovative digital 
                solutions since 2022.
              </p>
              <div className="footer-social">
                <a 
                  href="https://www.instagram.com/cloudsync.c?igsh=MXd4d3Z0YXk3bHB0NA%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#products">Products</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li>
                  <a href="#services">Mobile App Development</a>
                </li>
                <li>
                  <a href="#services">Web Applications</a>
                </li>
                <li>
                  <a href="#services">AI Integration</a>
                </li>
                <li>
                  <a href="#services">Data Analysis</a>
                </li>
                <li>
                  <a href="#services">Custom Software</a>
                </li>
                <li>
                  <a href="#services">Technical Support</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Information</h4>
              <div className="footer-contact-info">
                <p>
                  <FaMapMarkerAlt style={{ color: '#F5A623' }} />
                  Kigali, Rwanda, East Africa
                </p>
                <p>
                  <FaPhone style={{ color: '#F5A623' }} />
                  +250 782 194 138
                </p>
                <p>
                  <FaPhone style={{ color: '#F5A623' }} />
                  +250 793 463 570
                </p>
                <p>
                  <FaEnvelope style={{ color: '#F5A623' }} />
                  <a href="mailto:cloudsync.rw@gmail.com">cloudsync.rw@gmail.com</a>
                </p>
                <p>
                  <FaEnvelope style={{ color: '#F5A623' }} />
                  <a href="mailto:support@cloudsync.rw">support@cloudsync.rw</a>
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p>
              © 2024 Cloud Sync Rwanda. All Rights Reserved. | Based in Kigali, Rwanda | 
              <a href="#privacy" style={{ color: '#F5A623', marginLeft: '10px' }}>Privacy Policy</a> | 
              <a href="#terms" style={{ color: '#F5A623', marginLeft: '10px' }}>Terms of Service</a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
