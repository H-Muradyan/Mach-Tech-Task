import React from "react";
import CircleButton from "../../shared/CircleButton";
import pointer from "../../../assets/images/pointer.svg";

const ProcessCard = ({ data, widthSize }) => {
  return (
    <div className="col-span-4 md:col-span-6 lg:col-span-3 flex flex-col items-center place-self-center">
      <CircleButton text={data.step} />
      <div className="flex items-start text-2xl font-bold text-white mt-9 md:mt-6 text-center md:text-start">
        {widthSize > 767 && <img className="" src={pointer} alt="icon" />}
        <p className="ml-4 w-48 lg:w-56 xl:w-48">{data.title}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
