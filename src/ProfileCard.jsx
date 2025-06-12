import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, age, avatar, rating, bio, location, followers }) {
  return (
    <div className="profile-card">
      <span className="profile-rating">{rating}</span>

      <div className="profile-content">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="profile-avatar"
        />

        <h5 className="profile-name">{name}</h5>
        <p className="profile-age">Age: {age}</p>
        <p className="profile-bio">{bio}</p>
        <p className="profile-location">📍 {location}</p>
        <p className="profile-followers">👥 {followers} followers</p>
      </div>
    </div>
  );
}

export default ProfileCard;
