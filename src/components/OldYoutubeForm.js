import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};
const onSubmit = (values) => {
  console.log("form data", values);
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email format"),
  channel: Yup.string().required("Required"),
});

export function OldYoutubeForm() {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  console.log(formik.touched)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-controll">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
          {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
        </div>

        <div className="form-controll">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
        </div>

        <div className="form-controll">
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur} />
          {formik.touched.channel && formik.errors.channel ? <div className="error">{formik.errors.channel}</div> : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
