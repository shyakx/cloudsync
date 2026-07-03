import React from 'react';
import { ArrowRight } from 'lucide-react';
import HeroGeoVisual from './HeroGeoVisual';
import './HomeHero.css';

const HomeHero = () => (
  <header id="home" className="home-hero">
    <div className="home-hero__fade" aria-hidden="true" />
    <div className="cs-container home-hero__container">
      <div className="home-hero__layout">
        <div className="home-hero__copy animate-fade-up">
          <span className="hero-label">Kigali · East Africa</span>
          <h1>
            <span className="home-hero__line">Engineering</span>
            <span className="home-hero__line home-hero__line--accent">the cloud era.</span>
          </h1>
          <p className="home-hero__lead">
            CloudSync designs and ships enterprise software — from hospital systems
            to cross-platform mobile apps — with the precision of a product studio.
          </p>
          <div className="home-hero__actions">
            <a href="#work" className="cs-btn cs-btn--primary home-hero__cta">
              See what we build
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="home-hero__metrics">
            <div>
              <strong>50+</strong>
              <span>Products delivered</span>
            </div>
            <div className="home-hero__metric-sep" aria-hidden="true" />
            <div>
              <strong>30+</strong>
              <span>Active clients</span>
            </div>
            <div className="home-hero__metric-sep" aria-hidden="true" />
            <div>
              <strong>24/7</strong>
              <span>Engineering support</span>
            </div>
          </div>
        </div>

        <div className="home-hero__stage stage-3d animate-fade-up animate-delay-1">
          <HeroGeoVisual />
        </div>
      </div>
    </div>
  </header>
);

export default HomeHero;
