import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "./FormikControl";

export function RegistrationForm() {
  const mocOptions = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), ""], "Passwords must match").required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
  });
  const onSubmit = (values, props) => {
    console.log("form data", values);
    props.setSubmitting(false);
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => {
        console.log(formik)
        return (
        <Form>
          <FormikControl control="input" type="email" name="email" label="Email" />
          <FormikControl control="input" type="password" name="password" label="Password" />
          <FormikControl control="input" type="password" name="confirmPassword" label="Confirm Password" />
          <FormikControl control="radio" name="modeOfContact" label="Mode of contact" options={mocOptions} />
          <FormikControl control="input" type="text" name="phone" label="Phone number" />
          <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
            Submit
          </button>
        </Form>
      )}}
    </Formik>
  );
}
