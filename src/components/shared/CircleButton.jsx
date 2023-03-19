import React from "react";

const CircleButton = ({ action, icon, text }) => {
  return (
    <button onClick={action} className={`bg-cardImgBackground rounded-full ${text ? "p-4" : "p-2 md:p-4"} `}>
      <div className={`asd2 ${text ? "w-40 h-40" : "w-11 h-11 md:w-17.5 md:h-17.5"} text-btnTextColor font-bold text-6xl rounded-full flex justify-center items-center`}>
        {text || <img src={icon} alt="icon" />}
      </div>
    </button>
  );
};

export default CircleButton;
