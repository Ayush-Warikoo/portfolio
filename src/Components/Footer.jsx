import React from 'react';
import ContactIcons from './ContactIcons';

function Footer() {
  return (
    <footer>
    <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
              <ContactIcons />
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
    </div>
  </footer>);
}

export default Footer;