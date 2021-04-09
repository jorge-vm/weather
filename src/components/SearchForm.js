import { useFormik } from "formik";
import * as Yup from "yup";

const SearchForm = ({ apiCall }) => {
  const formik = useFormik({
    initialValues: {
      city: "",
      units: "imperial",
    },
    validationSchema: Yup.object({
      city: Yup.string().required("City is Required"),
      units: Yup.string().required("Unit is Required"),
    }),
    onSubmit: (values) => {
      apiCall(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-group">
        <span className="input-group-text">City</span>
        <input
          id="city"
          type="text"
          className="form-control"
          placeholder="Enter city name, i,e. Seattle"
          {...formik.getFieldProps("city")}
        />
        <select className="form-select" {...formik.getFieldProps("units")}>
          <option value="imperial">°F</option>
          <option value="metric">°C</option>
        </select>
      </div>
      {formik.touched.city && formik.errors.city ? (
        <div className="alert alert-warning m-2">{formik.errors.city}</div>
      ) : null}
      <br />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
