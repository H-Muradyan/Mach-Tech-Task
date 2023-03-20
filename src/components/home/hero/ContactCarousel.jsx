import React, { useState } from "react";
import { contactsData } from "./const";
import circleRight from "../../../assets/images/circleRight.svg";
import circleLeft from "../../../assets/images/circleLeft.svg";
import styles from "../../../styles/Hero.module.css";

const ContactCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevClick = () => {
    setIndex((prev) => (prev === 0 ? contactsData.length - 1 : prev - 1));
  };

  const nextClick = () => {
    setIndex((prev) => (prev === contactsData.length - 1 ? (prev = 0) : prev + 1));
  };

  return (
    <div
      className={`${styles.container} flex justify-between m-auto space-x-3 col-span-4 mt-14 px-2 w-full max-w-[430px]`}
    >
      <img className="cursor-pointer py-11" onClick={prevClick} src={circleLeft} alt="icon" />
      <div className="place-self-center cursor-pointer">
        {contactsData &&
          contactsData.map((contact) => {
            return (
              contact.id === index && (
                <a
                  target={"_blank"}
                  href={contact.link}
                  key={contact.id}
                  className="flex items-center space-x-2.5"
                >
                  <img src={contact.icon} alt={contact.title} />
                  <p className="text-sm text-white">{contact.text}</p>
                </a>
              )
            );
          })}
      </div>
      <img className="cursor-pointer" onClick={nextClick} src={circleRight} alt="icon" />
    </div>
  );
};

export default ContactCarousel;
