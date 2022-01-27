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
            {false ? (
              <button className="btn bg-warning block mx-auto hover:bg-info/70 mt-3">
                pending
              </button>
            ) : (
              <button className="btn bg-success block mx-auto hover:bg-success/70 mt-3">
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
