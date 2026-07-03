import React from 'react';
import DeviceFrame from './devices/DeviceFrame';
import { heroDevices } from '../data/homeData';
import './HeroDeviceShowcase.css';

const HeroDeviceShowcase = () => (
  <div className="hero-showcase" aria-hidden="true">
    <div className="hero-showcase__stage">
      {heroDevices.map((item, i) => (
        <div
          key={`${item.screen}-${i}`}
          className={`hero-showcase__device ${item.className}`}
          style={{ '--float-delay': `${i * 0.7}s` }}
        >
          <DeviceFrame type={item.device} screen={item.screen} tilt />
        </div>
      ))}
    </div>
  </div>
);

export default HeroDeviceShowcase;
