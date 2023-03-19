import React from "react";
import Button from "../../shared/Button";

const AboutText = ({ widthSize, aboutDatas }) => {
  return (
    <div className="col-span-4 md:col-start-7 md:col-span-6">
      {widthSize > 767 && (
        <div className="text-4xl text-white">
          <h3 className="font-bold">{aboutDatas?.secondTitle}</h3>
          <h3 className="font-light">{aboutDatas?.secondSubtitle}</h3>
        </div>
      )}
      <p className="text-xs md:text-base text-white mt-12 md:mt-10 md:mb-7">{aboutDatas?.text}</p>
      <div className="place-content-center text-center md:text-start mt-9 md:mt-0">
        <Button text="LET’S GET IN TOUCH" path="#" />
      </div>
    </div>
  );
};

export default AboutText;
