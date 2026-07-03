import React from 'react';
import UIScreen, { MobileUIScreen, CompactUIScreen } from './UIScreen';
import './DeviceFrame.css';

const COMPACT_SCREENS = ['cloud', 'security', 'ai', 'networking', 'idea', 'design', 'dev', 'testing', 'deploy', 'support'];
const MOBILE_SCREENS = ['banking', 'delivery', 'booking'];

const DeviceFrame = ({ type = 'macbook', screen = 'erp', className = '', tilt = false }) => {
  const screenContent = () => {
    if (type === 'iphone' || MOBILE_SCREENS.includes(screen)) {
      return <MobileUIScreen variant={screen} />;
    }
    if (COMPACT_SCREENS.includes(screen)) {
      return <CompactUIScreen variant={screen} />;
    }
    return <UIScreen variant={screen} />;
  };

  return (
    <div className={`device device--${type} ${tilt ? 'device--tilt' : ''} ${className}`}>
      {type === 'iphone' && (
        <>
          <div className="device__iphone-notch" />
          <div className="device__iphone-screen">{screenContent()}</div>
          <div className="device__iphone-home" />
        </>
      )}
      {type === 'tablet' && (
        <>
          <div className="device__tablet-camera" />
          <div className="device__tablet-screen">{screenContent()}</div>
        </>
      )}
      {(type === 'macbook' || type === 'laptop') && (
        <>
          <div className="device__laptop-lid">
            <div className="device__laptop-camera" />
            <div className="device__laptop-screen">{screenContent()}</div>
          </div>
          <div className="device__laptop-base" />
          <div className="device__laptop-shadow" />
        </>
      )}
      {type === 'monitor' && (
        <>
          <div className="device__monitor-bezel">
            <div className="device__monitor-screen">{screenContent()}</div>
          </div>
          <div className="device__monitor-neck" />
          <div className="device__monitor-stand" />
        </>
      )}
    </div>
  );
};

export default DeviceFrame;
