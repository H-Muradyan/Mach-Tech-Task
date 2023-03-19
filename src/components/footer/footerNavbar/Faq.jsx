import React from "react";
import { Link } from "react-router-dom";

const Faq = ({ faqs }) => {
  return (
    <div className="flex flex-col space-y-5">
      <h4 className="text-white font-bold">F.A.Q</h4>
      {faqs &&
        faqs.map((faq) => (
          <Link
            key={faq.id}
            to={faq.link}
            target={"_blank"}
            className={`font-bold text-white hover:text-mobNavBg active:text-mobNavBg `}
          >
            {faq.text}
          </Link>
        ))}
    </div>
  );
};

export default Faq;
