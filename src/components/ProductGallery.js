import { useEffect, useRef } from 'react';
import DeviceFrame from './devices/DeviceFrame';
import { galleryProducts } from '../data/homeData';
import SectionHeading from './SectionHeading';
import './ProductGallery.css';

const ProductGallery = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight - window.innerHeight;
      if (sectionHeight <= 0) return;

      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(scrolled / sectionHeight, 1);
      const maxTranslate = track.scrollWidth - window.innerWidth + 48;
      track.style.transform = `translateX(-${progress * maxTranslate}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="product-gallery" id="gallery">
      <div className="product-gallery__sticky">
        <div className="cs-container">
          <SectionHeading
            label="Product Gallery"
            title="Software in Motion"
            description="Scroll to explore the platforms we engineer."
          />
        </div>
        <div className="product-gallery__viewport">
          <div ref={trackRef} className="product-gallery__track">
            {galleryProducts.map((product, i) => (
              <div key={product.screen} className="product-gallery__slide">
                <div className="product-gallery__slide-inner">
                  <span className="product-gallery__index">{String(i + 1).padStart(2, '0')}</span>
                  <div className="product-gallery__device">
                    <DeviceFrame type="macbook" screen={product.screen} tilt />
                  </div>
                  <div className="product-gallery__caption">
                    <span className="product-gallery__label">{product.label}</span>
                    <h3>{product.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="product-gallery__hint">Scroll to explore</div>
      </div>
    </section>
  );
};

export default ProductGallery;
