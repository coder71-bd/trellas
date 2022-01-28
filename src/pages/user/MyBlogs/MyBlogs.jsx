import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import BlogDeleteModal from '../../../components/BlogDeleteModal';
import useAuth from '../../../hooks/useAuth';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState([false]);
  const navigate = useNavigate();

  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://trellas-backend.herokuapp.com/user/blogs?email=${user.email}`
      )
      .then((response) => setBlogs(response.data));
  }, [user.email]);

  if (blogs.length === 0) {
    return (
      <div
        style={{ minHeight: 'calc(100vh - 100px)' }}
        className="flex flex-col my-12 justify-center items-center space-y-6"
      >
        <p className="text-primary font-semibold">
          You have not posted any blogs yet.
        </p>
        <button
          className="btn bg-info hover:bg-info/50"
          onClick={() => navigate('/shareExperience')}
        >
          Post Now
        </button>
      </div>
    );
  }

  const handleDeleteBlog = (id) => {
    return axios
      .delete(`https://trellas-backend.herokuapp.com/blogs/${id}`)
      .then(() => {
        axios
          .get(
            `https://trellas-backend.herokuapp.com/user/blogs?email=${user.email}`
          )
          .then((response) => {
            setBlogs(response.data);
          });
      });
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 100px)' }}>
      <h1 className="text-3xl text-center my-3">{user.displayName}'s blogs</h1>
      <div className="space-y-4 mt-3">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="text-primary font-semibold flex items-center spac-x-4 md:space-x-6 shadow-sm border-2 border-gray-200 w-full md:w-2/4 mx-auto rounded-sm justify-center py-3"
          >
            <div className="w-16 md:w-20">
              <img
                src={blog.image}
                alt={blog.name}
                className="hover:scale-125 transition-all duration-500 cursor-pointer rounded-l-xl"
              />
            </div>

            {/* time */}
            <p>{blog.time}</p>

            {/* staus */}
            {blog.status === 'pending' ? (
              <div>
                <button className="px-4 py-2 rounded-full text-white bg-error hover:bg-error/50 font-semibold text-sm flex align-center w-max cursor-pointer transition duration-300 ease">
                  pending
                </button>
              </div>
            ) : (
              <button className="px-4 py-2 rounded-full text-white bg-success hover:bg-success/50 font-semibold text-sm flex align-center w-max transition-all duration-300 ease">
                Approved
              </button>
            )}

            {/* delete */}
            <FontAwesomeIcon
              icon={faTrashAlt}
              color="#fff"
              className="mr-2 text-4xl text-error hover:text-error/50 cursor-pointer transition-all duration-500"
              onClick={() => setOpenDeleteModal(true)}
            />

            {openDeleteModal && (
              <BlogDeleteModal
                id={blog._id}
                openDeleteModal={openDeleteModal}
                setOpenDeleteModal={setOpenDeleteModal}
                handleDeleteBlog={handleDeleteBlog}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
