import React from 'react';
import adidas from '../../../../assets/companies/adidas.png';
import amazon from '../../../../assets/companies/amazon.png';
import cocacola from '../../../../assets/companies/cocacola.png';
import google from '../../../../assets/companies/google.png';
import microsoft from '../../../../assets/companies/microsoft.png';
import walmart from '../../../../assets/companies/walmart.png';

const Company = () => {
  return (
    <section className="my-6 space-y-6">
      <h3 className="text-2xl text-center text-primary font-semibold">
        Our Partners
      </h3>
      <div className="flex flex-wrap justify-evenly items-center gap-6 md:gap-12">
        <img className="w-32 md:w-48" src={adidas} alt="adidas" />
        <img className="w-32 md:w-48" src={amazon} alt="amazon" />
        <img className="w-32 md:w-48" src={cocacola} alt="cocacola" />
        <img className="w-32 md:w-48" src={google} alt="google" />
        <img className="w-32 md:w-48" src={microsoft} alt="microsoft" />
        <img className="w-32 md:w-48" src={walmart} alt="walmart" />
      </div>
    </section>
  );
};

export default Company;
