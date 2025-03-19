import React, { useState } from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Generate initials for avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Generate random pastel color based on user id
  const getAvatarColor = (id) => {
    const hue = id * 137.508 % 360; // Using golden angle approximation
    return `hsl(${hue}, 70%, 80%)`;
  };

  return (
    <div className={`user-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="user-card-header" onClick={toggleExpand}>
        <div 
          className="user-avatar" 
          style={{ backgroundColor: getAvatarColor(user.id) }}
        >
          {getInitials(user.name)}
        </div>
        <div className="user-basic-info">
          <h3>{user.name}</h3>
          <p className="user-username">@{user.username}</p>
        </div>
        <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
      </div>
      
      {isExpanded && (
        <div className="user-details">
          <div className="detail-item">
            <i className="fas fa-envelope"></i>
            <span>{user.email}</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-phone"></i>
            <span>{user.phone}</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-globe"></i>
            <span>{user.website}</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-building"></i>
            <span>{user.company.name}</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{user.address.city}, {user.address.street}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;