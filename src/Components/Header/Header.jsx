import React from 'react';
import ContactIcons from '../ContactIcons';
import HeaderParticleBackground from './HeaderParticleBackground';
import HeaderTypewriterText from './HeaderTypewriterText';

function Header() {
  return (
    <header id="home">
      <nav id="nav-wrap">

        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
          <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#projects">Projects</a></li>
        </ul>
      </nav>

      <div className="banner">
        <div className="banner-text">
            <h1 className="responsive-headline">Ayush Warikoo</h1>
            <HeaderTypewriterText />
            <hr />
            <ul className="social">
              <ContactIcons />
            </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
      <HeaderParticleBackground />
    </header>
  );
}

export default Header;