import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../../../components/Avatar';

const links = [
  { path: '/home', name: 'Home' },
  { path: '/#', name: 'link2' },
  { path: '/#', name: 'link3' },
  { path: '/#', name: 'link4' },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const user = false; // will come from firebase

  return (
    <nav className="bg-white shadow-sm w-full px-2 py-9">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <span className="self-center text-lg font-semibold pl-2 md:pl-6">
            Trellas
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          <div className="flex items-center space-x-0 md:space-x-6 mr-2 md:mr-6">
            <button type="button" className="btn">
              Share
              <p className="font-bold text-xs md:inline md:pl-2 md:text-base">
                Experience
              </p>
            </button>
            {user ? (
              <Avatar />
            ) : (
              <button
                type="button"
                className="btn bg-error py-3 hover:bg-red-500"
              >
                Login
              </button>
            )}
          </div>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center px-1 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setShow(!show)}
          >
            {/* font awesome nav icon */}
            <FontAwesomeIcon
              icon={faAlignRight}
              color="#f55767"
              style={{ fontSize: 34 }}
            />
          </button>
        </div>
        <div
          className={`${
            show ? 'block' : 'hidden'
          } justify-between items-center w-full md:flex md:w-auto md:order-1 transition-all ease-out duration-500`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block text-base font-semibold tracking-widest border border-l-warning border-l-8 mt-2 rounded-lg md:rounded-0 md:border-0 md:pt-0 py-2 pr-4 pl-3 text-primary md:hover:text-warning transition-colors duration-150 md:p-0"
                  aria-current="page"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
