import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import bts1 from "../assets/bts/bts1.jpg";
import bts2 from "../assets/bts/bts2.jpeg";
import spoil1 from "../assets/spoiler/spoil1.PNG";
import spoil2 from "../assets/spoiler/spoil2.jpg";
import spoil3 from "../assets/spoiler/spoil3.jpg";
import spoil4 from "../assets/spoiler/spoil4.PNG";
import spoil5 from "../assets/spoiler/spoil5.jpeg";
import spoil6 from "../assets/spoiler/spoil6.jpeg";
import spoil7 from "../assets/spoiler/spoil7.jpeg";
import spoil8 from "../assets/spoiler/spoil8.jpeg";
import spoil10 from "../assets/spoiler/spoil10.jpg";
import spoil11 from "../assets/spoiler/spoil11.PNG";
import spoil13 from "../assets/spoiler/spoil13.jpeg";
import PhotoSectionV from "../components/PhotoSectionV";

const Spoiler = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const handleSelect1 = (selectedIndex, e) => {
    setIndex1(selectedIndex);
  };
  const handleSelect2 = (selectedIndex, e) => {
    setIndex2(selectedIndex);
  };

  return (
    <div className="Page">
      <h1 className="Page-Title">Behind the Scene & Spoilers</h1>
      <p className="Page-description">
        Firstly, take a look at these behind the scene for all of this to happen
        xD
      </p>
      <PhotoSectionV
        image={bts1}
        text="Jue faked a video call because we need your video-chat for the transition video hehe."
        cls="Spoiler-caption"
      />
      <PhotoSectionV
        image={bts2}
        text="We made a phone call to discuss about all the processes and it took about one and a half hour xD Also, one-hour long zoom meeting rehearsal two days before your bd OwO"
        cls="Spoiler-caption"
        odd
      />
      <p className="Page-description">
        Here comes the spoilers ahahah. We spoiled some of the surprises via
        chat. You might have noticed a few of them, but we bet not all, right?
        xD Let's have a look!
      </p>
      <PhotoSectionV
        image={spoil1}
        cls="Spoiler-caption"
        text="Spoiling bd cake featuring mama Yuri's cake. Did you notice?"
      />
      <div className="Photo-section">
        <p className="Spoiler-caption">
          Spoiling 'If Au was your girlfriend' video. Did you notice?
        </p>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="Carousal-image-vertical"
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "550px" }}
              src={spoil2}
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "550px" }}
              src={spoil3}
              alt=""
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Carousal-screenshot">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img src={spoil4} className="spoil-photo" alt="" />
          <img src={spoil5} className="spoil-photo" alt="" />
        </div>
        <p className="Spoiler-caption">
          Spoiling Transition video. Did you notice?
        </p>
      </div>
      <div className="Photo-section">
        <p className="Spoiler-caption">
          Spoiling birthday song to you lol. Did you notice?
        </p>
        <Carousel
          activeIndex={index1}
          onSelect={handleSelect1}
          className="screenshot1"
        >
          <Carousel.Item>
            <img className="d-block w-100" src={spoil6} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={spoil7} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={spoil8} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
      <PhotoSectionV
        image={spoil10}
        cls="Spoiler-caption"
        text="Spoiling childhood photos from website. Did you notice?"
      />
      <div className="Photo-section">
        <p className="Spoiler-caption">
          Finally, spoiling this website xD Did you notice?
        </p>
        <Carousel
          activeIndex={index2}
          onSelect={handleSelect2}
          className="screenshot"
        >
          <Carousel.Item>
            <img className="d-block w-100" src={spoil11} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={spoil13} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Spoiler;
