import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleGoogleRegister = () => {
    console.log('google login here');
  };
  const handleRegister = () => {
    console.log('register here');
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
        <form>
          {/* name */}
          <div className="mb-6">
            <input
              type="text"
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="Name"
              required
            />
          </div>

          {/* email */}
          <div className="mb-6">
            <input
              type="email"
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="Email"
              required
            />
          </div>

          {/* password */}
          <div className="mb-6">
            <input
              type="password"
              className="border-2 border-gray-400 text-primary rounded-lg focus:border-info outline-none block w-full md:w-5/6 mx-auto p-2.5 transition-all ease-in-out duration-500"
              placeholder="password"
              required
            />
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

          {/* register button */}
          <button
            type="submit"
            className="btn w-[222px] mx-auto md:w-72 py-2"
            onClick={handleRegister}
          >
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
