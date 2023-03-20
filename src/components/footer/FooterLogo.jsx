import React from "react";
import footerLogo from "../../assets/images/footerLogo.svg";

//mobile
import footerVectorMob1 from "../../assets/images/footerVectorMob1.svg";
import footerVectorMob2 from "../../assets/images/footerVectorMob2.svg";

//desktop
import footerVector1 from "../../assets/images/footerVector1.svg";
import footerVector2 from "../../assets/images/footerVector2.svg";

const FooterLogo = ({ widthSize }) => {
  return (
    <>
      <a href="#" className="cursor-pointer">
        <img className="mr-3" src={footerLogo} alt="logo" />
      </a>

      <div className="absolute bottom-20 md:bottom-0 flex flex-col items-center -z-10 h-full w-screen">
        <img
          className="md:absolute md:bottom-40 md:-left-20"
          src={widthSize > 767 ? footerVector1 : footerVectorMob1}
          alt="line"
        />
        <img
          className="absolute top-36 md:top-0 lg:-top-11 md:-bottom-6 md:-left-20"
          src={widthSize > 767 ? footerVector2 : footerVectorMob2}
          alt="line"
        />
      </div>
    </>
  );
};

export default FooterLogo;
