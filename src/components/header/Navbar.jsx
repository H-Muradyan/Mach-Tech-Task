import React from "react";

const Navbar = ({ headerNav }) => {
  return (
    <nav className="flex space-x-3 lg:space-x-10">
      {headerNav &&
        headerNav.map((nav) => (
          <a
            href={nav.link}
            key={nav.id}
            className={`cursor-pointer text-xs font-bold text-white relative after:rounded-3xl after:absolute after:duration-300 after:bg-white after:h-1 after:w-0 after:left-0 after:-bottom-3 hover:after:w-full`}
          >
            {nav.text}
          </a>
        ))}
    </nav>
  );
};

export default Navbar;
