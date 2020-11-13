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
import qua1 from "../assets/quaratine/qua1.jpg";
import qua2 from "../assets/quaratine/qua2.jpg";
import qua3 from "../assets/quaratine/qua3.jpg";
import qua4 from "../assets/quaratine/qua4.jpg";
import qua5 from "../assets/quaratine/qua5.jpeg";
import { Carousel } from "react-bootstrap";
import SubHeader from "../components/SubHeader";
import PhotoSectionH from "../components/PhotoSectionH";
import PhotoSectionV from "../components/PhotoSectionV";
import Next from "../components/Next";

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
        <PhotoSectionH
          image={childhood3}
          text="The last day of Grade 9 tuition or idk. Just a random selfie? We were back-benchers ahahah, which means we were chaotic since state school."
          odd
        />
        <PhotoSectionH
          image={childhood9}
          text="Jan 16th, 2016: Twel’s birthday surprise. It was the very first surprise event in our squad."
        />
        <PhotoSectionV
          image={childhood1}
          text="Nov 14th, 2016: Your birthday Hang Out. We surprised you with a cake
          from ice berry. It wasn’t easy. We left you saying we were going to
          toilet. Actually, we went to buy the cake, and we found out that there was no candle xD,
          so we had to go to the nearest convenience store in rush. It was
          such a great memory."
          odd
        />
        <div className="Photo-section">
          <Carousel
            activeIndex={index1}
            onSelect={handleSelect1}
            className="Carousal-image"
          >
            <Carousel.Item>
              <img className="d-block w-100" src={childhood8} alt="" />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">@Au's home</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={childhood7} alt="" />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">
                  @Shwe Apple's wearing couple shirts
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={childhood6} alt="" />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">
                  @Au's home for hilarious selfies
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <p className="Memo-caption">
            Jan 16th, 2017: Twel’s BD again. We might forget other things but,
            we won’t forget that day; we wore couple shirts xD. We bought them
            from 5000 kyats store, and we changed into them in Shwe Apple
            Hotpot's Toilet LoL. Then, we went around Sanchaung wearing couple
            shirts, we also went to City Mart. Then at your house, we took funny
            selfies.
            <span style={{ fontSize: "110%" }}>🤳</span>
          </p>
        </div>
        <div className="Photo-section">
          <p className="Memo-caption">
            Probably Oct or Nov of Grade 9, We wore MM costumes because we
            decided we would wear matching dresses for Thadingyut. All of us
            looked gorgeous UwU ❤️
          </p>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className="Carousal-image"
          >
            <Carousel.Item>
              <img className="d-block w-100" src={childhood4} alt="" />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">@Daw Saw Myint Tuition</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={childhood5} alt="" />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">2015 Thadinkyut</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <PhotoSectionH
          image={childhood2}
          text="JUE’s special edit: It is such a shame that we don't have any group
            photo in our school uniforms. But this one is fine tho. ✌🏽"
        />
      </div>
      <div>
        <SubHeader id="Teenage" text="Teenage Memos" />
        <div className="Photo-section">
          <p className="Memo-caption">
            June 17th, 2019: We Celebrated Jue's 18th Birthday at Yogane. Jue
            was surprised by our sprite xD Mission accomplished! And we went to
            Bonchon for the next round keke. We drank strawberry yogurt Soju.
            Our Birthday celebrations with alcohol started from that day lol 🥂
          </p>
          <Carousel
            activeIndex={index2}
            onSelect={handleSelect2}
            className="Carousal-image"
          >
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage1} alt="" />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">@Bonchon</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage2} alt="" />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">@Yogane</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <PhotoSectionV
          image={Teenage16}
          text="A bottle of Strawberry Yoghurt Soju shared by 4 lol
          Cheersss!"
        />
        <PhotoSectionH
          image={Teenage6}
          text="Nov 4th, 2019, @JS We watched 'Now and Ever' skipping our morning classes. It was the earlist and our first ever movie date lol."
          odd
        />
        <PhotoSectionH
          image={Teenage3}
          text="Nov 14th, 2019: We celebrated your 19th Birthday at Junction City. We gave you a handmade rose bouquet. Mission part one wasn't fully succeeded:(  Then, we had some snacks at food court. Jue faked a phone call from her aunty and went to buy a cake from Seasons. We surprised with that cake at Lotteria. Mission part two accomplished weeee!!!!"
        />
        <div className="Photo-section">
          <p className="Memo-caption">
            We went to the Corner Bar for the final round. It was halirious that
            we drank fresh fruit juices at the bar LoL. And you were
            surprisingly amazed by the "Eggs Box". Mission part three also
            succeeded!!!! Our surprises are never boring, right? xD
          </p>
          <Carousel
            activeIndex={index3}
            onSelect={handleSelect3}
            className="Carousal-image-vertical"
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "550px" }}
                src={Teenage5}
                alt=""
              />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">@JC</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "550px" }}
                src={Teenage4}
                alt=""
              />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">@The Corner Bar</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <PhotoSectionH
          image={Teenage7}
          text="Nov 29th, 2019: @Angel Phoo's Bakery. We wanted to eat rainbow cake, and so it turned out to be a sudden date lol. Chit chat time &#128150;"
        />
        <PhotoSectionH
          image={Teenage8}
          text="Jan 16th, 2019 @Pizza Company, DC and Koe Htet Kyee Pagoda. We celebrated Twel's 19th birthday at pizza company. Twel was surprised by our Hong-pong (200 ks per one hong pong) and cake. Hong-pong was a total budget-surprise but, somehow, it was useful for Twel's ybs fees LOL. And then, we went to Koe Htet Kyee Pagoda. It was our first time of going to pagoda together."
          odd
        />
        <PhotoSectionH
          image={Teenage9}
          text="June 30th, 2020 @August,Myaynigone. We met for some discussion about our 'Twenties OS' at August. Then, our solo photoshooting session xD. We also went to City Mart to buy some goods for home."
        />
        <div className="Photo-section">
          <p className="Memo-caption">
            June 17th, 2020: Jue's Birthday. First, we went to Sulei's home to
            prepare Memo Book and Cake. Then, we rushed to Jue's home. We're so
            happy that Jue loves all the surprises - ovaltine sticks, cake,
            coupon and finally, Memo book
            <span style={{ fontSize: "100%" }}>❤️</span> For photo-session as
            ususl, Kyal Kyal helped us.
          </p>
          <Carousel
            activeIndex={index4}
            onSelect={handleSelect4}
            className="Carousal-image"
          >
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage10} alt="" />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">
                  @Au's home for hilarious selfies
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage11} alt="" />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">@Kann Narr</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <PhotoSectionV
          image={Teenage17}
          text="Then, we went to Kann Narr and had one bottle of Spy for 4 ppl!
            Cheerssss"
        />
        <div className="Photo-section">
          <p className="Memo-caption">
            Aug 13th, 2020: Yumi's late late Birthday. We didn't have a chance
            to meet with her on her birthday. We just sent her Pizza Maru with
            trishaw (our brain worked 101% LoL) and JoJo mala xia guo. It was
            Birthday Suprise Part I. So for Part II, we surprised on the day of
            'late late Birthday' with Chani's pic on mini cupcakes while we're
            enjoying our JoJo Hotpot. She really loved it. Part III
            (one-month-mini-letter-jar by us) was in Music Box. It also
            succeeded!!! As usual, we went to Time City for our photo-session.{" "}
          </p>
          <Carousel
            activeIndex={index5}
            onSelect={handleSelect5}
            className="Carousal-image"
          >
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage12} alt="" />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">@Time City</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={Teenage13} alt="" />
              <Carousel.Caption className="p-0">
                <p className="Carousal-caption">Karaoke time @MusicBox</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <PhotoSectionV
          image={Teenage14}
          text="@Chill Out, we played some board games. It was so so much fun!!!
          After that, we went to Au's home and tried hard to take the exact
          picture like we took in Grade-10 lol"
        />
        <PhotoSectionV
          image={Teenage15}
          text="Aug 8th, 2020: @Dance Studio. We made our 4-year-old Happiness Dance
          Project happen, yet we failed :'' You and Sulei danced Naughty cover
          (First time seeing you dance keke)"
          odd
        />
      </div>
      <div>
        <SubHeader id="Quaratine" text="Quaratine Memos" />
        <PhotoSectionV
          image={qua1}
          text="Our first ever video chat during quaratine!"
        />
        <PhotoSectionV
          image={qua2}
          text="Another one xD We look like nerds  lol"
          odd
        />
        <PhotoSectionH
          image={qua3}
          text="Our first and last chicken dinner xD It was really fun running the whole game huh xD"
        />
        <PhotoSectionH
          image={qua4}
          text="Movie night (Enola Holmes) Louis Patridge - definitely chicken soup for our eyes hehehee"
          odd
        />
        <PhotoSectionH
          image={qua5}
          text="Sulei participated in UM1 Thadinkyut 2.0, and we, lovely supportive friends, rooted for her and voted with all of our thousand accounts xD"
        />
      </div>
      <p
        style={{
          fontFamily: "Nova Mono, monospace",
          textAlign: "center",
          fontSize: "larger",
          margin: "50px",
        }}
      >
        These are just a few random memos, but we all know we have more in our
        hearts, right?{" "}
        <span style={{ fontSize: "120%" }}>&#128580;&#128149;</span>
      </p>
      <Next to="foryou" />
    </div>
  );
};

export default Memos;
