import React, { useState } from "react";
import fav1 from "../assets/fav/fav1.jpg";
import fav2 from "../assets/fav/fav2.jpg";
import fav3 from "../assets/fav/fav3.jpg";
import fav4 from "../assets/fav/fav4.jpg";
import fav5 from "../assets/fav/fav5.jpg";
import fav6 from "../assets/fav/fav6.jpg";
import fav7 from "../assets/fav/fav7.PNG";
import fav8 from "../assets/fav/fav8.PNG";
import fav9 from "../assets/fav/fav9.jpg";
import fav10 from "../assets/fav/fav10.jpg";
import fav11 from "../assets/fav/fav11.jpg";
import { Carousel } from "react-bootstrap";
import PhotoSectionH from "../components/PhotoSectionH";
import PhotoSectionV from "../components/PhotoSectionV";
import Next from "../components/Next";

const ForYou = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSelect1 = (selectedIndex, e) => {
    setIndex1(selectedIndex);
  };

  return (
    <div className="Page">
      <h1 className="Page-Title">Just for You</h1>
      <p className="Page-description">
        We made a collection of our favourite photos of you, Au. A bit cheesy xD
        But, enjoyyyyy <span style={{ fontSize: "95%" }}>&#128150;</span>
      </p>
      <PhotoSectionV
        image={fav10}
        cls="ForYou-caption"
        text="Did Bee make you? Because you are as sweet as honey."
      />
      <div className="Photo-section">
        <p className="ForYou-caption">
          You’re the sunshine of the day and the moonlight of the night.
        </p>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="Carousal-image"
        >
          <Carousel.Item>
            <img className="d-block w-100" src={fav3} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={fav5} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
      <PhotoSectionH
        image={fav1}
        cls="ForYou-caption"
        text="Meeting you was fate, becoming your friend was a choice. But, being best friends for 6 years is a fortune."
      />
      <PhotoSectionV
        image={fav2}
        cls="ForYou-caption"
        text="A circle is round, it has no end. That is how long I want to be your friend."
        odd
      />
      <PhotoSectionV
        image={fav4}
        cls="ForYou-caption"
        text="My parents told me 'Angels only live in heaven' but why are you here?"
      />
      <PhotoSectionV
        image={fav8}
        cls="ForYou-caption"
        text="Birthdays come around every year but friends like you only come once in a life time."
        odd
      />
      <div className="Photo-section">
        <Carousel
          activeIndex={index1}
          onSelect={handleSelect1}
          className="Carousal-image-vertical"
        >
          <Carousel.Item>
            <img className="d-block w-100" src={fav6} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={fav11} alt="" />
          </Carousel.Item>
        </Carousel>
        <p className="ForYou-caption">
          Like a cold breeze in summer and fire in winter, you are the comfort
          to my disorder.
        </p>
      </div>
      <PhotoSectionV
        image={fav9}
        cls="ForYou-caption"
        text="1 universe, 9 planets, 204 countries, 809 islands and 7 seas and we had a privilege of meeting you."
        odd
      />
      <PhotoSectionV
        image={fav7}
        cls="ForYou-caption"
        text="The moon and the stars don’t glow as bright as your eyes."
      />
      <Next to="presents" />
    </div>
  );
};

export default ForYou;
