import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Nav links
  const navLinks = [
    { text: 'Home', href: '#' },
    { text: 'Services', href: '#services' },
    { text: 'Pricing', href: '#pricing' },
    { text: 'Users', href: '#users' },
    { text: 'Contact', href: '#contact' }
  ];

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking a nav link
  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#">HouseOfMarkTech</a>
          </div>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
          </button>
          
          <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    onClick={handleNavLinkClick}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <button className="btn btn-primary header-cta">Get Started</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;