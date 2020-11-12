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
import Teenage6 from "../assets/teenage/Teenage6.jpg";
import Teenage7 from "../assets/teenage/Teenage7.jpg";
import Teenage8 from "../assets/teenage/Teenage8.jpg";
import Teenage9 from "../assets/teenage/Teenage9.jpg";
import Teenage10 from "../assets/teenage/Teenage10.jpg";
import Teenage11 from "../assets/teenage/Teenage11.jpg";
import Teenage12 from "../assets/teenage/Teenage12.jpg";
import Teenage13 from "../assets/teenage/Teenage13.jpg";
import Teenage14 from "../assets/teenage/Teenage14.jpg";
import Teenage15 from "../assets/teenage/Teenage15.jpg";
import Teenage16 from "../assets/teenage/Teenage16.jpeg";
import Teenage17 from "../assets/teenage/Teenage17.jpeg";
import { Carousel } from "react-bootstrap";
import SubHeader from "../components/SubHeader";
import PhotoSection from "../components/PhotoSection";

const Memos = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);
  const [index5, setIndex5] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleSelect1 = (selectedIndex, e) => {
    setIndex1(selectedIndex);
  };

  const handleSelect2 = (selectedIndex, e) => {
    setIndex2(selectedIndex);
  };

  const handleSelect3 = (selectedIndex, e) => {
    setIndex3(selectedIndex);
  };

  const handleSelect4 = (selectedIndex, e) => {
    setIndex4(selectedIndex);
  };

  const handleSelect5 = (selectedIndex, e) => {
    setIndex5(selectedIndex);
  };

  return (
    <div className="Page">
      <h1 className="Page-Title">Our Memories</h1>
      <div>
        <SubHeader id="Childhood" text="Childhood Memos" />
        <PhotoSection image={childhood3} text="hello world" odd />
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
        <div className="Photo-section">
          <img
            src={Teenage16}
            style={{
              width: "400px",
              height: "600px",
              borderRadius: "10px",
              marginLeft: "100px",
              transform: "rotate(-3deg)",
            }}
            alt=""
          />
          <p className="Memo-caption"></p>
        </div>
        <PhotoSection image={Teenage3} text="hello world" odd />
        <div className="Photo-section">
          <Carousel
            activeIndex={index3}
            onSelect={handleSelect3}
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
          <p></p>
        </div>
        <PhotoSection image={Teenage6} text="hello world" odd />
        <PhotoSection image={Teenage7} text="hello world" />
        <PhotoSection image={Teenage8} text="hello world" odd />
        <PhotoSection image={Teenage9} text="hello world" />
        <div className="Photo-section">
          <p></p>
          <Carousel
            activeIndex={index4}
            onSelect={handleSelect4}
            className="Carousal-image-vertical"
          >
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage10} alt="" />
              <Carousel.Caption className="p-0">
                <p>description hello hii heyy desu</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage11} alt="" />
              <Carousel.Caption className="p-0">
                <p>description</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="Photo-section">
          <img
            src={Teenage17}
            style={{
              width: "420px",
              height: "580px",
              borderRadius: "10px",
              marginLeft: "100px",
              transform: "rotate(-3deg)",
            }}
            alt=""
          />
          <p className="Memo-caption"></p>
        </div>
        <div className="Photo-section">
          <p className="Memo-caption"></p>
          <Carousel
            activeIndex={index5}
            onSelect={handleSelect5}
            className="Carousal-image-vertical"
          >
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage12} alt="" />
              <Carousel.Caption className="p-0">
                <p>description hello hii heyy desu</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage13} alt="" />
              <Carousel.Caption className="p-0">
                <p>description</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="Photo-section">
          <img
            src={Teenage14}
            style={{
              width: "420px",
              height: "580px",
              borderRadius: "10px",
              marginLeft: "100px",
              transform: "rotate(-3deg)",
            }}
            alt=""
          />
          <p className="Memo-caption"></p>
        </div>
        <div className="Photo-section">
          <p className="Memo-caption"></p>
          <img
            src={Teenage15}
            style={{
              width: "400px",
              height: "600px",
              borderRadius: "10px",
              marginLeft: "100px",
              transform: "rotate(3deg)",
            }}
            alt=""
          />
        </div>
      </div>
      <div>
        <SubHeader id="Quaratine" text="Quaratine Memos" />
      </div>
    </div>
  );
};

export default Memos;
