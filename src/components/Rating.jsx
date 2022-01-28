// font awesome icons
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Rating = ({ rating, iconType }) => {
  const starArr = [];
  let element;
  let i = 0;

  // hack for generating unique key
  if (iconType === regularStar) {
    i += 10;
    rating += 10;
  }

  for (i; i < rating; i++) {
    element = (
      <FontAwesomeIcon
        key={i}
        className="text-xl text-red-500"
        icon={iconType}
      />
    );
    starArr.push(element);
  }
  return starArr;
};

export default Rating;
