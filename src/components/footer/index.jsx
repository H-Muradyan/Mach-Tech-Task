import React from "react";
import FooterLogo from "./FooterLogo";
import { footerDatas } from "./const";
import Social from "./Social";
import footerLine from "../../assets/images/footerLine.svg";
import footerLineMob from "../../assets/images/footerLineMob.svg";
import useWidth from "../../hooks/useWidth";
import FooterNavbar from "./footerNavbar";

const Footer = () => {
  const widthSize = useWidth();
  const text = "2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED";
  const { socialPages } = footerDatas;

  return (
    <div className="mt-20 md:mt-32 px-7 xl:px-20 ">
      <div className="relative flex flex-col items-center md:flex-row md:items-start md:justify-between md:space-x-4">
        <FooterLogo widthSize={widthSize}/>
        {widthSize > 767 && <FooterNavbar />}
        <Social socialPages={socialPages} />
       
      </div>
      <img
        width="100%"
        className="mt-16 mb-9 md:mt-20 md:mb-12"
        src={widthSize > 767 ? footerLine : footerLineMob}
        alt="line"
      />
      <p className="text-white font-bold tracking-widest leading-10 px-5 text-sm text-center mb-20 md:mb-14">
        {widthSize > 767 ? text : text.replaceAll("-", "")}
      </p>
    </div>
  );
};

export default Footer;
