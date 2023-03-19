import React from "react";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/images/footerLogo.svg";

const FooterLogo = () => {
  return (
    <Link className="flex cursor-pointer" to="/">
      <img className="mr-3" src={footerLogo} alt="logo" />
    </Link>
  );
};

export default FooterLogo;
