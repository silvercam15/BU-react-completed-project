import * as React from 'react';
import './style.css';

export default function HeaderComponent() {
  return (
    <div>
      <div className="header">
        <a href="#default" className="logo">
          Petfinder
        </a>
        <div className="header-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </div>
  );
}
