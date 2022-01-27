import React from 'react';
import Pagination from '../../../components/Pagination';
import AllBlogs from './Allblogs/Allblogs';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <section>
      <Banner />
      <AllBlogs />
      <Pagination />
    </section>
  );
};

export default Home;
