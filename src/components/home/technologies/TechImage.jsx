import React from "react";
import downArrow from "../../../assets/images/downArrow.svg";
import CircleButton from "../../shared/CircleButton";

const TechImage = ({technologiesDatas, widthSize}) => {
  return (
    <div className="md:relative flex justify-center items-center md:pb-12">
      <img
        width="100%"
        src={widthSize < 768 ? technologiesDatas.imgMob : technologiesDatas.img}
        alt={technologiesDatas.title}
      />
      <div className="absolute text-white text-center">
        <h2 className="font-bold md:text-4xl mb-3.5 md:mb-3">{technologiesDatas.title}</h2>
        <h2 className="font-light text-2xl md:text-4xl">{technologiesDatas.subtitle}</h2>
      </div>
      {widthSize > 767 && (
        <div className="absolute bottom-0">
          <CircleButton icon={downArrow} />
        </div>
      )}
    </div>
  );
};

export default TechImage;
