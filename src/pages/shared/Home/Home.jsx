import React from 'react';
import AllBlogs from './Allblogs/Allblogs';
import Banner from './Banner/Banner';
import Company from './Company/Company';
import Feature from './Feature/Feature';

const Home = () => {
  return (
    <section>
      <Banner />
      <Feature />
      <AllBlogs />
      <Company />
    </section>
  );
};

export default Home;
