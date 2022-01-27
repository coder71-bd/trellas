import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogDetail = () => {
  const [blog, setBlog] = useState({});
  console.log(blog);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/${id}`)
      .then((response) => setBlog(response.data));
  }, [id]);

  return (
    <section style={{ minHeight: 'calc(100vh - 100px)' }} className="my-6">
      <div className="w-full md:w-2/3 mx-auto">
        <img src={blog.image} alt={blog.name} className="w-full" />
      </div>
      <div className="w-full md:w-2/3 mx-auto mt-3 px-3">
        {/* title */}
        <h3 className="text-3xl font-extrabold text-primary mb-3">
          {blog.title}
        </h3>
        {/* description */}
        <div className="flex flex-wrap md:flex-nowrap items-start">
          <p className="pr-0 md:pr-12 md:w-[70%] text-justify">
            {blog.desc} + Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Illum, sit blanditiis voluptatibus, vero facilis dolores quia
            quam cupiditate magni quo aspernatur impedit cumque. Officiis,
            cupiditate! Quo explicabo, consequatur expedita molestias vitae amet
            doloribus. Impedit dicta perspiciatis nam maiores iure! Et maiores,
            officia velit eaque iste earum exercitationem molestias sit autem
            maxime? Id animi, asperiores vel, quas veniam et accusantium
            assumenda vitae dolorum iste praesentium tempora maiores expedita
            soluta quidem itaque porro modi? Omnis vel, earum, doloribus
            cupiditate enim velit accusantium quisquam eaque ut exercitationem
            temporibus. Soluta, maxime velit, deserunt quasi voluptatum esse
            facere ut amet qui laudantium, voluptatem officia labore?
          </p>
          <div className="bg-gray-900 text-white w-full md:w-[30%] px-3 mt-3 md:mt-0 text-center md:text-left space-y-6 py-3">
            <p>Posted by {blog.name}</p>
            <p>Posted on {blog.time}</p>
            <p>Category: {blog.category}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogDetail;
