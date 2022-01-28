import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../../../components/Rating';

const SingleBlogDetail = () => {
  const [blog, setBlog] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://trellas-backend.herokuapp.com/blogs/${id}`)
      .then((response) => setBlog(response.data));
  }, [id]);

  return (
    <section style={{ minHeight: 'calc(100vh - 100px)' }} className="my-6">
      <div className="w-full md:w-2/3 mx-auto">
        <img src={blog.image} alt={blog.name} className="w-full" />
      </div>
      <div className="w-full md:w-2/3 mx-auto mt-3 px-3">
        <div className="flex flex-wrap space-x-4 items-center mb-3">
          {/* title */}
          <h3 className="text-3xl font-extrabold text-primary">{blog.title}</h3>

          {/* rating */}
          <span className="flex items-center">
            {<Rating rating={blog.rating} iconType={faStar} />}
            {<Rating rating={5 - blog.rating} iconType={regularStar} />}
            <span className="text-gray-600 ml-2 text-xs fw-bold">
              ({blog.rating}.00)
            </span>
          </span>
        </div>

        {/* description */}
        <div className="flex flex-wrap md:flex-nowrap items-stretch">
          <p className="pr-0 md:pr-12 md:w-[65%] text-justify">{blog.desc}</p>
          <div className="bg-gray-50 border-2 border-gray-200 hover:scale-y-104 hover:scale-x-105 hover:shadow-lg text-primary w-full md:w-[35%] px-3 mt-3 md:mt-0 text-center md:text-left space-y-4 py-3 transform transition-transform duration-500 flex flex-col justify-center text-lg">
            <p>
              <span className="font-extrabold">Posted by</span> {blog.name}
            </p>
            <p>
              <span className="font-extrabold">Location:</span> {blog.location}
            </p>
            <p>
              <span className="font-extrabold">Posted on</span> {blog.time}
            </p>
            <p>
              <span className="font-extrabold">Category:</span> {blog.category}
            </p>
            <p>
              <span className="font-extrabold">Travel Expense:</span>{' '}
              <span className="text-info">${blog.price}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogDetail;
