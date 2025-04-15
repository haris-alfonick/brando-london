'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

interface reviewStar {
    rating: number,
    reviewCount: number
}

const StarRating = ({ rating, reviewCount }: reviewStar) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FontAwesomeIcon key={i} icon={solidStar} width={16}  className="text-[#eae640]" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} width={16} className="text-[#eae640]" />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={regularStar} width={16} className="text-[#eae640]" />);
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <div className="flex space-x-0.5">{stars}</div>
      <span className="text-sm text-[#6b7280]">
        ({reviewCount}{reviewCount === 1})
      </span>
    </div>
  );
};

export default StarRating;
