import React from "react";
import { Link } from "react-router-dom";
import { contactsData } from "./const";

const Contacts = () => {
  return (
    <div className="asd1 col-span-12 flex justify-between px-4 xl:px-14 mt-20">
      {contactsData &&
        contactsData.map((contact) => (
          <React.Fragment key={contact.id}>
            <Link
              target={"_blank"}
              to={contact.link}
              className="flex items-center justify-evenly w-full cursor-pointer"
            >
              <img src={contact.icon} alt={contact.title} />
              <div className="text-white">
                <h4 className="font-bold lg:text-2xl">{contact.title}</h4>
                <p className="text-xs lg:text-sm">{contact.text}</p>
              </div>
            </Link>
            {contact.id !== 2 && (
              <div className="xl:mx-5 border border-borderColor my-6 h-[110px]"></div>
            )}
          </React.Fragment>
        ))}
    </div>
  );
};

export default Contacts;
