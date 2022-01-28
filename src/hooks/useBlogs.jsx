import axios from 'axios';
import { useEffect, useState } from 'react';

const useBlogs = (query) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    if (query) {
      axios
        .get(
          `https://trellas-backend.herokuapp.com/blogs?category=${query.category}&price=${query.price}&rating=${query.rating}`
        )
        .then((response) => setBlogs(response.data));
    } else {
      axios
        .get('https://trellas-backend.herokuapp.com/blogs')
        .then((response) => setBlogs(response.data.reverse()));
    }
  }, [query]);
  return [blogs, setBlogs];
};

export default useBlogs;
