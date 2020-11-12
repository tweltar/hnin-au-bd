import React from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.css";
import Next from "../components/Next";

const HomePage = () => {
  return (
    <div>
      <div className="Home">
        <p className="Title">Happy Birthday, Au!</p>
        <p className="Title">Sweet 20!</p>
        <p className="About">
          As it's during pandemic, we felt really sorry that we can't meet up on
          your 20th birthday...
          <br /> So, we came up with this idea - a birthday webpage gift for
          you. <br /> Cheer up, girl! Stay safe and let's hang out together
          after this crisis. We do hope you love this, and made you smile{" "}
          <span style={{ fontSize: "90%" }}>&#128150;</span>
        </p>
      </div>
      <div style={{ margin: "50px" }}>
        <h1
          style={{
            fontFamily: "Poiret One, cursive",
            textAlign: "center",
            margin: "30px",
          }}
        >
          Instructions
        </h1>
        <p
          style={{
            fontFamily: "Poiret One, cursive",
            fontSize: "150%",
            textAlign: "center",
          }}
        >
          We know this is a super duper simple web page, dear. But, we'd like to
          request you to follow the pages in this order, <br />
          <br />
          <Link to="wishes">Wishes</Link>
          <br />
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-down-short"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
          <br /> <Link to="memos">Memos</Link>
          <br />
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-down-short"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
          <br />
          <Link to="presents">Presents</Link>
          <br />
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-down-short"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
          <br />
          <Link to="foryou"> For You</Link>
          <br />
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-down-short"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
          <br />
          <Link to="spoiler">BTS & Spoiler</Link>, <br />
          <br /> as shown in the menu in the top right corner of the page.
          <br />
          Or, <br /> you can just click
          <span
            className="Next"
            style={{ width: "fit-content", margin: "0 20px", fontSize: "80%" }}
          >
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
          </span>{" "}
          at the end of every page.
          <br />
          <br />
          Thank you! Now, you may start explore!!!
        </p>
      </div>
      <Next to="wishes" />
    </div>
  );
};

export default HomePage;
