import React from 'react';
import travel from '../../../../assets/travel.png';

const Feature = () => {
  return (
    <section className="flex flex-wrap items-center justify-evenly my-3 px-6">
      <div className="space-y-4 w-full md:w-[50%] pl-0 md:pl-24">
        <h3 className="text-4xl capitalize">Enjoy Travelling</h3>
        <p className="w-full lg:w-2/3">
          You will find all kinds of different people travelling experience
          here. Read them to feel your next travelling experience.
        </p>
      </div>
      <div className="w-full md:w-[50%]">
        <img className="w-full" src={travel} alt="feature" />
      </div>
    </section>
  );
};

export default Feature;
