import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Sitesoch</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <Link href="/">Shipping</Link>
              </li>
              <li>
                <Link href="/">Returns</Link>
              </li>
              <li>
                <Link href="/">Order Status</Link>
              </li>
              <li>
                <Link href="/">Payment Options</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Address</h4>
            <ul>
              <li>
                <a href="#">20-22 Wenlock Road London N1 7GU United Kingdom</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100009063073831"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/developer-ariful/"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/ariful_1122"
              >
                <i className="fab fa-twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
