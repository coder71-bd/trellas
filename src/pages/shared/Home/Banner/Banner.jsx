import React from 'react';
import Carousel from '../../../../components/Carousel';

const Banner = () => {
  return (
    <div className="bg-rose-500" style={{ height: 'calc(100vh - 120px)' }}>
      <Carousel />
    </div>
  );
};

export default Banner;
