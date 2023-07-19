import React from 'react';
import '../../App.css'
const Footer = () => {
  return (
    <footer className="footer bg-black text-light"  style = {{top: '100px'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact Us</h3>
            <p>
            Made For Money Makers
            </p>
          </div>
          <div className="col-md-3">
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/about">Facebook</a>
              </li>
              <li>
                <a href="/services">Linkedin</a>
              </li>
              <li>
                <a href="/contact">GitHub</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <ul className="list-unstyled contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i> 123 Main Street, City, Country
              </li>
              <li>
                <i className="fas fa-phone"></i> +1 123-456-7890
              </li>
              <li>
                <i className="fas fa-envelope"></i> info@example.com
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="text-center">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
