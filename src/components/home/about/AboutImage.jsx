import React from "react";
import aboutLine1 from "../../../assets/images/aboutLine1.svg";
import aboutLine2 from "../../../assets/images/aboutLine2.svg";

const AboutImage = ({ widthSize, aboutDatas }) => {
  return (
    <>
      <img
        className="col-span-4 md:col-span-5"
        src={widthSize < 768 ? aboutDatas?.imgMob : aboutDatas?.img}
        alt={aboutDatas.title}
      />
      {widthSize > 767 && (
        <div className="absolute -z-10 h-full w-screen -left-20">
          <img src={aboutLine1} alt="line" />
          <img src={aboutLine2} alt="line" />
        </div>
      )}
    </>
  );
};

export default AboutImage;
