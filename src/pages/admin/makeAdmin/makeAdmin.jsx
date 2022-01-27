import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleMakeAdmin = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div
      style={{ minHeight: 'calc(100vh - 100px)' }}
      className="flex flex-col justify-center items-center"
    >
      <div className="w-full md:w-2/3 space-y-6 text-center px-2 md:px-0">
        <p className="text-6xl font-semibold bg-rose-600 text-white -mt-8">
          Make New Admin
        </p>
        <form onSubmit={handleSubmit(handleMakeAdmin)}>
          {/* email */}
          <div className="mb-6">
            <input
              type="email"
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="Email"
              {...register('email', {
                required: 'this field is required',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please provide correct email address.',
                },
              })}
            />

            {errors.email && (
              <p className="text-error mb-2">{errors.email.message}</p>
            )}
          </div>

          {/* login button */}
          <button type="submit" className="btn w-[222px] mx-auto md:w-72 py-2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
