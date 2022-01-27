import React from 'react';

const EmailVerify = () => {
  return (
    <section
      style={{ minHeight: 'calc(100vh - 100px)' }}
      className="flex flex-col justify-center items-center"
    >
      <p className="px-2 py-3 bg-error text-white w-full md:w-1/3 text-center text-xl capitalize">
        A verification email has been sent to your Email
      </p>
      <p className="px-2 py-3 bg-error text-white w-full md:w-1/3 text-center text-lg capitalize">
        please verify it
      </p>
    </section>
  );
};

export default EmailVerify;
