import React from 'react';

const MainWrapper = ({ children }) => {
  return (
    <div className="">
      <div className="max-w-6xl mx-auto px-8 overflow-hidden-d">{children}</div>
    </div>
  );
};

export default MainWrapper;
