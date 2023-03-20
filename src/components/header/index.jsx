import React, { useEffect, useRef, useState } from "react";


//mobile
import hamburger from "../../assets/images/hamburger.svg";

import useWidth from "../../hooks/useWidth";
import HeadeLogo from "./HeaderLogo";
import MobileNavbar from "./MobileNavbar";
import { headerNav } from "./conts";
import Navbar from "./Navbar";
import Button from "../shared/Button";

const Header = () => {
  const [showMobNav, setShowMobNav] = useState(false);
  const myRef = useRef();
  const widthSize = useWidth();

  const openMobileNav = () => {
    setShowMobNav((prev) => !prev);
  };




  useEffect(() => {
    const closeMobileNav = (e) => {
      if (widthSize < 768 && myRef.current.id !== e.target.id) {
        setShowMobNav(false);
      }
    };
    document.body.addEventListener("click", closeMobileNav);
    return () => document.body.removeEventListener("click", closeMobileNav);
  }, [widthSize]);

  return (
    <header className="relative px-5 lg:px-10 xl:px-20">
      <div className="flex relative z-10 justify-between pt-6 items-center">
        <HeadeLogo widthSize={widthSize} />
        {widthSize < 768 ? (
          <img
            ref={myRef}
            onClick={openMobileNav}
            className="cursor-pointer"
            src={hamburger}
            alt="navbar"
            id="hamburger"
          />
        ) : (
          <>
            <Navbar headerNav={headerNav} />
            <div className="space-x-3 lg:space-x-9">
              <Button text="CONTACT US" path="#contact-us" />
              <Button text="JOIN HYDRA" path="#join-hydra" />
            </div>
          </>
        )}
      </div>
      {widthSize < 768 && <MobileNavbar headerNav={headerNav} showMobNav={showMobNav} />}
    </header>
  );
};

export default Header;
