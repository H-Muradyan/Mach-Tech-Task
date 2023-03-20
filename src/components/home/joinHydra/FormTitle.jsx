import React from "react";
import hydraLine from "../../../assets/images/hydraLine.svg";
import hydraLineMob from "../../../assets/images/hydraLineMob.svg";
import useWidth from "../../../hooks/useWidth";

const FormTitle = ({}) => {
  const widthSize = useWidth();

  return (
    <>
      <h3 className="text-white font-bold text-2xl md:text-4xl">JOIN HYDRA</h3>
      <img className="my-5 md:my-7" src={widthSize < 768 ? hydraLineMob : hydraLine} alt="line" />
      <h3 className="text-white font-light text-2xl lg:text-4xl mb-9 md:mb-16 px-16 leading-normal text-center">
        Let’s Build Your VR Experience
      </h3>
    </>
  );
};

export default FormTitle;
