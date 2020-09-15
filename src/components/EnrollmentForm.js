import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "./FormikControl";

export function EnrollmentForm() {
  const courseOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];
  const skilsetOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];
  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    skills: Yup.array().required("Required"),
    courseDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values, props) => {
    console.log("form data", values);
    props.setSubmitting(false);
  };
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {(formik) => (
        <Form>
          <FormikControl control="input" type="email" name="email" label="Email" />
          <FormikControl control="textarea" name="bio" label="Bio" />
          <FormikControl control="select" name="course" label="Course" options={courseOptions} />
          <FormikControl control="checkbox" name="skills" label="Your skillset" options={skilsetOptions} />
          <FormikControl control="date" name="courseDate" label="Course date" />
          <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
