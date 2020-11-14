import React from "react";
import present1 from "../assets/present/present1.PNG";
import present2 from "../assets/present/present2.PNG";
import Next from "../components/Next.js";

const Presents = () => {
  return (
    <div className="Page">
      <h1 className="Page-Title">BD Presents for You</h1>
      <p className="present-description">
        Some surprises are still left hehe. You'll see now pr.
        <br />
        We sent birthday cakes to you. You love them, right? But, you might
        wonder why the cake has a bite &#129300; Actually, it has a story lol.
        Jue asked the bakery showing the photo just as in the screenshot. The
        lady from the bakery misunderstood and made the cakes the exact same way
        as in photo WITH THE BITE!!! &#129315;
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      ></div>
      <br />
      <p className="present-description">
        Remember we sang a song for you during zoom meet-up? Here's the video if
        you might want to see it again &#128157;
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          className="video"
          title="song"
          width="966"
          height="543"
          src="https://www.youtube.com/embed/lMId45f5uRg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="present-description">
        Sulei has a special surprise for youuu &#128149; She drew them
        patiently. We hope you love them, toooo.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "80px",
        }}
      >
        <img className="drawing-1" src={present1} alt="" />
        <img className="drawing-2" src={present2} alt="" />
      </div>
      <p className="present-description">
        Now, let's daydream for a bit &#129300; Shall we? What if Au were your
        girlfriend? &#129325; Check out the video below xD
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          className="video"
          title="girlfriend"
          width="966"
          height="604"
          src="https://www.youtube.com/embed/8RhxElpF5oQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="present-description">
        You really like Jeno so much. Well, imagine you were his girlfriend
        &#128584; and watch these bonus videos for you. hehe. We could upload
        the first video on YT, but the second one got blocked due to copyright.
        So, we'll just leave the drive link nor &#128535;
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          className="video"
          title="edit1"
          width="866"
          height="604"
          src="https://www.youtube.com/embed/6eiyLxtWwJI"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          className="feedback"
          href="https://drive.google.com/file/d/1uJvXKUcCPIp9qdPyoveDXZZuHZXuKeQh/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
        >
          Edit Video 2
        </a>
      </div>
      <Next to="spoiler" />
    </div>
  );
};

export default Presents;
