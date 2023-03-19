import React from "react";
import { footerDatas } from "../const";
import column from "../../../assets/images/column.svg"
import Pages from "./Pages";
import Faq from "./Faq";

const FooterNavbar = () => {
  const { footerNavs, faqs } = footerDatas;

  return (
    <>
      <img src={column} alt="column" />
      <Pages footerNavs={footerNavs} />
      <img src={column} alt="column" />
      <Faq faqs={faqs} />
      <img src={column} alt="column" />
    </>
  );
};

export default FooterNavbar;
