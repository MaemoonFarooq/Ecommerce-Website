import React, { useState } from 'react';
import './flipcard.css'; // Import your CSS for styling

function FlipCard({ imageSrc, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt="hello" className="image" />
        </div>
        <div className="flip-card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
