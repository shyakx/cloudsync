import React from 'react';
import './UIScreen.css';

const UIScreen = ({ variant = 'erp', className = '' }) => (
  <div className={`ui-screen ui-screen--${variant} ${className}`} aria-hidden="true">
    <div className="ui-screen__chrome">
      <div className="ui-screen__dots">
        <span /><span /><span />
      </div>
      <div className="ui-screen__url" />
    </div>
    <div className="ui-screen__body">
      <div className="ui-screen__sidebar" />
      <div className="ui-screen__main">
        <div className="ui-screen__header" />
        <div className="ui-screen__content">
          <div className="ui-screen__cards">
            <div className="ui-screen__card" />
            <div className="ui-screen__card" />
            <div className="ui-screen__card ui-screen__card--accent" />
            <div className="ui-screen__card" />
          </div>
          <div className="ui-screen__chart-area">
            <div className="ui-screen__bars">
              <span /><span /><span /><span /><span /><span />
            </div>
            <div className="ui-screen__table">
              <div className="ui-screen__row" />
              <div className="ui-screen__row" />
              <div className="ui-screen__row" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const MobileUIScreen = ({ variant = 'banking', className = '' }) => (
  <div className={`ui-mobile ui-mobile--${variant} ${className}`} aria-hidden="true">
    <div className="ui-mobile__status" />
    <div className="ui-mobile__header" />
    <div className="ui-mobile__balance" />
    <div className="ui-mobile__actions">
      <span /><span /><span /><span />
    </div>
    <div className="ui-mobile__list">
      <div className="ui-mobile__item" />
      <div className="ui-mobile__item" />
      <div className="ui-mobile__item" />
      <div className="ui-mobile__item" />
    </div>
  </div>
);

export const CompactUIScreen = ({ variant = 'cloud', className = '' }) => (
  <div className={`ui-compact ui-compact--${variant} ${className}`} aria-hidden="true">
    <div className="ui-compact__grid">
      <div className="ui-compact__node ui-compact__node--center" />
      <div className="ui-compact__node" />
      <div className="ui-compact__node" />
      <div className="ui-compact__node" />
      <div className="ui-compact__line ui-compact__line--1" />
      <div className="ui-compact__line ui-compact__line--2" />
      <div className="ui-compact__line ui-compact__line--3" />
    </div>
    <div className="ui-compact__metrics">
      <span /><span /><span />
    </div>
  </div>
);

export default UIScreen;
