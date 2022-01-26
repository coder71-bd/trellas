import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Login = () => {
  return (
    <div
      style={{ minHeight: 'calc(100vh - 100px)' }}
      className="flex flex-col justify-center items-center"
    >
      <div className="w-full md:w-2/3 space-y-6 text-center px-2 md:px-0">
        <p className="text-6xl font-semibold bg-cyan-600 text-white -mt-8">
          Trellas
        </p>
        <p className="text-lg">Be a part of our family</p>
        <button className="btn block mx-auto text-2xl">
          <FontAwesomeIcon icon={faGoogle} className="mr-1" />
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
