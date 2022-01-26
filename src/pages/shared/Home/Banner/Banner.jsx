import React from 'react';
import Carousel from '../../../../components/Carousel';
import Sidebar from '../../../../components/Sidebar';

const Banner = () => {
  return (
    <div className="relative" style={{ height: 'calc(100vh - 95px)' }}>
      <Carousel />
      <Sidebar />
      <div className="absolute top-1/4 lg:left-0 bg-cyan-500/40 mt-6 mr-2 md:mr-0 md:ml-6 lg:ml-12 p-4 md:p-6 roudned-3xl">
        <div className="text-white font-bold">
          <h1 className="text-2xl capitalize w-48 md:w-full lg:text-5xl">
            Travel and share experience
          </h1>
          <p className="text-lg lg:text-3xl text-left md:text-center pt-2 md:pt-3">
            Be a happy Person
          </p>
        </div>
        <div className="w-fit md:mx-auto mt-3 md:mt-6">
          <button className="btn py-3">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
