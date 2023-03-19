import React from "react";

const HeroTitle = () => {
  return (
    <div className="font-bold">
      <h2 className="text-2xl text-white">
        <span className="mr-2 text-4xl bg-gradient-to-r from-silverLight to-silver text-transparent bg-clip-text">
          Dive
        </span>{" "}
        Into The Depths
      </h2>
      <h2 className="text-2xl text-white">
        Of{" "}
        <span className="text-4xl bg-gradient-to-r from-silverLight to-silver text-transparent bg-clip-text">
          Virtual Reality
        </span>
      </h2>
    </div>
  );
};

export default HeroTitle;
