import React from "react";

const MainContainer = ({ children }) => {
  return (
    <div className=" ml-64 m-4 block shadow-md rounded-lg p-4 relative">
      {children}
    </div>
  );
};

export default MainContainer;
