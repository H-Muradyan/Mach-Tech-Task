import React from "react";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = ({ showMobNav, headerNav }) => {
  const { pathname } = useLocation();

  return (
    <nav
      className={`${
        showMobNav ? "translate-y-0" : "-translate-y-72"
      } bg-mobNavBg absolute w-full duration-500 bg-opacity-50 flex flex-col`}
    >
      {headerNav &&
        headerNav.map((nav) => (
          <Link
            className={`${
              pathname === nav.path && "bg-mobNavBg"
            } text-white hover:bg-mobNavBg w-full text-center py-3`}
            key={nav.id}
            to={nav.path}
          >
            {nav.text}
          </Link>
        ))}
    </nav>
  );
};

export default MobileNavbar;
