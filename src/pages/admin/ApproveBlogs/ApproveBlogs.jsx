import axios from 'axios';
import React, { useState } from 'react';
import Alert from '../../../components/Alert';
import BlogCard from '../../../components/BlogCard';
import useBlogs from '../../../hooks/useBlogs';

const ApproveBlogs = () => {
  const [blogs, setBlogs] = useBlogs();
  const [openUpdateAlert, setOpenUpdateAlert] = useState(false);

  const handleEditBlog = (id, data, previousBlog) => {
    return axios
      .put(`https://trellas-backend.herokuapp.com/blogs/update/${id}`, {
        ...data,
        name: previousBlog.email,
        email: previousBlog.email,
        time: previousBlog.time,
        status: previousBlog.status,
      })
      .then(() => {
        axios
          .get('https://trellas-backend.herokuapp.com/blogs')
          .then((response) => {
            setBlogs(response.data.reverse());
            setOpenUpdateAlert(true);
          });
      });
  };

  const handleDeleteBlog = (id) => {
    return axios
      .delete(`https://trellas-backend.herokuapp.com/blogs/${id}`)
      .then(() => {
        axios
          .get('https://trellas-backend.herokuapp.com/blogs')
          .then((response) => {
            setBlogs(response.data.reverse());
          });
      });
  };

  const handleBlogApprove = (id) => {
    axios
      .put(`https://trellas-backend.herokuapp.com/blogs/${id}`)
      .then((response) => {
        if (response.data.modifiedCount === 1) {
          axios
            .get('https://trellas-backend.herokuapp.com/blogs')
            .then((response) => setBlogs(response.data.reverse()));
        }
      });
  };

  return (
    <div style={{ minHeight: 'calc(100vh - 100px)' }}>
      {/* All blogs */}
      <div className="flex flex-wrap items-center justify-evenly gap-2 my-12">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
            handleEditBlog={handleEditBlog}
            handleDeleteBlog={handleDeleteBlog}
            handleBlogApprove={handleBlogApprove}
          />
        ))}
      </div>

      {openUpdateAlert && (
        <Alert
          message="the blog successfully updated"
          openAlert={openUpdateAlert}
          setOpenAlert={setOpenUpdateAlert}
        />
      )}
    </div>
  );
};

export default ApproveBlogs;
