import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "./FormikControl";

export function LoginForm() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values) => {
    console.log("form data", values);
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <FormikControl control="chakrainput" type="email" name="email" label="Email" />
          <FormikControl control="chakrainput" type="password" name="password" label="Password" />
          <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
