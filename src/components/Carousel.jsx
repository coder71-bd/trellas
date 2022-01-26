import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import mountain from '../assets/mountain.jpg';

const ShowCarousel = () => {
  const images = [
    {
      src: mountain,
      legend: 'mountain 1',
    },
    {
      src: mountain,
      legend: 'mountain 2',
    },
    {
      src: mountain,
      legend: 'mountain 3',
    },
  ];

  return (
    <Carousel autoPlay={true} showIndicators={false}>
      {images.map((image) => (
        <div key={image.legend} style={{ height: 'calc(100vh - 100px)' }}>
          <div>
            <img src={image.src} alt={image.legend} className="w-full" />
          </div>
          <p className="legend ">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ShowCarousel;
