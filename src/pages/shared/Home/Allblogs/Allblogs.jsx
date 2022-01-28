import axios from 'axios';
import React from 'react';
import BlogCard from '../../../../components/BlogCard';
import Spinner from '../../../../components/Spinner';
import useAuth from '../../../../hooks/useAuth';
import useBlogs from '../../../../hooks/useBlogs';

const AllBlogs = () => {
  const [blogs, setBlogs] = useBlogs();

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
          setBlogs(response.data);
          alert('this blog updated successfully');
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
              />
            ))}
      </div>
    </div>
  );
};

export default AllBlogs;
