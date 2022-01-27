import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const BlogEditModal = ({ id, openEditModal, setOpenEditModal }) => {
  const [blog, setBlog] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((response) => setBlog(response.data));
  }, []);

  const handleEdit = (data) => {
    console.log(data);
  };

  return (
    <section>
      {/* <!-- Main modal --> */}
      <div
        id="defaultModal"
        aria-hidden="true"
        className={`${
          !openEditModal && 'hidden'
        } overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-40 h-modal md:h-full md:inset-0 flex justify-center itmes-center`}
      >
        <div className="relative w-full max-w-2xl h-full md:h-auto flex justify-center items-center">
          {/* <!-- Modal content --> */}
          <div className="relative w-full bg-white rounded-lg shadow">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-start p-5 rounded-t border-b">
              <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl">
                Edit the blog
              </h3>
              <FontAwesomeIcon
                icon={faTimes}
                color="#fff"
                className="p-1 text-4xl text-info hover:text-info/50 cursor-pointer transition-all duration-500"
                onClick={() => setOpenEditModal(false)}
              />
            </div>

            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit(handleEdit)}>
                {/* blog title */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
                    value={blog.title}
                    {...register('title', {
                      required: 'this is a required field',
                      minLength: {
                        value: 3,
                        message: 'Your name should be at least 3 characters',
                      },
                      maxLength: {
                        value: 20,
                        message: "Your name shouldn't cross 20 characters",
                      },
                    })}
                  />

                  {errors.title && (
                    <p className="text-error mb-2">{errors.title.message}</p>
                  )}
                </div>

                {/* blog image */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
                    value={blog.image}
                    {...register('Blog Image Url', {
                      required: 'this field is required',
                      pattern: {
                        value: /(https?:)?\/\/?[^'"<>]+?\.(jpg|jpeg|gif|png)/,
                        message: 'sorry! this is not an image url',
                      },
                    })}
                  />
                  {errors.title && (
                    <p className="text-error mb-2">{errors.title.message}</p>
                  )}
                </div>

                {/* location */}
                <div className="mb-6">
                  <input
                    className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
                    value={blog.location}
                    {...register('location', {
                      required: 'this is a required field',
                      minLength: {
                        value: 2,
                        message:
                          'Your location name should be at least 2 characters',
                      },
                      maxLength: {
                        value: 20,
                        message: "Your name shouldn't cross 20 characters",
                      },
                    })}
                  />

                  {errors.title && (
                    <p className="text-error mb-2">{errors.title.message}</p>
                  )}
                </div>

                {/* pricing */}
                <div className="mb-6">
                  <input
                    type="number"
                    className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
                    placeholder={blog.price}
                    value={blog.price}
                    {...register('price', {
                      required: 'this field is required',
                      min: {
                        value: 3000,
                        message: 'price should be between 3000 to 9000',
                      },
                      max: {
                        value: 9000,
                        message: 'rating should be between 3000 to 90000',
                      },
                    })}
                  />

                  {errors.price && (
                    <p className="text-error mb-2 w-75 mx-auto">
                      {errors.price.message}
                    </p>
                  )}
                </div>

                {/* rating */}
                <div className="mb-6">
                  <input
                    type="number"
                    className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
                    placeholder="Enter rating between 0 to 5"
                    {...register('rating', {
                      required: 'this field is required',
                      min: {
                        value: 1,
                        message: 'give rating between 0 to 5',
                      },
                      max: {
                        value: 5,
                        message: 'give rating between 0 to 5',
                      },
                    })}
                  />

                  {errors.rating && (
                    <p className="text-error mb-2 w-75 mx-auto">
                      {errors.rating.message}
                    </p>
                  )}
                </div>

                {/* experience of the place */}
                <div className="mb-6">
                  <textarea
                    className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
                    value={blog.desc}
                    {...register('desc', {
                      required: 'this field is required',
                      minLength: {
                        value: 50,
                        message: 'write some more about your experience',
                      },
                      maxLength: {
                        value: 5000,
                        message: "don't add too much info",
                      },
                    })}
                  />

                  {errors.desc && (
                    <p className="text-error mb-2 w-75 mx-auto">
                      {errors.desc.message}
                    </p>
                  )}
                </div>

                {/* category */}
                <div className="mb-6 w-2/3 mx-auto">
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
              </form>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="flex items-center p-6 space-x-2 rounded-b ">
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="btn bg-success hover:bg-success/50"
              >
                Done
              </button>
              <button
                data-modal-toggle="defaultModal"
                type="button"
                className="btn bg-error"
                onClick={() => setOpenEditModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogEditModal;
