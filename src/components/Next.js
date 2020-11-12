import React from "react";
import { Link } from "react-router-dom";

const Next = ({ to }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to={`/${to}`} className="Next">
        Go to Next Page
        <svg
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          className="bi bi-arrow-right-short"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
          />
        </svg>{" "}
      </Link>
    </div>
  );
};

export default Next;
