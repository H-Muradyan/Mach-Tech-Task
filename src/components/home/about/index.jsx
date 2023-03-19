import React from "react";
import useWidth from "../../../hooks/useWidth";
import TitleDesc from "../../shared/TitleDesc";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

import { aboutDatas } from "./const";

const About = () => {
  const widthSize = useWidth();

  return (
    <div className="mt-14 md:mt-24 px-5 lg:px-10 xl:px-20">
      <TitleDesc data={aboutDatas} />
      <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-12 place-items-center mt-9 md:mt-20">
        <AboutImage widthSize={widthSize} aboutDatas={aboutDatas} />
        <AboutText widthSize={widthSize} aboutDatas={aboutDatas} />
      </div>
    </div>
  );
};

export default About;
