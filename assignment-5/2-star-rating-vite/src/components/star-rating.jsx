import { useState } from 'react';

function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        cursor: 'pointer',
      }}
    >
      {Array.from({ length: totalStars }, (_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{
            fontSize: '2rem',
            color: index < rating ? '#FFD700' : '#e4e5e9',
          }}
        >
          &#9733;
        </span>
      ))}

      <p style={{ marginLeft: '10px' }}>
        Rating: {rating}/{totalStars}
      </p>
    </div>
  );
}

export default StarRating;