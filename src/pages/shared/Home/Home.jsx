import React from 'react';
import Pagination from '../../../components/Pagination';
import Allblogs from './Allblogs/Allblogs';
import Banner from './Banner/Banner';

const Home = () => {
  return (
    <section>
      <Banner />
      <Allblogs />
      <Pagination />
    </section>
  );
};

export default Home;
