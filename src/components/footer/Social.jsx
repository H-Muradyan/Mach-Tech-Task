import React from "react";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

const Social = ({ socialPages }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white font-bold mb-7 md:mb-10 mt-14 md:mt-0">SOCIALIZE WITH HYDRA</h2>
      {socialPages.length && (
        <div className="flex space-x-5 mb-12">
          {socialPages.map((socialpage) => (
            <Link
              key={socialpage.id}
              target={"_blank"}
              to={socialpage.link}
              className="flex items-center justify-evenly w-full cursor-pointer hover:bg-black rounded-full"
            >
              <img className="" src={socialpage.img} alt={socialpage.name} />
            </Link>
          ))}
        </div>
      )}
      <Button text="BUILD YOUR WORLD" path="#" />
    </div>
  );
};

export default Social;
