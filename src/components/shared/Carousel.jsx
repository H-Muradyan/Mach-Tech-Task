import React, { useState } from "react";
import leftArrow from "../../assets/images/leftArrow.svg";
import rightArrow from "../../assets/images/rightArrow.svg";
import CircleButton from "./CircleButton";

const Carousel = ({ component: Component, datas }) => {
  const [index, setIndex] = useState(0);

  const prevClick = () => {
    setIndex((prev) => (prev === 0 ? (prev = datas.length - 1) : prev - 1));
  };

  const nextClick = () => {
    setIndex((prev) => (prev === datas.length - 1 ? (prev = 0) : prev + 1));
  };
  return (
    <>
      <div className="absolute left-0">
        <CircleButton action={prevClick} icon={leftArrow} />
      </div>
      {datas &&
        datas.map(
          (data) => data.id === index && <Component key={data.id} data={data} />
        )}

      <div className="absolute right-0">
        <CircleButton action={nextClick} icon={rightArrow} />
      </div>
    </>
  );
};

export default Carousel;
