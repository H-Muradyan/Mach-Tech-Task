import React from "react";
import useWidth from "../../../hooks/useWidth";
import TitleDesc from "../../shared/TitleDesc";
import { processDatas } from "./const";
import ProcessCard from "./ProcessCard";
import processLine from "../../../assets/images/processLine.svg";
import Carousel from "../../shared/Carousel";

const Process = () => {
  const widthSize = useWidth();
  const { processes } = processDatas;

  return (
    <div id="processes" className="mt-14 md:mt-16 px-1.5 md:px-5 lg:px-10 xl:px-20 max-w-md m-auto md:max-w-full">
      <TitleDesc data={processDatas} />
      <div className="px-2 md:px-0 relative grid grid-cols-4 gap-x-4 md:grid-cols-12 md:gap-y-6 lg:gap-y-0 mt-9 md:mt-28 place-items-end lg:place-items-start">
        {widthSize > 767 ? (
          processes.length &&
          processes.map((process) => (
            <ProcessCard widthSize={widthSize} key={process.id} data={process} />
          ))
        ) : (
          <Carousel component={ProcessCard} datas={processes} />
        )}
        {widthSize > 1023 && (
          <div className="absolute -z-10 w-screen -left-10 xl:-left-20">
            <img src={processLine} alt="line" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Process;
