import React, { useState } from 'react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import './ContactMap.css';

const KIGALI_LAT = -1.9441;
const KIGALI_LNG = 30.0619;
const MAP_EMBED = `https://maps.google.com/maps?q=${KIGALI_LAT},${KIGALI_LNG}&hl=en&z=14&output=embed`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${KIGALI_LAT},${KIGALI_LNG}`;

const ContactMap = () => {
  const [interactive, setInteractive] = useState(false);

  return (
    <div className="contact-map-section animate-fade-up">
      <div className="contact-map">
        <div className={`contact-map__media ${interactive ? 'contact-map__media--active' : ''}`}>
          <iframe
            title="CloudSync office location in Kigali, Rwanda"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            tabIndex={interactive ? 0 : -1}
          />
          {!interactive && (
            <button
              type="button"
              className="contact-map__activate"
              onClick={() => setInteractive(true)}
              aria-label="Enable interactive map"
            >
              <Navigation size={16} />
              Explore map
            </button>
          )}
        </div>

        <div className="contact-map__pin" aria-hidden="true">
          <span className="contact-map__pin-dot" />
          <span className="contact-map__pin-pulse" />
        </div>

        <aside className="contact-map__card">
          <div className="contact-map__card-icon">
            <MapPin size={18} />
          </div>
          <span className="contact-map__card-label">Visit us</span>
          <h3>CloudSync Rwanda</h3>
          <p>Kigali, Rwanda<br />East Africa</p>
          <div className="contact-map__hours">
            <strong>Business hours</strong>
            <span>Mon – Fri · 8:00 AM – 6:00 PM</span>
          </div>
          <a
            href={DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-map__directions"
          >
            Get directions
            <ExternalLink size={14} />
          </a>
        </aside>
      </div>
    </div>
  );
};

export default ContactMap;
