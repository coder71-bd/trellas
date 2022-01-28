import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Alert from '../../../components/Alert';
import useAuth from '../../../hooks/useAuth';

const ShareExperience = () => {
  const [openAlert, setOpenAlert] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { admin, user } = useAuth(false);

  const handleShare = (data) => {
    const date = new Date().toDateString();
    const status = admin ? 'approved' : 'pending';
    const allData = {
      ...data,
      time: date,
      name: user.displayName,
      email: user.email,
      status,
    };
    axios
      .post('https://trellas-backend.herokuapp.com/blogs', allData)
      .then(() => {
        setOpenAlert(true);
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <section
      style={{ minHeight: 'calc(100vh - 100px)' }}
      className="flex flex-col justify-center items-center"
    >
      <div className="w-full md:w-2/3 space-y-6 text-center px-2 md:px-0 my-6">
        <p className="text-4xl font-semibold bg-rose-600/90 text-white -mt-8 rounded-lg mx-6 py-3">
          Share Your Travelling Experience
        </p>
        <form onSubmit={handleSubmit(handleShare)}>
          {/* blog title */}
          <div className="mb-6">
            <input
              type="text"
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="Blog title"
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
              placeholder="one image of your travelling"
              {...register('image', {
                required: 'this field is required',
                pattern: {
                  value: /(https?:)?\/\/?[^'"<>]+?\.(jpg|jpeg|gif|png|com)/,
                  message: 'sorry! this is not an image url',
                },
              })}
            />
            {errors.image && (
              <p className="text-error mb-2">{errors.image.message}</p>
            )}
          </div>

          {/* location */}
          <div className="mb-6">
            <input
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="Write the location name"
              {...register('location', {
                required: 'this is a required field',
                minLength: {
                  value: 2,
                  message: 'Your location name should be at least 2 characters',
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

          {/* price */}
          <div className="mb-6">
            <input
              type="number"
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="Enter the amount you have spent in travelling"
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
              placeholder="Write Your experience"
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

          {/* share button */}
          <button
            type="submit"
            className="btn w-[222px] text-xl mx-auto md:w-72 py-3"
          >
            Share
          </button>
        </form>
      </div>

      {!admin && openAlert && (
        <Alert
          message="Your Post is waiting for admin approval"
          openAlert={openAlert}
          setOpenAlert={setOpenAlert}
        />
      )}

      {admin && openAlert && (
        <Alert
          message="Your experience shared with others"
          openAlert={openAlert}
          setOpenAlert={setOpenAlert}
        />
      )}
    </section>
  );
};

export default ShareExperience;
