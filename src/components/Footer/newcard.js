import React from 'react';

const Card = ({ description, profileImageUrl, name }) => {
  return (
    <div className="card">
      <div className="profile-icon">
        <img src={profileImageUrl} alt="Profile Icon" />
        <span>{name}</span>
      </div>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
