import React from "react";
import useWidth from "../../../hooks/useWidth";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroTitle from "./HeroTitle";
import Carousel1 from "./Carousel1";
import Contacts from "./Contacts";


const Hero = () => {
  const widthSize = useWidth();

  return (
    <div className="mt-14 md:mt-32 grid grid-cols-4 gap-x-4 md:grid-cols-12 px-5 lg:px-10 xl:px-20">
      <HeroImage widthSize={widthSize} />
      <div className="grid col-span-4 md:row-start-1 md:row-span-2 md:col-span-6 lg:col-span-5 place-items-center md:place-items-start pt-8">
        <HeroTitle />
        <HeroText widthSize={widthSize} />
      </div>
      {widthSize < 768 ? <Carousel1 /> : <Contacts />}


    </div>
  );
};

export default Hero;
