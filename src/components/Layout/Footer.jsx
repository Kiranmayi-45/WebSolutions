    import React from 'react';
    import './Footer.css';

    const Footer = () => {
    // Current year for the copyright notice
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
        <div className="container">
            <div className="footer-content">
            <div className="footer-section about">
                <h3>About Us</h3>
                <p>
                We are a leading digital agency specializing in web development, mobile applications, and UI/UX design.
                Our mission is to help businesses transform their digital presence.
                </p>
                <div className="social-links">
                <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            
            <div className="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
            
            {/* <div className="footer-section contact">
                <h3>Contact Us</h3>
                <ul className="contact-info">
                <li><i className="fas fa-map-marker-alt"></i> 123 Business Street, New York, NY 10001</li>
                <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                <li><i className="fas fa-envelope"></i> info@yourcompany.com</li>
                </ul>
            </div> */}
            
            <div className="footer-section newsletter">
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter to get updates on our latest offers and services.</p>
                <form className="newsletter-form">
                <div className="form-group">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit"><i className="fas fa-paper-plane"></i></button>
                </div>
                </form>
            </div>
            </div>
            
            <div className="footer-bottom">
            <p>&copy; {currentYear} YourBrand. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;