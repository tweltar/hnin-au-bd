import React from "react";

const SubHeader = ({ id, text }) => {
  return (
    <h1 className="Sub-header" id={id}>
      {text}
    </h1>
  );
};

export default SubHeader;
