import React from 'react';
import avatar from '../assets/avatar.png';

const Avatar = ({ src }) => {
  return (
    <div className="w-12 h-12 md:w-16 md:h-16">
      <img
        className="w-full h-full rounded-full"
        src={src ? src : avatar}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
