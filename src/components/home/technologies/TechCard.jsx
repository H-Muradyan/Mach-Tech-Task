import React from "react";

const TechCard = ({ data }) => {
  return (
    <div className="col-span-4 md:col-span-6 lg:col-span-3 place-self-center">
      <img className="h-64 md:h-full" src={data.img} alt={data.title} />
    </div>
  );
};

export default TechCard;
