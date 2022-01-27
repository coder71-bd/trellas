import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    reset();
  };
  const handleGoogleLogin = () => {
    console.log('google login here');
  };

  // clear error messages
  const handleError = () => {
    // set firebase error to ''
  };

  return (
    <div
      style={{ minHeight: 'calc(100vh - 100px)' }}
      className="flex flex-col justify-center items-center"
    >
      <div className="w-full md:w-2/3 space-y-6 text-center px-2 md:px-0">
        <p className="text-6xl font-semibold bg-cyan-600 text-white -mt-8">
          Trellas
        </p>
        <p className="text-lg">Happy to see you again</p>
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* email */}
          <div className="mb-6">
            <input
              onFocus={handleError}
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

          {/* password */}
          <div className="mb-6">
            <input
              onFocus={handleError}
              type="password"
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="password"
              {...register('password', {
                required: 'this field is required',
                minLength: {
                  value: 6,
                  message: 'Your password should be at least 6 characters',
                },
              })}
            />

            {errors.password && (
              <p className="text-error mb-2 w-75 mx-auto">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Don't have an account */}
          <div className="mb-3 text-sm">
            <label htmlFor="remember" className="font-medium text-gray-900">
              Don't have an account{' '}
              <Link to="/register" className="text-blue-500 underline">
                Register now
              </Link>
            </label>
          </div>

          {/* login button */}
          <button type="submit" className="btn w-[222px] mx-auto md:w-72 py-2">
            Login
          </button>
        </form>
        <button
          className="btn block mx-auto text-xl md:text-2xl"
          onClick={handleGoogleLogin}
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-1" />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
