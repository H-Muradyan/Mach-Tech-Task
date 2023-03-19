import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ headerNav }) => {
  const { pathname } = useLocation();
  return (
    <nav className="flex space-x-3 lg:space-x-10">
      {headerNav &&
        headerNav.map((nav) => (
          <Link
            key={nav.id}
            to={nav.path}
            className={`${
              pathname === nav.path && "after:w-full"
            } text-xs font-bold text-white relative after:rounded-3xl after:absolute after:duration-300 after:bg-white after:h-1 after:w-0 after:left-0 after:-bottom-3 hover:after:w-full`}
          >
            {nav.text}
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;
