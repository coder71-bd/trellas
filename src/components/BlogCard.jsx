import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRight,
  faEdit,
  faStar,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import BlogApproveModal from './BlogApproveModal';
import BlogDeleteModal from './BlogDeleteModal';
import BlogEditModal from './BlogEditModal';
import Rating from './Rating';

const BlogCard = ({
  blog,
  children,
  handleEditBlog,
  handleDeleteBlog,
  handleBlogApprove,
}) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openApproveModal, setOpenApproveModal] = useState(false);

  const { admin } = useAuth();

  const location = useLocation();
  const showStatus = location.pathname === '/admin/approveBlogs';

  const navigate = useNavigate();

  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
      <div>
        <img className="rounded-t-lg w-full" src={blog.image} alt={blog.name} />
      </div>
      <div className="p-5 space-y-3">
        {/* blog title */}
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          {blog.title}
        </h5>

        {/* email of the blog writer */}
        {showStatus && (
          <p className="text-sm text-info font-semibold">by {blog.email}</p>
        )}

        {/* description */}
        <p className="font-normal text-gray-700">{blog.desc.slice(0, 50)}...</p>

        {/* price */}
        <div className="flex justify-between">
          <p className="font-semibold text-xl text-info">${blog.price}</p>
          <p className="font-semibold text-xl capitalize">{blog.location}</p>
        </div>

        {/* rating */}
        <div className="flex justify-between">
          <span className="flex items-center">
            {<Rating rating={blog.rating} iconType={faStar} />}
            {<Rating rating={5 - blog.rating} iconType={regularStar} />}
            <span className="text-gray-600 ml-2 text-xs fw-bold">
              ({blog.rating}.00)
            </span>
          </span>

          {/* approve modal button */}
          {showStatus &&
            (blog.status === 'pending' ? (
              <div>
                <button
                  className="px-4 py-2 rounded-full text-white bg-error hover:bg-error/50 font-semibold text-sm flex align-center w-max cursor-pointer transition duration-300 ease"
                  onClick={() => setOpenApproveModal(true)}
                >
                  pending
                </button>
              </div>
            ) : (
              <button className="px-4 py-2 rounded-full text-white bg-success hover:bg-success/50 font-semibold text-sm flex align-center w-max cursor-not-allowed transition-all duration-300 ease">
                Approved
              </button>
            ))}
        </div>

        <div className="flex items-center justify-between">
          {/* read more btn */}
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
          {admin && (
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
          )}
        </div>
      </div>
      <BlogEditModal
        id={blog._id}
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
        handleEditBlog={handleEditBlog}
        blog={blog}
      />
      <BlogDeleteModal
        id={blog._id}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
        handleDeleteBlog={handleDeleteBlog}
      />

      <BlogApproveModal
        id={blog._id}
        openApproveModal={openApproveModal}
        setOpenApproveModal={setOpenApproveModal}
        handleBlogApprove={handleBlogApprove}
      />
    </div>
  );
};

export default BlogCard;
