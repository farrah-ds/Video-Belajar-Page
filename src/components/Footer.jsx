import React from "react";
import "../styles/Footer.css"; // Import CSS

function Footer() {
  return (
    <footer className="footer bg-gray-800 text-white p-8">
      <div className="footer-container flex justify-between">
        <div className="footer-left">
          <img
            src="/assets/videobelajar-logo.png"
            alt="Videobelajar Logo"
            className="footer-logo mb-4"
          />
          <p className="footer-tagline">Upgrade yourself with videobelajar.id!</p>
          <p>Jl. Jerome Polin No. 1 Blok M, Jakarta</p>
          <p>+62-111-1111-1111</p>
        </div>

        <div className="footer-right">
          <div className="footer-category">
            <h4 className="footer-category-title">Category</h4>
            <ul>
              <li>Digital & Tech</li>
              <li>Marketing</li>
              <li>Business Management</li>
              <li>Self Development</li>
              <li>Design</li>
            </ul>
          </div>

          <div className="footer-company">
            <h4 className="footer-company-title">Company</h4>
            <ul>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms of Services</li>
              <li>Help</li>
            </ul>
          </div>

          <div className="footer-community">
            <h4 className="footer-community-title">Community</h4>
            <ul>
              <li>Tips</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom text-center mt-8">
        <p>@2025 Videobelajar All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
