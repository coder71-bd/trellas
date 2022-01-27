import React from 'react';
import { useForm } from 'react-hook-form';
import explore from '../../../assets/explore_bg.jpg';
import BlogCard from '../../../components/BlogCard';

const Explore = () => {
  const { register, handleSubmit } = useForm();
  const handleFilter = (data) => {
    console.log(data);
  };
  return (
    <section style={{ minHeight: 'calc(100vh - 100px)' }}>
      {/* banner */}
      <div
        className="h-48 flex flex-col justify-center items-center text-center"
        style={{
          background: `url(${explore})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom center',
        }}
      >
        <div className="bg-cyan-500/50 py-4">
          <p className="mb-3 text-lg md:text-2xl w-5/6 text-white font-extrabold text-center mx-auto">
            Find The Best Experiences of Travelers
          </p>
          <hr className=" h-2 bg-rose-600 w-1/2 md:w-72 mx-auto" />
        </div>
      </div>

      {/* search bar */}
      <form
        onSubmit={handleSubmit(handleFilter)}
        className="flex flex-wrap sm:flex-nowrap justify-center items-end shadow-lg py-4 gap-4 sm:py-6 px-3"
      >
        {/* Search with place name */}
        <div>
          <input
            type="text"
            placeholder="location Name"
            {...register('location')}
            className="p-2 border-2 outline-none rounded-lg"
          />
        </div>

        {/* search with pricing */}
        <div className="p-2 w-full sm:w-72">
          <h5 className="text-lg font-semibold text-primary">Pricing</h5>
          <input
            type="range"
            className="w-full cursor-pointer"
            min="3000"
            max="9000"
            step="3000"
            {...register('pricing')}
          />
          <ul className="flex justify-between">
            <li className="flex justify-center relative">
              <span className="absolute">3k</span>
            </li>
            <li className="flex justify-center relative">
              <span className="absolute">6k</span>
            </li>
            <li className="flex justify-center relative">
              <span className="absolute">9k</span>
            </li>
          </ul>
        </div>

        {/* search with rating */}
        <div className="p-2 w-full sm:w-72">
          <h5 className="text-lg font-semibold text-primary">Rating</h5>
          <input
            type="range"
            className="w-full cursor-pointer"
            min="1"
            max="5"
            step="1"
            {...register('rating')}
          />
          <ul className="flex justify-between w-full px-2">
            <li className="flex justify-center relative">
              <span className="absolute">1</span>
            </li>
            <li className="flex justify-center relative">
              <span className="absolute">2</span>
            </li>
            <li className="flex justify-center relative">
              <span className="absolute">3</span>
            </li>
            <li className="flex justify-center relative">
              <span className="absolute">4</span>
            </li>
            <li className="flex justify-center relative">
              <span className="absolute">5</span>
            </li>
          </ul>
        </div>

        {/* submit btn */}
        <button type="submit" className="btn">
          Filter
        </button>
      </form>

      {/* All blogs */}
      <BlogCard />
    </section>
  );
};

export default Explore;
