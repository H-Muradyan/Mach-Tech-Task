import React from "react";
import About from "./about";
import Hero from "./hero";
import Process from "./process";
import Services from "./services";
import Technologies from "./technologies";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Technologies />
      <Process />
    </>
  );
};

export default HomePage;
