import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Pagination = () => {
  return (
    <nav aria-label="Page navigation">
      <ul className="flex space-x-4 items-center justify-center">
        <li>
          <button className="btn bg-info hover:bg-info/80 rounded-lg">
            <FontAwesomeIcon icon={faArrowLeft} color="#fff" />
          </button>
        </li>
        <li>
          <button className="border-2 border-gray-500 bg-gray-100 hover:bg-gray-200 text-primary rounded-[50%] p-3 text-xl font-extrabold">
            1
          </button>
        </li>
        <li>
          <button className="border-2 border-gray-500 bg-gray-100 hover:bg-gray-200 text-primary rounded-[50%] p-3 text-xl font-extrabold">
            2
          </button>
        </li>
        <li>
          <button className="border-2 border-gray-500 bg-gray-100 hover:bg-gray-200 text-primary rounded-[50%] p-3 text-xl font-extrabold">
            3
          </button>
        </li>
        <li>
          <button className="border-2 border-gray-500 bg-gray-100 hover:bg-gray-200 text-primary rounded-[50%] p-3 text-xl font-extrabold">
            4
          </button>
        </li>
        <li>
          <button className="border-2 border-gray-500 bg-gray-100 hover:bg-gray-200 text-primary rounded-[50%] p-3 text-xl font-extrabold">
            5
          </button>
        </li>
        <li>
          <button className="btn bg-info hover:bg-info/80 rounded-lg">
            <FontAwesomeIcon icon={faArrowRight} color="#fff" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
