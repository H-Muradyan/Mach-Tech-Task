import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Pages = ({ footerNavs }) => {
  const { pathname } = useLocation();

  return (
    <nav className="flex flex-col space-y-5">
      {footerNavs &&
        footerNavs.map((nav) => (
          <Link
            key={nav.id}
            to={nav.path}
            className={`${
              pathname === nav.path && "text-mobNavBg"
            } font-bold text-white hover:text-mobNavBg active:text-mobNavBg`}
          >
            {nav.text}
          </Link>
        ))}
    </nav>
  );
};

export default Pages;
