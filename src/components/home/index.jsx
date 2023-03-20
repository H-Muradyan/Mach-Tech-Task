import React from "react";
import About from "./about";
import Hero from "./hero";
import JoinHydra from "./joinHydra";
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
      <JoinHydra />
    </>
  );
};

export default HomePage;
