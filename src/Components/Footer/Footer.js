import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>VIT - Vellore</li>
              <li>VIT - Chennai</li>
              <li>VIT - Amaravati</li>
              <li>VIT - Bhopal</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About VITrade</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>VITrade Team</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>VITrade</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Free Classifieds in India. © 2006-2023 VITrade</p>
      </div>
    </div>
  );
}

export default Footer;
