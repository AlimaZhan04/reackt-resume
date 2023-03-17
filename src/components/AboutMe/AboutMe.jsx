import React from "react";
import Skils from "../Skils/Skils";
import msg from "./images/msg994982792-21803.jpg";
import msg1 from "./images/msg994982792-21805.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <center>
        {" "}
        <h1>About Me</h1>
      </center>

      <div className="d-flex ">
        <div className="photo">
          <img className="about-img" src={msg} alt="" />
        </div>

        <div
          style={{
            // marginLeft: "3%",
            fontFamily: "initial",

            padding: "10px 25px",
          }}
        >
          <h3 className>
            Hi, Everyone?! My name is Alima. I'm 18 years old . live in a
            Bishkek . The whole story began when I was 12 years old. And one
            fine day I found out that a new English course was opened in my
            village. I was very happy and motivated that day. Since I had a very
            big opportunity to improve my knowledge, since I loved English very
            much.
          </h3>
        </div>
      </div>

      <h2 className="hobby">My Hobbie</h2>

      <div className="d-flex ">
        <div style={{ fontFamily: "initial", padding: "10px 25px" }}>
          <h3 className>
            My opinion is that cooking is the best hobby to have, because it can
            be very useful in life. Cooking is my hobby and has been for several
            years. I was about five years old, when I started learning how to
            cook. Cooking is something that I inherited from my grandmother; my
            grandmother was a professional chef and owned her own restaurant,
            where I learned how to cook.
          </h3>
        </div>
        <img
          className="about-img"
          width={500}
          height={600}
          src="https://i.pinimg.com/564x/5f/96/a5/5f96a529dd139c14da3e0c7eca82bd61.jpg"
          alt=""
        />
      </div>

      <div className="d-flex ">
        <div className="photo">
          <img
            className="about-img"
            src="https://i.pinimg.com/564x/69/e1/da/69e1daa30149d685f26b46d5ca4c8ce9.jpg"
            alt=""
          />
        </div>

        <div
          style={{
            // marginLeft: "3%",
            fontFamily: "initial",

            padding: "10px 25px",
          }}
        >
          <h3 className>
            Using your voice as a musical instrument can be considered many
            things, including a skill, a hobby, a talent, a career, and
            surprisingly even a workout. If you're considering picking up
            singing as a hobby, get ready for a fun adventure that can take you
            very far into a series of complicated interests, cultures, skills,
            and career paths, depending on how far you'd like to take it!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
