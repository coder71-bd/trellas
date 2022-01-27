import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { processSignUp, setAuthError, authError } = useAuth();

  const navigate = useNavigate();

  const handleGoogleRegister = () => {
    console.log('google login here');
  };
  const handleRegister = async ({ name, email, password }) => {
    const result = await processSignUp(name, email, password, navigate);
    reset();
  };

  // clear error messages
  const handleError = () => {
    setAuthError('');
  };

  return (
    <div
      style={{ minHeight: 'calc(100vh - 100px)' }}
      className="flex flex-col justify-center items-center"
    >
      <div className="w-full md:w-2/3 space-y-6 text-center px-2 md:px-0">
        <p className="text-6xl font-semibold bg-cyan-600 text-white -mt-8 py-1">
          Trellas
        </p>
        <p className="text-xl text-primary font-bold tracking-wider">
          Be a part of our family
        </p>
        <form onSubmit={handleSubmit(handleRegister)}>
          {/* name */}
          <div className="mb-6">
            <input
              onFocus={handleError}
              type="text"
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="Name"
              {...register('name', {
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
            {errors.name && <p className="text-error">{errors.name.message}</p>}
          </div>

          {/* email */}
          <div className="mb-6">
            <input
              onFocus={handleError}
              type="email"
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="Email"
              {...register('email', {
                required: 'this is a required field',
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
                pattern: {
                  value: /(?=.*[!@#$&*])/,
                  message:
                    'please provide atleast one special charaters (@, # etc.)',
                },
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

          {/* link to go in login page */}
          <div className="mb-3 text-sm">
            <label htmlFor="remember" className="font-medium text-gray-900">
              Allready Registered{' '}
              <Link to="/login" className="text-blue-500 underline">
                Login here
              </Link>
            </label>
          </div>

          {/* show firebase error */}
          {authError && <p className="text-error my-2">{authError}</p>}

          {/* register button */}
          <button type="submit" className="btn w-[222px] mx-auto md:w-72 py-2">
            Register
          </button>
        </form>
        <button
          className="btn block mx-auto text-xl md:text-2xl"
          onClick={handleGoogleRegister}
        >
          <FontAwesomeIcon icon={faGoogle} className="mr-1" />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
