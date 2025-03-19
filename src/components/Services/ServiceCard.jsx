import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const { title, description, icon } = service;

  const getIconClass = (iconName) => {
    return `fas fa-${iconName}`;
  };

  return (
    <div className="service-card">
      <div className="service-icon">
        <i className={getIconClass(icon)}></i>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="service-btn">Learn More</button>
    </div>
  );
};

export default ServiceCard;