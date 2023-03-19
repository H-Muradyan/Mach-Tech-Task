import React from "react";
import heroVector from "../../../assets/images/heroVector.svg";
import Button from "../../shared/Button";
import smallArrow from "../../../assets/images/smallArrow.svg";

const HeroText = ({ widthSize }) => {
  return (
    <>
      {widthSize > 767 && (
        <>
          <p className="text-white mt-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .
          </p>
          <img className="absolute -z-10 -left-20 top-0" src={heroVector} alt="line" />
        </>
      )}

      <div className="flex space-x-10 mt-9 md:mt-16">
        <Button text="BUILD YOUR WORLD" path="#" />
        {widthSize > 767 && <img src={smallArrow} alt="arrow-icon" />}
      </div>
    </>
  );
};

export default HeroText;
