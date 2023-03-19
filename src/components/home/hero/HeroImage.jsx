import React from "react";

//mobile
import line1 from "../../../assets/images/line1.svg";
import line2 from "../../../assets/images/line2.svg";
import line3 from "../../../assets/images/line3.svg";
import heroImgMob from "../../../assets/images/heroImgMob.png";

//desktop
import lineMob1 from "../../../assets/images/lineMob1.svg";
import lineMob2 from "../../../assets/images/lineMob2.svg";
import lineMob3 from "../../../assets/images/lineMob3.svg";
import heroImg from "../../../assets/images/heroImg.png";

const HeroImage = ({ widthSize }) => {
  return (
    <div className="grid col-span-4 md:col-start-8 md:col-span-5 place-items-center md:mb-0">
      <img
        className="bg-imgBackground p-2 md:p-4 rounded-mix"
        src={widthSize < 768 ? heroImgMob : heroImg}
        alt="hero-image"
      />
   <div className="absolute w-full left-0 top-0 -z-10 flex justify-center md:justify-end">
        <img src={widthSize < 1024 ? lineMob1 : line1} alt="asd" className="absolute " />
        <img src={widthSize < 1024 ? lineMob2 : line2} alt="asd" className="absolute top-[77px] " />
        <img src={widthSize < 1024 ? lineMob3 : line3} alt="asd" className="absolute top-72 md:top-[320px] lg:top-[420px]" />
      </div>
    </div>
  );
};

export default HeroImage;
