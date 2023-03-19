import React from "react";

//mobile
import headerLogoMob from "../../assets/images/headerLogoMob.svg";
import headerTextMob from "../../assets/images/headerTextMob.svg";

//desktop
import headerLogo from "../../assets/images/headerLogo.svg";
import headerText from "../../assets/images/headerText.svg";

import { Link } from "react-router-dom";

const HeaderLogo = ({ widthSize }) => {
  return (
      <Link className="flex cursor-pointer" to="/">
        <img className="mr-3" src={widthSize < 1024 ? headerLogoMob : headerLogo} alt="logo" />
        <img src={widthSize < 1024 ? headerTextMob : headerText} alt="logoText" />
      </Link>
  );
};

export default HeaderLogo;
