import React from "react";
import "./Footer.css"; // Import the updated CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h1>MEDEASE</h1>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">What's New</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Help Topics</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Report Violation</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Legal</h3>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 All Rights Reserved Health Hive</p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
