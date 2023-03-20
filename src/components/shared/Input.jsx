import { ErrorMessage, Field } from "formik";
import React from "react";

const Input = ({ type, name, placeholder, as, rows }) => {
  return (
    <div className="w-full relative">
      <Field
        className="w-full text-sm text-white bg-transparent border-2 outline-none border-white rounded-4xl py-4 px-7 lg:py-7 lg:px-10"
        type={type}
        as={as}
        name={name}
        placeholder={placeholder}
        rows={rows}
      />
      <div className="tracking-widest bg-red-700 text-white -top-3 absolute left-8 md:left-11 text-xs py-0 px-1 p-3 pointer-events-none">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default Input;
