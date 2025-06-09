import Star from './Star';
import { useState } from 'react';

const words = ['Terrible', 'Bad', 'Okay', 'Good', 'Excellent'];

function StarRate() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>{rating > 0 ? words[rating - 1] : 'Rate this!'}</h2>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onClick={() => setRating(index + 1)}
        />
      ))}
    </div>
  );
}

export default StarRate;