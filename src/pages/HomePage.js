import React from "react";
import "../css/HomePage.css";
import cover from "../assets/cover.jpg";

const HomePage = () => {
  return (
    <div>
      <div id="Home">
        <img
          id="cover-photo"
          className="cover-photo"
          src={cover}
          alt="coverphoto"
        />
        <div id="bd-text" className="bd-text">
          <p>Happy Birthday, Au!</p>
          <p>Sweet 20!</p>
          <p className="About">
            As it's during pandemic, we felt really sorry that we can't meet up
            on your 20th birthday...
            <br /> So, we came up with this idea - a birthday webpage gift for
            you. <br /> Cheer up, girl! Stay safe and let's hang out together
            after this crisis. We do hope you love this, and made you smile{" "}
            <span style={{ fontSize: "90%" }}>&#128150;</span>
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default HomePage;
