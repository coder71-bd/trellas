import React from 'react';

const Spinner = () => {
  return (
    <div className="animate-spin bg-info/40 w-20 h-20  border-4 rounded-full">
      <span className="w-2 h-2 p-4 rounded-full text-white/0 bg-warning">
        o
      </span>
    </div>
  );
};

export default Spinner;
