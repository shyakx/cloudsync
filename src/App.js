import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { 
  FaMobile, 
  FaLaptop, 
  FaCloud, 
  FaChartLine, 
  FaCogs, 
  FaHeadset,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaDatabase,
  FaShieldAlt,
  FaGlobe,
  FaUsers,
  FaAward,
  FaRocket
} from 'react-icons/fa';
import AOS from 'aos';
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';
import './CustomNavbar.css';
import './RwandanImageGallery.css';
import Footer from './Footer';

function App() {
  
  // Contact form states
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Initialize AOS with optimized settings for better performance
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
    
    // Initialize EmailJS with your public key
    emailjs.init("Dn6w5-kRtXr99jX4v");
    
    // 3D Artistic Background Image Rotation with Dynamic Motion
    const backgroundImages = document.querySelectorAll('.background-image');
    let currentImageIndex = 0;
    const transitions = ['fade-in', 'slide-in-left', 'slide-in-right', 'slide-out-left', 'slide-out-right'];
    const motionPatterns = ['zoom-pan', 'rotate-float', 'wave-motion', 'spiral-motion', 'pulse-motion'];
    
    const artisticRotateBackgroundImages = () => {
      const outgoingImage = backgroundImages[currentImageIndex];
      const nextIndex = (currentImageIndex + 1) % backgroundImages.length;
      const incomingImage = backgroundImages[nextIndex];
      
      // Random transition effect
      const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
      const randomMotion = motionPatterns[Math.floor(Math.random() * motionPatterns.length)];
      
      // Hide outgoing image with artistic effect
      if (outgoingImage) {
        outgoingImage.classList.remove(...transitions);
        outgoingImage.classList.add(randomTransition.includes('slide-out') ? randomTransition : 'slide-out-left');
        
        // Add exit motion
        outgoingImage.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        outgoingImage.style.transform = 'scale(0.95) rotate(-2deg) translateY(20px)';
        outgoingImage.style.opacity = '0.7';
        
        setTimeout(() => {
          outgoingImage.style.display = 'none';
          outgoingImage.classList.remove(...transitions);
          outgoingImage.style.transform = '';
          outgoingImage.style.opacity = '';
        }, 800);
      }
      
      // Show incoming image with artistic effect
      if (incomingImage) {
        incomingImage.style.display = 'block';
        incomingImage.classList.remove(...transitions);
        incomingImage.classList.add(randomTransition.includes('slide-in') ? randomTransition : 'slide-in-right');
        
        // Apply dynamic motion pattern
        incomingImage.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        switch(randomMotion) {
          case 'zoom-pan':
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.08) translateX(-3%) translateY(-2%)';
            }, 100);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.03) translateX(2%) translateY(1%)';
            }, 2000);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1) translateX(0) translateY(0)';
            }, 4000);
            break;
            
          case 'rotate-float':
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.05) rotate(1deg) translateY(-10px)';
            }, 100);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.02) rotate(-0.5deg) translateY(5px)';
            }, 2000);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1) rotate(0deg) translateY(0)';
            }, 4000);
            break;
            
          case 'wave-motion':
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.06) skewX(2deg) translateX(-4%)';
            }, 100);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.03) skewX(-1deg) translateX(3%)';
            }, 2000);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1) skewX(0deg) translateX(0)';
            }, 4000);
            break;
            
          case 'spiral-motion':
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.07) rotate(2deg) translateX(-2%) translateY(-3%)';
            }, 100);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.02) rotate(-1deg) translateX(2%) translateY(2%)';
            }, 2000);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1) rotate(0deg) translateX(0) translateY(0)';
            }, 4000);
            break;
            
          case 'pulse-motion':
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.09)';
              incomingImage.style.filter = 'brightness(1.1) contrast(1.05)';
            }, 100);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.02)';
              incomingImage.style.filter = 'brightness(1.05) contrast(1.02)';
            }, 2000);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1)';
              incomingImage.style.filter = 'brightness(1) contrast(1)';
            }, 4000);
            break;
            
          default:
            // Default motion pattern
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.05) translateX(-2%)';
            }, 100);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1.02) translateX(1%)';
            }, 2000);
            setTimeout(() => {
              incomingImage.style.transform = 'scale(1) translateX(0)';
            }, 4000);
            break;
        }
      }
      
      currentImageIndex = nextIndex;
    };
    
    // Start artistic image rotation with varied timing
    let rotationTimeout;
    const getRandomInterval = () => 5000 + Math.random() * 3000; // 5-8 seconds
    const scheduleNextRotation = () => {
      artisticRotateBackgroundImages();
      rotationTimeout = setTimeout(scheduleNextRotation, getRandomInterval());
    };
    
    scheduleNextRotation();
    
    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    const toggleMobileMenu = () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    };
    
    if (navToggle) {
      navToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Cleanup
    return () => {
      clearTimeout(rotationTimeout);
      images.forEach(img => imageObserver.unobserve(img));
      if (navToggle) {
        navToggle.removeEventListener('click', toggleMobileMenu);
      }
    };
  }, []);


  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: contactForm.name,
        from_email: contactForm.email,
        subject: contactForm.subject,
        message: contactForm.message,
        to_email: 'cloudsync.rw@gmail.com'
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_m7aj4ca',
        'template_18ebwqg', 
        templateParams
      );

      console.log('Email sent successfully:', result);
      
      // Show success message
      setSubmitStatus('success');
      setContactForm({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      icon: <FaMobile />,
      title: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android platforms with modern UI/UX design, real-time synchronization, and offline capabilities."
    },
    {
      icon: <FaLaptop />,
      title: "Web Applications",
      description: "Scalable web applications including ERP systems, e-commerce platforms, and business management tools with cloud integration."
    },
    {
      icon: <FaCloud />,
      title: "AI Integration",
      description: "Advanced AI and machine learning solutions integrated into your existing systems for enhanced automation and decision-making."
    },
    {
      icon: <FaChartLine />,
      title: "Data Analysis",
      description: "Comprehensive data analysis and business intelligence solutions to drive informed decision-making and strategic planning."
    },
    {
      icon: <FaCogs />,
      title: "Management Tools",
      description: "Custom management tools and software solutions tailored to your business needs and workflows with real-time reporting."
    },
    {
      icon: <FaHeadset />,
      description: "24/7 technical support and maintenance services to ensure your systems run smoothly and efficiently."
    }
  ];

    const testimonials = [
      {
        text: "Cloud Sync Rwanda helped us build a professional e-commerce platform that sells flowers and cosmetics. Their team is incredibly professional and the results speak for themselves - our sales have significantly boosted since working with them. They truly understand e-commerce and delivered exactly what we needed.",
        author: "Akazuba Florist",
        position: "Owner, Akazuba Florist - E-commerce Store",
        rating: 5
      }
    ];

  const features = [
    {
      icon: <FaDatabase />,
      title: "Cloud Solutions",
      description: "Secure cloud infrastructure and data management solutions"
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      description: "Advanced security measures to protect your business data"
    },
    {
      icon: <FaGlobe />,
      title: "Global Reach",
      description: "Serving clients across East Africa with local expertise"
    },
    {
      icon: <FaUsers />,
      title: "Expert Team",
      description: "Experienced developers and consultants at your service"
    },
    {
      icon: <FaAward />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control for all projects"
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "Cutting-edge technology solutions for modern businesses"
    }
  ];

  const stories = [
    {
      id: 1,
      image: "https://picsum.photos/400/300?random=1",
      title: "Cloud Sync Rwanda Founded",
      year: "2020",
      subtitle: "The Beginning",
      content: "Cloud Sync Rwanda was established with a vision to bring cutting-edge technology solutions to businesses in Rwanda and across East Africa. Our journey started with a small team of passionate developers.",
      quote: "Technology should empower businesses, not complicate them."
    },
    {
      id: 2,
      image: "https://picsum.photos/400/300?random=2",
      title: "First Major Project",
      year: "2021",
      subtitle: "Breaking Ground",
      content: "We successfully delivered our first major e-commerce platform for a local florist, which became a cornerstone project that showcased our capabilities and commitment to excellence.",
      quote: "Success is built one satisfied client at a time."
    },
    {
      id: 3,
      image: "https://picsum.photos/400/300?random=3",
      title: "Expansion and Growth",
      year: "2023",
      subtitle: "Scaling New Heights",
      content: "Our team expanded significantly, and we moved into a larger office space. We also launched several innovative solutions including cloud management tools and mobile applications.",
      quote: "Growth is not just about size, but about impact and quality."
    }
  ];


  return (
    <div className="App">
      {/* Rwandan Cultural Patterns Background */}
      <div className="rwandan-patterns" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.03,
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(245, 166, 35, 0.1) 35px, rgba(245, 166, 35, 0.1) 70px),
          repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(0, 122, 62, 0.1) 35px, rgba(0, 122, 62, 0.1) 70px)
        `,
        backgroundSize: '100px 100px'
      }}></div>

      {/* Galaxy Stars Background */}
      <div className="galaxy-stars" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {[...Array(500)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            backgroundColor: ['#ffffff', '#fffacd', '#ffd700', '#87ceeb', '#ffa500'][Math.floor(Math.random() * 5)],
            borderRadius: '50%',
            opacity: Math.random() * 0.9 + 0.1,
            animation: `twinkle ${1 + Math.random() * 4}s infinite`,
            boxShadow: `0 0 ${Math.random() * 15}px rgba(255, 255, 255, 0.9)`
          }}></div>
        ))}
      </div>

      
      {/* Custom Gold Navigation */}
      <nav className="custom-navbar" style={{position: 'relative', zIndex: 10}}>
        <div className="nav-container">
          <div className="nav-brand" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img 
              src="/images/Real Cloud Sync logo no bg.png" 
              alt="Cloud Sync Logo" 
              style={{
                width: '40px',
                height: '40px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 4px rgba(255, 215, 0, 0.3))'
              }}
            />
            <span className="nav-title">Cloud Sync</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#products" className="nav-link">Products</a></li>
            <li><a href="#testimonials" className="nav-link">Testimonials</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <div className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        {/* 3D Background Animation - Temporarily Disabled */}
        <div className="rwandan-background-gallery">
          <div className="background-gallery-main">
            <div className="background-image-container">
              {/* Background images temporarily disabled for testing */}
            </div>
          </div>
        </div>
        
        {/* Particle Effects */}
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{ 
              left: `${Math.random() * 100}%`, 
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s` 
            }}></div>
          ))}
        </div>

        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <div className="hero-content">
                <h1>Welcome to Cloud Sync Rwanda</h1>
                <p>Leading technology solutions provider in Rwanda, specializing in software development, AI integration, data analysis, and electronic devices. Empowering businesses with innovative digital solutions since 2022. Based in Kigali, Rwanda.</p>
                <div className="d-flex gap-3">
                  <Button variant="primary" size="lg" href="#services">Our Services</Button>
                  <Button variant="outline-primary" size="lg" href="#contact">Contact Us</Button>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="hero-stats">
                <Row>
                  <Col md={6} className="text-center mb-4">
                    <div className="stat-item">
                      <h3>50+</h3>
                      <p>Projects Completed</p>
                    </div>
                  </Col>
                  <Col md={6} className="text-center mb-4">
                    <div className="stat-item">
                      <h3>30+</h3>
                      <p>Happy Clients</p>
                    </div>
                  </Col>
                  <Col md={6} className="text-center mb-4">
                    <div className="stat-item">
                      <h3>3+</h3>
                      <p>Years Experience</p>
                    </div>
                  </Col>
                  <Col md={6} className="text-center mb-4">
                    <div className="stat-item">
                      <h3>24/7</h3>
                      <p>Support Available</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 unified-background">
        <Container>
          <div className="section-title" data-aos="fade-up">
            <h2>Our Services</h2>
            <p>Comprehensive technology solutions to drive your business forward</p>
          </div>
          <Row>
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <div className="service-card" data-service-number={index + 1}>
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 unified-background">
        <Container>
          <div className="section-title">
            <h2>Why Choose Cloud Sync</h2>
            <p>We deliver excellence through innovation and expertise</p>
          </div>
          <Row className="feature-card-container">
            {features.map((feature, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="feature-card">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h5>{feature.title}</h5>
                  <p>{feature.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="unified-background">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <div className="about-content">
                <h2>About Cloud Sync Rwanda</h2>
                <p className="lead">Based in Kigali, Rwanda, Cloud Sync Rwanda is a dynamic technology company that specializes in software development and innovative digital solutions. We serve businesses across East Africa with cutting-edge technology services.</p>
                
                <div className="mt-5">
                  <h5>Why Choose Cloud Sync Rwanda?</h5>
                  <ul>
                    <li>Custom software solutions tailored to your needs</li>
                    <li>AI-powered automation and analytics</li>
                    <li>Local support and maintenance services</li>
                    <li>Competitive pricing and flexible payment options</li>
                    <li>24/7 technical support and consultation</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-left">
              <div className="about-image text-center">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cloud Sync professional team working on technology solutions in Kigali, Rwanda" 
                  className="img-fluid"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Story Section */}
      <section id="products" className="py-5 unified-background">
        <Container>
          <div className="section-title">
            <h2>Our Story</h2>
            <p>The journey of Cloud Sync Rwanda - from vision to impact</p>
          </div>
          <Row>
            {stories.map((story, index) => (
              <Col lg={4} md={6} key={story.id} className="mb-4">
                <div className="story-card" style={{
                  maxWidth: '340px',
                  margin: '0 auto',
                  height: 'auto',
                  transform: 'scale(0.95)',
                  transformOrigin: 'top center'
                }}>
                  <div className="story-header">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="story-image"
                      loading="lazy"
                      width="100%"
                      height="180"
                      style={{objectFit: 'cover'}}
                    />
                    <div className="story-year">{story.year}</div>
                  </div>
                  <div className="story-content" style={{padding: '0.8rem'}}>
                    <h3 style={{fontSize: '1rem', marginBottom: '0.3rem'}}>{story.title}</h3>
                    <h4 className="story-subtitle" style={{fontSize: '0.85rem', marginBottom: '0.3rem', color: 'var(--primary-color)'}}>{story.subtitle}</h4>
                    <p className="story-text" style={{fontSize: '0.8rem', lineHeight: '1.3', marginBottom: '0.3rem'}}>{story.content.substring(0, 100)}...</p>
                    <div className="story-quote">
                      <p style={{fontSize: '0.75rem', fontStyle: 'italic', color: '#666'}}>"{story.quote}"</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="unified-background">
        <Container>
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Testimonials from satisfied customers across Rwanda and East Africa</p>
          </div>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} key={index}>
                <div className="testimonial-card">
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{color: 'var(--primary-color)'}}>¡</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <h6 className="testimonial-author">{testimonial.author}</h6>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 unified-background">
        <Container>
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Get in touch with us for your software development needs</p>
          </div>
          <Row>
            <Col lg={8}>
              <Form onSubmit={handleContactSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="Your Name" 
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactFormChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="email" 
                        placeholder="Your Email" 
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactFormChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="text" 
                    placeholder="Subject" 
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleContactFormChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="Your Message" 
                    name="message"
                    value={contactForm.message}
                    onChange={handleContactFormChange}
                    required
                  />
                </Form.Group>
                <Button 
                  variant="primary" 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3">
                    Error sending message. Please try again or contact us directly.
                  </div>
                )}
              </Form>
            </Col>
            <Col lg={4} data-aos="fade-left">
              <div className="contact-info">
                <h4><FaMapMarkerAlt className="me-2" />Our Location</h4>
                <p>Kigali, Rwanda<br />East Africa</p>

                <h4><FaPhone className="me-2" />Call Us</h4>
                <p>+250 782 194 138<br />+250 793 463 570</p>

                <h4><FaEnvelope className="me-2" />Email Us</h4>
                <p>cloudsync.rw@gmail.com<br />support@cloudsync.rw</p>

                <h4><FaUsers className="me-2" />Our Team</h4>
                <p>Our dedicated team of professionals is ready to help you with your technology needs. Contact us for personalized assistance.</p>

                <h4><FaGlobe className="me-2" />Follow Us</h4>
                <p>
                  <a href="https://www.instagram.com/cloudsync.c?igsh=MXd4d3Z0YXk3bHB0NA%3D%3D&utm_source=qr" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style={{ color: '#E4405F', textDecoration: 'none' }}>
                    ¡ @cloudsync.c
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* New Footer Component */}
      <Footer />

    </div>
  );
}

export default App;