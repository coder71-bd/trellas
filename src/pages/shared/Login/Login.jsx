import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogin = () => {
    console.log('login here');
  };
  const handleGoogleLogin = () => {
    console.log('google login here');
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
        <form>
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
          <button
            type="submit"
            className="btn w-[222px] mx-auto md:w-72 py-2"
            onClick={handleLogin}
          >
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
