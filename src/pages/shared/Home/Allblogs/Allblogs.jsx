import React from 'react';
import BlogCard from '../../../../components/BlogCard';
import useBlogs from '../../../../hooks/useBlogs';

const AllBlogs = () => {
  const [blogs, setBlogs] = useBlogs();
  return (
    <div>
      {/* All blogs */}
      <div className="flex flex-wrap items-center justify-evenly gap-2 my-12">
        {blogs.slice(0, 10).map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
