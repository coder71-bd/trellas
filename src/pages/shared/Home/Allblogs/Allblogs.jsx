import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Alert from '../../../../components/Alert';
import BlogCard from '../../../../components/BlogCard';
import Spinner from '../../../../components/Spinner';
import useAuth from '../../../../hooks/useAuth';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [openUpdateAlert, setOpenUpdateAlert] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currPage, setCurrPage] = useState(0);
  const size = 10;

  const { admin } = useAuth();

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/pagination/blogs?page=${currPage}&size=${size}&isAdmin=${admin}`
      )
      .then((response) => {
        setBlogs(response.data.blogs);
        const count = response.data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [currPage, admin]);

  if (blogs.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );
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
        axios
          .get(
            `http://localhost:5000/pagination/blogs?page=${currPage}&size=${size}&isAdmin=${admin}`
          )
          .then((response) => {
            setBlogs(response.data.blogs);
            const count = response.data.count;
            const pageNumber = Math.ceil(count / size);
            setPageCount(pageNumber);
          });
      });
  };

  const handleDeleteBlog = (id) => {
    return axios.delete(`http://localhost:5000/blogs/${id}`).then(() => {
      axios
        .get(
          `http://localhost:5000/pagination/blogs?page=${currPage}&size=${size}&isAdmin=${admin}`
        )
        .then((response) => {
          setBlogs(response.data.blogs);
          const count = response.data.count;
          const pageNumber = Math.ceil(count / size);
          setPageCount(pageNumber);
        });
    });
  };

  return (
    <div>
      {/* All blogs */}
      <div className="flex flex-wrap items-center justify-evenly gap-2 my-12">
        {admin &&
          blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
              handleEditBlog={handleEditBlog}
              handleDeleteBlog={handleDeleteBlog}
            />
          ))}

        {/* normal user will see only the approved blogs */}
        {!admin &&
          blogs
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

      {/* pagination */}
      <ul className="flex space-x-1 md:space-x-4 items-center justify-center my-3">
        <li>
          <button
            className={`${
              currPage === 0
                ? 'bg-info/20 hover:bg-info/30 cursor-not-allowed'
                : 'bg-info hover:bg-info/80'
            } btn m-0 px-4 md:px-6  rounded-lg`}
            onClick={() => currPage !== 0 && setCurrPage(currPage - 1)}
          >
            <FontAwesomeIcon icon={faArrowLeft} color="#fff" />
          </button>
        </li>
        {[...Array(pageCount).keys()].map((num) => (
          <li key={num}>
            <button
              className={`${
                num === currPage
                  ? 'bg-primary hover:bg-primary/90 text-white'
                  : 'bg-gray-50 hover:bg-gray-100 text-primary'
              } border-2 border-gray-500  rounded-[50%] p-1 md:p-3 text-sm md:text-xl font-extrabold`}
              onClick={() => setCurrPage(num)}
            >
              {num}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`${
              currPage === pageCount - 1
                ? 'bg-info/20 hover:bg-info/30 cursor-not-allowed'
                : 'bg-info hover:bg-info/80'
            } btn px-4 md:px-6 rounded-lg`}
            onClick={() =>
              currPage !== pageCount - 1 && setCurrPage(currPage + 1)
            }
          >
            <FontAwesomeIcon icon={faArrowRight} color="#fff" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default AllBlogs;
