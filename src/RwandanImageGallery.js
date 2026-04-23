import React, { useState, useEffect } from 'react';
import './RwandanImageGallery.css';

const RwandanImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rwandan location data using actual images
  const images = [
    {
      src: '/images/convention fireworks.jpg',
      title: 'Kigali Convention Centre',
      description: 'Iconic architectural landmark with spectacular fireworks display',
      location: 'Kigali'
    },
    {
      src: '/images/Sunset.jpg',
      title: 'Rwandan Sunset',
      description: 'Breathtaking sunset showcasing Rwanda\'s natural beauty',
      location: 'Lake Kivu'
    },
    {
      src: '/images/Gorrila.jpg',
      title: 'Mountain Gorilla',
      description: 'Majestic gorilla from Volcanoes National Park',
      location: 'Musanze'
    },
    {
      src: '/images/giswati forest.jpg',
      title: 'Giswati Forest',
      description: 'Pristine forest reserve with rich biodiversity',
      location: 'Western Province'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePrev = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const handleNext = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div className="rwandan-background-gallery">
      {/* Background Image Display */}
      <div className="background-gallery-main">
        <div className="background-image-container">
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].title}
            className="background-image"
          />
        </div>
      </div>

      {/* Subtle Navigation Arrows */}
      <button className="background-gallery-nav prev" onClick={handlePrev}>
        <span>?</span>
      </button>
      <button className="background-gallery-nav next" onClick={handleNext}>
        <span>?</span>
      </button>

      {/* Progress Indicators */}
      <div className="background-gallery-progress">
        {images.map((_, index) => (
          <button
            key={index}
            className={`background-progress-dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RwandanImageGallery;
