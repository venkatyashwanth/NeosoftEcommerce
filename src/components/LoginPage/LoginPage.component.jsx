import React, { useState } from "react";
import "./LoginPage.component.scss";

function LoginPage(props) {
  const { handlePageChange } = props;

  const initialValues = { useremail: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFocusCheck = (e) => {
    const { name, value } = e.target;
    if (name === "useremail") {
      let valueObj = { useremail: value };
      setFormErrors({ ...formErrors, ...validateEmail(valueObj, errors) });
    }
    if (name === "password") {
      let valueObj = { password: value };
      setFormErrors({ ...formErrors, ...validatePassword(valueObj, errors) });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  let errors = {};

  const validateEmail = (values, errors) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //Email Validation
    if (!values.useremail) {
      errors.useremail = "user email is required!";
    } else if (!regex.test(values.useremail)) {
      errors.useremail = "This is not a valid email format.";
    }
    return errors;
  };

  const validatePassword = (values, errors) => {
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const validate = (values) => {
    errors = validateEmail(values, errors);
    errors = validatePassword(values, errors);
    return errors;
  };

  return (
    <>
      <div className="login-form">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="signInConfirmation">Signed in successfully</div>
        ) : (
          <div className="text-center" style={{position: "absolute", top: "50%", left:"50%"}}></div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <h2 className="form-heading">log in</h2>
          <div className="form-content">
            <div className="form-group">
              <label htmlFor="user-email" className="input-labels">
                Email
              </label>
              <input
                type="email"
                className="form-control input-control"
                id="user-email"
                aria-describedby="emailHelp"
                placeholder="youremail@address.com"
                name="useremail"
                value={formValues.useremail}
                onChange={handleInputData}
                onBlur={handleFocusCheck}
              />
              <p className="form-error">{formErrors.useremail}</p>
            </div>
            <div className="form-group">
              <label htmlFor="user-password" className="input-labels">
                Password
              </label>
              <input
                type="password"
                className="form-control input-control"
                id="user-password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={handleInputData}
                onBlur={handleFocusCheck}
              />
              <p className="form-error">{formErrors.password}</p>
            </div>
            <div className="reset-link">
              <span>Forget password</span>
            </div>
            <div className="d-flex justify-content-center sbmtCont">
              <button className="submit-button" type="submit">
                Continue
              </button>
            </div>
            <div className="signup-link">
              <p>
                New to NeoSTORE?{" "}
                <span onClick={() => handlePageChange()}>Sign up</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
