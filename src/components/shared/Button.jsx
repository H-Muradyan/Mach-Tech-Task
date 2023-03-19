import React, { memo } from "react";
import { Link, useLocation } from "react-router-dom";

const Button = ({ text, path }) => {
  const { pathname } = useLocation();
  return (
    <Link
      className={`${
        pathname === path
          ? "border-2 border-white from-inherit to-inherit text-white"
          : "border-2 border-background"
      } px-20 md:px-6 lg:px-9 bg-gradient-to-r from-silver to-silverLight text-btnTextColor rounded-4xl inline-block py-4 text-sm md:text-xs font-bold hover:border-2 hover:border-white hover:from-inherit hover:text-white active:border-2 active:border-white active:from-inherit active:text-white`}
      to={path}
    >
      <span>{text}</span>
    </Link>
  );
};

export default memo(Button);
