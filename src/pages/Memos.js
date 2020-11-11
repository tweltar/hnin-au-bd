import React, { useState } from "react";
import childhood1 from "../assets/childhood/childhood1.jpeg";
import childhood2 from "../assets/childhood/childhood2.jpg";
import childhood3 from "../assets/childhood/childhood3.jpeg";
import childhood4 from "../assets/childhood/childhood4.jpg";
import childhood5 from "../assets/childhood/childhood5.jpg";
import childhood6 from "../assets/childhood/childhood6.jpg";
import childhood7 from "../assets/childhood/childhood7.jpg";
import childhood8 from "../assets/childhood/childhood8.jpg";
import childhood9 from "../assets/childhood/childhood9.jpg";
import Teenage1 from "../assets/teenage/Teenage1.jpg";
import Teenage2 from "../assets/teenage/Teenage2.jpg";
import Teenage3 from "../assets/teenage/Teenage3.jpg";
import Teenage4 from "../assets/teenage/Teenage4.jpg";
import Teenage5 from "../assets/teenage/Teenage5.jpg";
import { Carousel } from "react-bootstrap";
import SubHeader from "../components/SubHeader";
import PhotoSection from "../components/PhotoSection";

const Memos = () => {
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
      <h1 className="Page-Title">Our Memories</h1>
      <div>
        <SubHeader id="Childhood" text="Childhood Memos" />
        <PhotoSection image={childhood3} text="hello world" odd={true} />
        <PhotoSection image={childhood9} text="hello world" />
        <div className="Photo-section">
          <p className="Memo-caption"></p>
          <img
            src={childhood1}
            style={{
              width: "400px",
              height: "500px",
              borderRadius: "10px",
              marginLeft: "100px",
              transform: "rotate(3deg)",
            }}
            alt=""
          />
        </div>
        <div className="Photo-section">
          <Carousel
            activeIndex={index1}
            onSelect={handleSelect1}
            className="Carousal-image"
          >
            <Carousel.Item>
              <img className="d-block w-100" src={childhood6} alt="" />
              <Carousel.Caption className="p-0">
                <p>description hello hii heyy desu</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={childhood7} alt="" />
              <Carousel.Caption className="p-0">
                <p>description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={childhood8} alt="" />
              <Carousel.Caption className="p-0">
                <p>description</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <p></p>
        </div>
        <div className="Photo-section">
          <p></p>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="Carousal-image"
          >
            <Carousel.Item>
              <img className="d-block w-100" src={childhood4} alt="" />
              <Carousel.Caption className="p-0">
                <p>description hello hii heyy desu</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={childhood5} alt="" />
              <Carousel.Caption className="p-0">
                <p>description</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <PhotoSection image={childhood2} text="hello world" />
      </div>
      <div>
        <SubHeader id="Teenage" text="Teenage Memos" />
        <div className="Photo-section">
          <p></p>
          <Carousel
            activeIndex={index2}
            onSelect={handleSelect2}
            className="Carousal-image"
          >
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage1} alt="" />
              <Carousel.Caption className="p-0">
                <p>description hello hii heyy desu</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage2} alt="" />
              <Carousel.Caption className="p-0">
                <p>description</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <PhotoSection image={Teenage3} text="hello world" />
        <div className="Photo-section">
          <p></p>
          <Carousel
            activeIndex={index2}
            onSelect={handleSelect2}
            className="Carousal-image-vertical"
          >
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage5} alt="" />
              <Carousel.Caption className="p-0">
                <p>description hello hii heyy desu</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "600px" }}
                src={Teenage4}
                alt=""
              />
              <Carousel.Caption className="p-0">
                <p>description</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div>
        <SubHeader id="Quaratine" text="Quaratine Memos" />
      </div>
    </div>
  );
};

export default Memos;
