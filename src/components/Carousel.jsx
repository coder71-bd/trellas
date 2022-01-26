import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import travel_one from '../assets/travel_one.jpg';
import travel_three from '../assets/travel_three.jpg';
import travel_two from '../assets/travel_two.jpg';

const ShowCarousel = () => {
  const images = [
    {
      src: travel_one,
      alt: 'travel 1',
    },
    {
      src: travel_two,
      alt: 'travel 2',
    },
    {
      src: travel_three,
      alt: 'travel 3',
    },
  ];

  return (
    <Carousel
      autoPlay={true}
      showIndicators={false}
      stopOnHover={false}
      swipeable={false}
    >
      {images.map((image) => (
        <div key={image.legend}>
          <div>
            <img
              src={image.src}
              alt={image.legend}
              className="w-full"
              style={{ height: 'calc(100vh - 95px)' }}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ShowCarousel;
