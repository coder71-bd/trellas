import axios from 'axios';
import React, { useState } from 'react';
import Alert from '../../../../components/Alert';
import BlogCard from '../../../../components/BlogCard';
import Spinner from '../../../../components/Spinner';
import useAuth from '../../../../hooks/useAuth';
import useBlogs from '../../../../hooks/useBlogs';

const AllBlogs = () => {
  const [blogs, setBlogs] = useBlogs();
  const [openUpdateAlert, setOpenUpdateAlert] = useState(false);

  const { admin } = useAuth();

  if (blogs.length === 0) {
    return <Spinner />;
  }

  const handleEditBlog = (id, data, previousBlog) => {
    return axios
      .put(`http://localhost:5000/blogs/update/${id}`, {
        ...data,
        name: previousBlog.email,
        email: previousBlog.email,
        time: previousBlog.time,
        status: previousBlog.status,
      })
      .then(() => {
        axios.get('http://localhost:5000/blogs').then((response) => {
          setBlogs(response.data.reverse());
          setOpenUpdateAlert(true);
        });
      });
  };

  const handleDeleteBlog = (id) => {
    return axios.delete(`http://localhost:5000/blogs/${id}`).then(() => {
      axios.get('http://localhost:5000/blogs').then((response) => {
        setBlogs(response.data.reverse());
      });
    });
  };

  return (
    <div>
      {/* All blogs */}
      <div className="flex flex-wrap items-center justify-evenly gap-2 my-12">
        {admin &&
          blogs
            .slice(0, 10)
            .map((blog) => (
              <BlogCard
                key={blog._id}
                blog={blog}
                handleEditBlog={handleEditBlog}
                handleDeleteBlog={handleDeleteBlog}
              />
            ))}
        {!admin &&
          blogs
            .slice(0, 10)
            .filter((b) => b.status !== 'pending')
            .map((blog) => (
              <BlogCard
                key={blog._id}
                blog={blog}
                handleEditBlog={handleEditBlog}
                handleDeleteBlog={handleDeleteBlog}
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

export default AllBlogs;
