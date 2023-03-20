import React from "react";

const Faq = ({ faqs }) => {
  return (
    <div className="flex flex-col space-y-5">
      <h4 className="text-white font-bold">F.A.Q</h4>
      {faqs &&
        faqs.map((faq) => (
          <a
            key={faq.id}
            href={faq.link}
            target={"_blank"}
            className={`font-bold text-white md:text-xs lg:text-base hover:text-mobNavBg`}
          >
            {faq.text}
          </a>
        ))}
    </div>
  );
};

export default Faq;
