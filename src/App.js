import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Clock,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import Navbar from './components/Navbar';
import SiteMotion from './components/SiteMotion';
import MotionSection from './components/MotionSection';
import HomeHero from './components/HomeHero';
import WorkIntro from './components/WorkIntro';
import ProductShowcase from './components/ProductShowcase';
import TechMarquee from './components/TechMarquee';
import EngineeringMatrix from './components/EngineeringMatrix';
import ContactMap from './components/ContactMap';
import AboutVisual from './components/AboutVisual';
import SectionHeading from './components/SectionHeading';
import Footer from './Footer';
import { useAnimateOnScroll, useCounter } from './hooks/useAnimateOnScroll';
import './motion/motion-system.css';
import './App.css';

function App() {
  useAnimateOnScroll();

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const yearsRef = useCounter(3);
  const projectsRef = useCounter(50);
  const clientsRef = useCounter(30);

  useEffect(() => {
    emailjs.init('Dn6w5-kRtXr99jX4v');
  }, []);

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send('service_m7aj4ca', 'template_18ebwqg', {
        from_name: contactForm.name,
        from_email: contactForm.email,
        subject: contactForm.subject,
        message: contactForm.message,
        to_email: 'cloudsync.rw@gmail.com',
      });

      setSubmitStatus('success');
      setContactForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeline = [
    { year: '2020', title: 'CloudSync Founded', description: 'Established with a vision to bring cutting-edge technology to Rwanda and East Africa.' },
    { year: '2021', title: 'First Major Project', description: 'Delivered a landmark e-commerce platform that showcased our capabilities.' },
    { year: '2023', title: 'Expansion & Growth', description: 'Team expansion and launch of cloud management tools and mobile applications.' },
  ];

  const openPositions = [
    { title: 'Senior Full-Stack Developer', type: 'Full-time', location: 'Kigali' },
    { title: 'UI/UX Designer', type: 'Full-time', location: 'Kigali' },
    { title: 'DevOps Engineer', type: 'Contract', location: 'Remote' },
  ];

  return (
    <div className="App">
      <SiteMotion />
      <Navbar />

      <main className="site-main">
        <HomeHero />

        <MotionSection variant="work" className="work-intro-section">
          <WorkIntro />
        </MotionSection>

        <ProductShowcase />

        <TechMarquee />

        <MotionSection variant="stats" className="stats-section stats-section--designed cs-section--compact">
          <div className="cs-container">
            <div className="stats-grid">
              <div className="stat-item card-3d animate-fade-up">
                <div className="stat-value" ref={yearsRef}>0+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item card-3d animate-fade-up animate-delay-1">
                <div className="stat-value" ref={projectsRef}>0+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item card-3d animate-fade-up animate-delay-2">
                <div className="stat-value" ref={clientsRef}>0+</div>
                <div className="stat-label">Clients Served</div>
              </div>
              <div className="stat-item card-3d animate-fade-up animate-delay-3">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Support Availability</div>
              </div>
            </div>
          </div>
        </MotionSection>

        <EngineeringMatrix />

        <MotionSection id="about" variant="about" alt className="cs-section">
          <div className="cs-container">
            <div className="about-grid">
              <AboutVisual />
              <div className="animate-fade-up animate-delay-1 section-header-left">
                <span className="section-label">About Us</span>
                <h2 className="about-title heading-3d">About CloudSync</h2>
                <p className="about-lead">
                  A software engineering studio based in Kigali, building enterprise systems
                  for organizations across East Africa.
                </p>
                <div className="about-pillars">
                  <div className="about-pillar card-3d panel-3d">
                    <h4>Mission</h4>
                    <p>To empower organizations with secure, scalable technology that drives growth.</p>
                  </div>
                  <div className="about-pillar card-3d panel-3d">
                    <h4>Vision</h4>
                    <p>East Africa&apos;s most trusted enterprise technology partner.</p>
                  </div>
                  <div className="about-pillar card-3d panel-3d">
                    <h4>Values</h4>
                    <p>Integrity, innovation, excellence, and long-term partnership.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline animate-fade-up">
              {timeline.map((item) => (
                <div key={item.year} className="timeline-item card-3d panel-3d">
                  <span className="timeline-year">{item.year}</span>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>

        <MotionSection id="careers" variant="careers" className="cs-section">
          <div className="cs-container">
            <div className="careers-grid">
              <div className="animate-fade-up section-header-left">
                <span className="section-label">Careers</span>
                <h2 className="about-title heading-3d">Work With Us</h2>
                <p className="about-lead">
                  Join engineers building production software for hospitals, banks, and enterprises.
                </p>
                <ul className="culture-list panel-3d">
                  <li><CheckCircle2 size={18} /> Innovation-driven engineering culture</li>
                  <li><CheckCircle2 size={18} /> Impactful enterprise projects</li>
                  <li><CheckCircle2 size={18} /> Professional growth opportunities</li>
                  <li><CheckCircle2 size={18} /> Competitive compensation</li>
                </ul>
              </div>
              <div className="animate-fade-up animate-delay-2">
                <h3 className="careers-subtitle">Open Positions</h3>
                {openPositions.map((job) => (
                  <div key={job.title} className="cs-card job-card card-3d panel-3d">
                    <div>
                      <h4>{job.title}</h4>
                      <span>{job.location} · {job.type}</span>
                    </div>
                    <span className="job-tag">{job.type}</span>
                  </div>
                ))}
                <a href="#contact" className="cs-btn cs-btn--primary careers-apply">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </MotionSection>

        <MotionSection id="contact" variant="contact" alt className="cs-section">
          <div className="cs-container">
            <SectionHeading
              label="Contact"
              title="Start Your Project"
              description="Tell us what you're building. We respond within one business day."
            />
            <div className="contact-grid">
              <form className="contact-form panel-3d card-3d animate-fade-up" onSubmit={handleContactSubmit}>
                <div className="contact-form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={contactForm.name}
                      onChange={handleContactFormChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@company.com"
                      value={contactForm.email}
                      onChange={handleContactFormChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    value={contactForm.subject}
                    onChange={handleContactFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    required
                  />
                </div>
                <button type="submit" className="cs-btn cs-btn--primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <div className="alert alert-success" role="alert">
                    Message sent successfully. We&apos;ll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="alert alert-danger" role="alert">
                    Error sending message. Please try again or contact us directly.
                  </div>
                )}
              </form>

              <div className="animate-fade-up animate-delay-2">
                <div className="cs-card contact-info-block panel-3d card-3d">
                  <div className="contact-detail">
                    <div className="contact-detail-icon"><MapPin size={18} /></div>
                    <div>
                      <h4>Office</h4>
                      <p>Kigali, Rwanda<br />East Africa</p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon"><Phone size={18} /></div>
                    <div>
                      <h4>Phone</h4>
                      <p>+250 782 194 138<br />+250 793 463 570</p>
                    </div>
                  </div>
                  <div className="contact-detail">
                    <div className="contact-detail-icon"><Mail size={18} /></div>
                    <div>
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:cloudsync.rw@gmail.com">cloudsync.rw@gmail.com</a><br />
                        <a href="mailto:support@cloudsync.rw">support@cloudsync.rw</a>
                      </p>
                    </div>
                  </div>
                  <div className="response-guarantee">
                    <Clock size={18} />
                    <p>We respond to all inquiries within 24 hours on business days.</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactMap />
          </div>
        </MotionSection>
      </main>

      <Footer />
    </div>
  );
}

export default App;
