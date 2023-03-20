import React from "react";
import useWidth from "../../hooks/useWidth";
import smallArrow from "../../assets/images/smallArrow.svg";
import line from "../../assets/images/line.svg";

const TitleDesc = ({ data }) => {
  const widthSize = useWidth();
  
  return (
    <div className="flex justify-center md:justify-between md:items-center lg:items-end text-white 	">
      <div className="text-center md:text-start">
        <h3 className="mb-4 md:mb-0 font-bold text-2xl lg:text-4xl">{data?.title}</h3>
        <div className="md:flex md:items-center">
          <h3 className="text-2xl lg:text-4xl font-light">{data?.subtitle}</h3>
          <div className="flex ml-14 lg:ml-7">
            {widthSize > 1024 && <img className="max-w-none" src={line} alt="icon" />}
            {widthSize > 767 && <img className="max-w-none -ml-0.5" src={smallArrow} alt="icon" />}
          </div>
        </div>
      </div>
      {widthSize > 767 && <p className="basis-1/2">{data?.titleText}</p>}
    </div>
  );
};

export default TitleDesc;
