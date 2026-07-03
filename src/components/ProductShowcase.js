import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/productsData';
import EnterpriseDashboard from './products/EnterpriseDashboard';
import MobileBankingApp from './products/MobileBankingApp';
import HospitalSystem from './products/HospitalSystem';
import SchoolPlatform from './products/SchoolPlatform';
import ProductFrame from './ProductFrame';
import './products/products-canvas.css';
import './ProductShowcase.css';

const PRODUCT_COMPONENTS = {
  EnterpriseDashboard,
  MobileBankingApp,
  HospitalSystem,
  SchoolPlatform,
};

const ProductShowcase = () => {
  const slidesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    slidesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="work" className="work-showcase">
      {products.map((product, index) => {
        const Component = PRODUCT_COMPONENTS[product.component];
        const flipped = index % 2 === 1;

        return (
          <section
            key={product.id}
            ref={(el) => { slidesRef.current[index] = el; }}
            className={`work-slide${flipped ? ' work-slide--flip' : ''}${index === 0 ? ' is-visible' : ''}`}
            id={index === 0 ? 'home-product' : `product-${product.id}`}
          >
            <div className="cs-container work-slide__container">
              <div className={`work-slide__layout${product.device === 'mobile' ? ' work-slide__layout--phone' : ''}`}>
                <div className="work-slide__copy">
                  <span className="work-slide__count">
                    {String(index + 1).padStart(2, '0')}
                    <span className="work-slide__count-sep">/</span>
                    04
                  </span>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <div className="work-slide__tags">
                    {product.tags.map((tag) => (
                      <span key={tag} className="work-slide__tag">{tag}</span>
                    ))}
                  </div>
                  <a href="#contact" className="cs-btn cs-btn--primary work-slide__cta">
                    Request Consultation
                    <ArrowRight size={16} />
                  </a>
                </div>

                <div className="work-slide__preview stage-3d">
                  <ProductFrame device={product.device}>
                    {Component ? <Component /> : null}
                  </ProductFrame>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default ProductShowcase;
