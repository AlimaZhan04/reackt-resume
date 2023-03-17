import React from "react";

const Education = () => {
  return (
    <div>
      <div className="d-flex ">
        <div className="photo">
          <img
            className="about-img"
            src="https://i.pinimg.com/564x/e3/4b/d3/e34bd3e11013227a5a4e74dca21ec9bb.jpg"
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
          <h2 className>Graduated the High School</h2>
        </div>
      </div>

      <div className="d-flex ">
        <div style={{ fontFamily: "initial", padding: "10px 25px" }}>
          <h2 className>Graduated the Musical school</h2>
        </div>
        <img
          className="about-img"
          width={500}
          height={600}
          src="https://i.pinimg.com/474x/6b/43/3f/6b433f8708030388c6ae297ec2341e25.jpg"
          alt=""
        />
      </div>

      <div className="d-flex ">
        <div className="photo">
          <img
            className="about-img"
            src="https://i.pinimg.com/474x/a4/cd/f8/a4cdf8d0a8212bd89b00d69dcb2b01f4.jpg"
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
          <h2 className>Education process at Makers</h2>
        </div>
      </div>
    </div>
  );
};

export default Education;
