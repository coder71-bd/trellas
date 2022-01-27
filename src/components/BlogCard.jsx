import {
  faArrowRight,
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sajek from '../assets/sajek.jpg';
import BlogDeleteModal from './BlogDeleteModal';
import BlogEditModal from './BlogEditModal';

const BlogCard = ({ blog }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <div>
        <img className="rounded-t-lg" src={sajek} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex items-center justify-between">
          <button
            className="btn bg-info hover:bg-info/70 flex items-center"
            onClick={() => navigate(`/singleBlogDetail/${blog._id}`)}
          >
            Read more
            <FontAwesomeIcon
              icon={faArrowRight}
              color="#fff"
              className="pl-2 text-2xl"
            />
          </button>

          {/* edit and delete icons */}
          <div className="flex items-center spac-x-2">
            <FontAwesomeIcon
              icon={faEdit}
              color="#fff"
              className="pl-2 text-4xl text-info hover:text-info/50 cursor-pointer transition-all duration-500"
              onClick={() => setOpenEditModal(true)}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              color="#fff"
              className="pl-2 text-4xl text-error hover:text-error/50 cursor-pointer transition-all duration-500"
              onClick={() => setOpenDeleteModal(true)}
            />
          </div>
        </div>
      </div>
      <BlogEditModal
        id={blog._id}
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
      />
      <BlogDeleteModal
        id={blog._id}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
    </div>
  );
};

export default BlogCard;
