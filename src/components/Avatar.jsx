import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import useAuth from '../hooks/useAuth';

const Avatar = ({ src }) => {
  const [show, setShow] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout().then(() => {
      navigate('/');
    });
  };
  return (
    <div className="relative">
      <div
        className="w-12 h-12 md:w-16 md:h-16 cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <img
          className="w-full h-full rounded-full"
          src={src ? src : avatar}
          alt="avatar"
        />
      </div>
      <div
        className={`${!show && 'hidden'} absolute right-0 flex flex-col z-50`}
      >
        <Link to="/user/dashboard" className="border-2 bg-white p-3">
          Dashboard
        </Link>
        <button
          className="btn p-3 rounded-none bg-error w-full"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Avatar;
