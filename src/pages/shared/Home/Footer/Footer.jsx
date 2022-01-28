import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeOpen,
  faMap,
  faPhoneSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useBlogs from '../../../../hooks/useBlogs';

const Footer = () => {
  const [blogs] = useBlogs();

  return (
    <footer className="flex flex-wrap justify-around bg-black text-white py-6 space-y-6 space-x-6">
      {/* logo and contacts */}
      <div className="pl-6 space-y-6">
        <Link to="/" className="text-6xl font-semibold text-blue-400 pt-2">
          Trellas
        </Link>
        {/* contacts */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              className="cursor-pointer hover:text-rose-500 transition-all ease-in duration-500"
              icon={faEnvelopeOpen}
              style={{ fontSize: 24 }}
            />
            <p>trellas@trellas.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faPhoneSquare}
              className="cursor-pointer hover:text-rose-500 transition-all ease-in duration-500"
              style={{ fontSize: 24 }}
            />
            <p>+88019xxxxxx</p>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              icon={faMap}
              className="cursor-pointer hover:text-rose-500 transition-all ease-in duration-500"
              style={{ fontSize: 24 }}
            />
            <p>Findus, Mars</p>
          </div>
        </div>
        {/* social */}
        <div className="space-x-4">
          <FontAwesomeIcon
            icon={faFacebook}
            className="cursor-pointer hover:text-rose-500 transition-all ease-in duration-500"
            style={{ fontSize: 24 }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="cursor-pointer hover:text-rose-500 transition-all ease-in duration-500"
            style={{ fontSize: 24 }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="cursor-pointer hover:text-rose-500 transition-all ease-in duration-500"
            style={{ fontSize: 24 }}
          />
          <FontAwesomeIcon
            icon={faYoutube}
            className="cursor-pointer hover:text-rose-500 transition-all ease-in duration-500"
            style={{ fontSize: 24 }}
          />
        </div>
      </div>

      {/* posts */}
      <div>
        <h3 className="text-2xl border-l-4 border-l-rose-600 pl-3 mb-6">
          Recent posts
        </h3>
        {/* recent post blog links */}
        <div className="space-y-6">
          {blogs.slice(0, 3).map((blog) => (
            <div key={blog._id} className="flex items-center">
              <img
                src={blog.image}
                alt="sajek"
                className="w-20 transform hover:scale-150 transition-transform duration-700 cursor-pointer"
              />
              <div className="pl-3">
                <p className="cursor-pointer hover:text-rose-500 transition-all ease-in duration-500">
                  {blog.title}
                </p>
                <p className="cursor-pointer hover:text-rose-500 transition-all ease-in duration-500">
                  {blog.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
