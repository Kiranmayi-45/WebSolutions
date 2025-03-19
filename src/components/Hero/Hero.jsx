import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById('hero-video');
    if (videoElement) {
      videoElement.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
    
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', () => {
          setIsVideoLoaded(true);
        });
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-media">
        {!isVideoLoaded && <div className="hero-placeholder"></div>}
        <video 
          id="hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
          className={isVideoLoaded ? 'loaded' : ''}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-content">
        <div className="container">
          <h1>Welcome to Our Platform</h1>
          <p>Discover the best solutions for your business needs</p>
          <div className="hero-cta">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;