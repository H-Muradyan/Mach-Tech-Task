import React from "react";
import JoinForm from "./JoinForm";
import FormTitle from "./FormTitle";

const JoinHydra = () => {
  return (
    <div id="join-hydra" className="px-5 lg:px-10 xl:px-20 mt-20 md:mt-28 flex justify-center">
      <div className="container flex flex-col items-center rounded-4xl md:rounded-6xl py-12 md:py-24 px-5 md:px-28">
        <FormTitle />
        <JoinForm />
      </div>
    </div>
  );
};

export default JoinHydra;
