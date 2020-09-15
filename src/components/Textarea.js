import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextError } from "./TextError";

export function Textarea(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{name}</label>
      <Field id={name} name={name} {...rest} as="textarea" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
