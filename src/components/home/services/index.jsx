import React from "react";
import useWidth from "../../../hooks/useWidth";
import Carousel from "../../shared/Carousel";
import TitleDesc from "../../shared/TitleDesc";
import { servicesDatas } from "./const";
import ServiceCard from "./ServiceCard";
import servicesLine from "../../../assets/images/servicesLine.svg"

const Services = () => {
  const widthSize = useWidth();

  const { services } = servicesDatas;
  return (
    <div id="services" className="relative mt-16 md:mt-24 px-1.5 md:px-5 lg:px-10 xl:px-20 max-w-md m-auto md:max-w-full">
      <TitleDesc data={servicesDatas} />
      <div className="relative md:static px-7 md:px-0 grid grid-cols-4 gap-x-4 md:gap-y-6 lg:gap-y-0 md:grid-cols-12 place-items-center mt-7 md:mt-24">
        {widthSize > 767 ? (
          services.length &&
          services.map((service) => <ServiceCard key={service.id} data={service} />)
        ) : (
          <Carousel component={ServiceCard} datas={services} />
        )}
        {widthSize > 767 && (
          <div className="absolute -z-10 w-screen -left-1 top-72">
            <img src={servicesLine} alt="line" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
