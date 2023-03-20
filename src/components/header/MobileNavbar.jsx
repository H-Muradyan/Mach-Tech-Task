import React from "react";

const MobileNavbar = ({ showMobNav, headerNav }) => {
  return (
    <nav
      className={`${
        showMobNav ? "translate-y-0" : "-translate-y-72"
      } bg-mobNavBg absolute w-full duration-500 bg-opacity-50 flex flex-col`}
    >
      {headerNav &&
        headerNav.map((nav) => (
          <a
            href={nav.link}
            className={`cursor-pointer text-white hover:bg-mobNavBg w-full text-center py-3`}
            key={nav.id}
          >
            {nav.text}
          </a>
        ))}
    </nav>
  );
};

export default MobileNavbar;
