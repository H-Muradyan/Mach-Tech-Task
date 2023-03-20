import React from "react";

//mobile
import headerLogoMob from "../../assets/images/headerLogoMob.svg";
import headerTextMob from "../../assets/images/headerTextMob.svg";

//desktop
import headerLogo from "../../assets/images/headerLogo.svg";
import headerText from "../../assets/images/headerText.svg";


const HeaderLogo = ({ widthSize }) => {
  return (
      <a href="#" className="flex cursor-pointer">
        <img className="mr-3" src={widthSize < 1024 ? headerLogoMob : headerLogo} alt="logo" />
        <img src={widthSize < 1024 ? headerTextMob : headerText} alt="logoText" />
      </a>
  );
};

export default HeaderLogo;
