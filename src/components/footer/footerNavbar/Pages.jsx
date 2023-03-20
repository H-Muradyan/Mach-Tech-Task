import React from "react";

const Pages = ({ footerNavs }) => {
  return (
    <nav className="flex flex-col space-y-5">
      {footerNavs &&
        footerNavs.map((nav) => (
          <a
            href={nav.link}
            key={nav.id}
            className={`cursor-pointer font-bold md:text-xs lg:text-base text-white hover:text-mobNavBg`}
          >
            {nav.text}
          </a>
        ))}
    </nav>
  );
};

export default Pages;
