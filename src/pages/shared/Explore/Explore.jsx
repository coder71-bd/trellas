import React from 'react';
import { useForm } from 'react-hook-form';
import explore from '../../../assets/explore_bg.jpg';
import BlogCard from '../../../components/BlogCard';
import useBlogs from '../../../hooks/useBlogs';

const Explore = () => {
  const { register, handleSubmit } = useForm();
  const [blogs, setBlogs] = useBlogs();

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
        {/* search with categroy */}
        <div className="flex justify-center">
          <div className="mb-3 xl:w-36">
            <select
              className="form-select appearance-none
      block
      w-full
      px-3
      py-2
      text-base
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
              {...register('category')}
            >
              <option defaultValue>Tour type</option>
              <option value="popular">Popular</option>
              <option value="holidays">Holdiays</option>
              <option value="mountain">Mountain</option>
            </select>
          </div>
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
            {...register('price')}
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

      {/* All and filtered blogs */}
      <div className="flex flex-wrap items-center justify-evenly gap-4 my-12">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Explore;
