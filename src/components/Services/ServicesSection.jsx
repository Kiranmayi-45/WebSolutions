import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications tailored to your business needs with responsive design and modern technologies.',
      icon: 'code'
    },
    {
      id: 2,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',
      icon: 'smartphone'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality to create intuitive and engaging interfaces.',
      icon: 'palette'
    },
    {
      id: 4,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for storage, computing, and application deployment with 24/7 support.',
      icon: 'cloud'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;