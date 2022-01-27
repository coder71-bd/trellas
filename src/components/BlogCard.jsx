import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import sajek from '../assets/sajek.jpg';

const BlogCard = () => {
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <a href="/#">
        <img class="rounded-t-lg" src={sajek} alt="" />
      </a>
      <div class="p-5">
        <a href="/#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <button className="btn bg-info hover:bg-info/70 flex items-center">
          Read more
          <FontAwesomeIcon
            icon={faArrowRight}
            color="#fff"
            className="pl-2 text-2xl"
          />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
