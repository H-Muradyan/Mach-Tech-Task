import React from "react";
import { contactsData } from "./const";
import styles from "../../../styles/Hero.module.css"

const Contacts = () => {
  return (
    <div className={`${styles.container} col-span-12 flex justify-between px-4 xl:px-14 mt-20`} >
      {contactsData &&
        contactsData.map((contact) => (
          <React.Fragment key={contact.id}>
            <a
              target={"_blank"}
              href={contact.link}
              className="flex items-center justify-evenly w-full cursor-pointer"
            >
              <img className="" src={contact.icon} alt={contact.title} />
              <div className="text-white ml-2">
                <h4 className="font-bold lg:text-2xl">{contact.title}</h4>
                <p className="text-xs lg:text-sm">{contact.text}</p>
              </div>
            </a>
            {contact.id !== 2 && (
              <div className="xl:mx-5 border border-borderColor my-6 h-28"></div>
            )}
          </React.Fragment>
        ))}
    </div>
  );
};

export default Contacts;
