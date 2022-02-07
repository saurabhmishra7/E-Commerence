import React from "react";
import FormikComponent from "../components/Formik";
import * as Yup from "yup";

export default function DeliveryAddress() {
  const intialValues = {
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    pinCode: "",
    mobileNumber: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    address: Yup.string().required("Address is required"),
    pinCode:Yup.number().test('len', 'Must be exactly 6 characters', (val) => val?.toString().length === 6),
    mobileNumber:Yup.number().test('len', 'Must be exactly 10 characters', val => val?.toString().length === 10),
    country:Yup.string().required()
  });
  return (
    <div>
      <FormikComponent
        intialValues={intialValues}
        validationSchema={validationSchema}
        title={"SHIPPING DETAILS"}
        
      />
    </div>
  );
}
