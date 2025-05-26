import React from 'react';

const FriendsCard = ({ name, image, hobby, quote, contact }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 text-center">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p><strong>Hobby:</strong> {hobby}</p>
          <p><em>"{quote}"</em></p>
          <p><strong>Contact:</strong> {contact}</p>
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
