import axios from 'axios';
import { useEffect, useState } from 'react';

const useBlogs = (query) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    if (query) {
      axios
        .get(
          `http://localhost:5000/blogs?category=${query.category}&price=${query.price}&rating=${query.rating}`
        )
        .then((response) => setBlogs(response.data));
    } else {
      axios
        .get('http://localhost:5000/blogs')
        .then((response) => setBlogs(response.data));
    }
  }, [query]);
  return [blogs, setBlogs];
};

export default useBlogs;
