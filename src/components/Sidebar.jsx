import React from 'react';
import sajek from '../assets/sajek.jpg';
import sylhet from '../assets/sylhet.jpg';
import verona from '../assets/verona.jpg';

const Sidebar = () => {
  const places = [
    { name: 'Verona', img: verona },
    { name: 'Sylhet', img: sylhet },
    { name: 'Sajek', img: sajek },
  ];
  return (
    <div
      className="absolute top-0 right-0 bg-white flex flex-col justify-center p-3 z-40"
      style={{ height: 'calc(100vh - 95px)' }}
    >
      {places.map((place) => (
        <div
          key={place.name}
          className="w-fit border-t-4 border-t-rose-500 rounded-sm mb-4"
        >
          <h5 className="text-2xl text-center italic font-semibold pb-3">
            {place.name}
          </h5>
          <img
            src={place.img}
            alt={place.name}
            className="w-20 mx-auto cursor-pointer transform hover:scale-150 hover:-translate-x-9 transition-transform ease-in-out duration-500"
          />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
