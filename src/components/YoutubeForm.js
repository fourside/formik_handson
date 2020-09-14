import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextError } from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
};
const onSubmit = (values) => {
  console.log("form data", values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email format"),
  channel: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
});

export function YoutubeForm() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {
              (errorMsg) => <div className="error">{errorMsg}</div>
            }
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" placeholder="Youtube channel name" />
          <ErrorMessage name="channel" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address">
            {
              (props) => {
                const { field, from, meta} = props;
                return <div>
                  <input id="address" type="text" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              }
            }
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook profile</label>
          <Field type="text" id="facebook" name="social.facebook" />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter profile</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
