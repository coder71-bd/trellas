import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(
        `https://trellas-backend.herokuapp.com/user/blogs?email=${user.email}`
      )
      .then((response) => setBlogs(response.data));
  }, [user.email]);
  return (
    <div style={{ minHeight: 'calc(100vh - 100px)' }}>
      <h1 className="text-3xl text-center my-3">{user.displayName}'s blogs</h1>
      <div className="space-y-4 mt-3">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="text-primary font-semibold flex items-center space-x-6 shadow-sm border-2 border-gray-200 w-1/4 mx-auto rounded-xl"
          >
            <div className="w-20">
              <img
                src={blog.image}
                alt={blog.name}
                className="hover:scale-125 transition-all duration-500 cursor-pointer rounded-l-xl"
              />
            </div>
            <p>{blog.time}</p>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlogs;
