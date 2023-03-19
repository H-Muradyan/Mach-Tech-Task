import React from "react";
import useWidth from "../../../hooks/useWidth";
import Carousel from "../../shared/Carousel";

import { technologiesDatas } from "./const";
import TechCard from "./TechCard";
import TechImage from "./TechImage";

const Technologies = () => {
  const widthSize = useWidth();
  const { technologies } = technologiesDatas;

  return (
    <div className="px-1.5 md:px-5 lg:px-10 xl:px-20 mt-14 md:mt-28">
      <div className="px-2 md:px-0">
        <TechImage technologiesDatas={technologiesDatas} widthSize={widthSize} />
      </div>
      <div className="relative md:static grid grid-cols-4 gap-x-4 md:grid-cols-12 place-items-center">
        {widthSize > 767 ? (
          technologies.length &&
          technologies.map((technologie) => (
            <TechCard key={technologie.id} data={technologie} />
          ))
        ) : (
          <Carousel component={TechCard} datas={technologies} />
        )}
      </div>
    </div>
  );
};

export default Technologies;
