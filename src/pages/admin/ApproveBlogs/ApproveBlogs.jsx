import React from 'react';
import BlogCard from '../../../components/BlogCard';
import useBlogs from '../../../hooks/useBlogs';

const ApproveBlogs = () => {
  const [blogs, setBlogs] = useBlogs();
  return (
    <div style={{ minHeight: 'calc(100vh - 100px)' }}>
      {/* All blogs */}
      <div className="flex flex-wrap items-center justify-evenly gap-2 my-12">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}>
            {true ? (
              <button className="px-4 py-2 rounded-full text-white bg-error hover:bg-error/50 font-semibold text-sm flex align-center w-max cursor-pointer transition duration-300 ease">
                pending
              </button>
            ) : (
              <button className="px-4 py-2 rounded-full text-white bg-success hover:bg-success/50 font-semibold text-sm flex align-center w-max cursor-not-allowed transition-all duration-300 ease">
                Approved
              </button>
            )}
          </BlogCard>
        ))}
      </div>
    </div>
  );
};

export default ApproveBlogs;
