import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextError } from "./TextError";

export function Select(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{name}</label>
      <Field id={name} name={name} {...rest} as="select">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
