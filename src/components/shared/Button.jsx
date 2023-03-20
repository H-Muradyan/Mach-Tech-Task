import React from "react";

const Button = ({ text, path }) => {
  return (
    <a
      className={`cursor-pointer border-2 border-background px-16 md:px-6 lg:px-9 bg-gradient-to-r from-silver to-silverLight text-btnTextColor rounded-4xl inline-block py-4 text-sm md:text-xs font-bold hover:border-2 hover:border-white hover:from-inherit hover:text-white`}
      href={path}
    >
      <span>{text}</span>
    </a>
  );
};

export default Button;
