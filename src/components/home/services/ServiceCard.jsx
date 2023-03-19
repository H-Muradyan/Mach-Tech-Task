import React from "react";
import Button from "../../shared/Button";
import cardLine from "../../../assets/images/cardLine.svg";

const ServiceCard = ({ data }) => {
  return (
    <div className="asd col-span-4 md:col-span-6 lg:col-span-3 p-9 text-white flex flex-col items-center">
      <img className="bg-cardImgBackground rounded-full p-3.5" src={data.img} alt={data.title} />
      <h2 className="text-2xl font-bold mt-5 mb-4">{data.title}</h2>
      <img src={cardLine} alt="line" />
      <p className="text-xs mt-5 mb-9">{data.text}</p>
      <Button text="TRY IT NOW" path="#" />
    </div>
  );
};

export default ServiceCard;
