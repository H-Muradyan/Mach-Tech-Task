import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import Input from "../../shared/Input";

const JoinForm = () => {
  let initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  };

  const onSubmit = async (values, onSubmitProps) => {
    let data = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      subject: values.subject,
      description: values.description,
    };
    alert(JSON.stringify(data, undefined, 2));
    onSubmitProps.resetForm();
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string().required("Required").min(6).matches().max(15).matches(),
    subject: Yup.string().required("Required"),
  });
  return (
    <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={validationSchema}>
      <Form className="w-full text-center ">
        <div className="flex flex-col space-y-6 md:space-y-8">
          <div className="flex flex-col md:flex-row md:space-x-2.5 space-y-6 md:space-y-0">
            <Input type="text" name="firstName" placeholder="First Name" />
            <Input type="text" name="lastName" placeholder="Last Name" />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-2.5 space-y-6 md:space-y-0">
            <Input type="email" name="email" placeholder="email" />
            <Input type="number" name="phone" placeholder="phone" />
          </div>
          <Input type="text" name="subject" placeholder="subject" />
          <Input rows="8" as="textarea" name="description" placeholder="Tell Us Something..." />
        </div>
        <button
          className="mt-14 cursor-pointer border-2 border-background px-20 md:px-6 lg:px-9 bg-gradient-to-r from-silver to-silverLight text-btnTextColor rounded-4xl inline-block py-4 text-sm md:text-xs font-bold hover:border-2 hover:border-white hover:from-inherit hover:text-white"
          type="submit"
        >
          SEND TO HYDRA
        </button>
      </Form>
    </Formik>
  );
};

export default JoinForm;
