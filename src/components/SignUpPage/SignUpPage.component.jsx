import React, { useState } from "react";
import "./SignUpPage.component.scss";

function SignUpPage(props) {
  const { handlePageChange } = props;

  const initialValues = {
    firstName: "",
    lastName: "",
    emailInfo: "",
    password: "",
    tncCheck: false,
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputData = (e) => {
    let { name, value } = e.target;
    if (name === "tncCheck") {
      value = e.target.checked;
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFocusCheck = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      let valueObj = { firstName: value };
      setFormErrors({ ...formErrors, ...validateFirstName(valueObj, errors) });
    }
    if (name === "lastName") {
      let valueObj = { lastName: value };
      setFormErrors({ ...formErrors, ...validateLastName(valueObj, errors) });
    }
    if (name === "emailInfo") {
      let valueObj = { emailInfo: value };
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

  const validateFirstName = (values, errors) => {
    if (!values.firstName) {
      errors.firstName = "please enter your First Name";
    }
    // else {
    //   errors.firstName = "";
    // }
    return errors;
  };

  const validateLastName = (values, errors) => {
    if (!values.lastName) {
      errors.lastName = "please enter your Last Name";
    }
    // else {
    //   errors.lastName = "";
    // }
    return errors;
  };

  const validateEmail = (values, errors) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //Email Validation
    if (!values.emailInfo) {
      errors.emailInfo = "user email is required!";
    } else if (!regex.test(values.emailInfo)) {
      errors.emailInfo = "This is not a valid email format.";
    }
    // else {
    //   errors.emailInfo = "";
    // }
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
    // else {
    //   errors.password = "";
    // }
    return errors;
  };

  const validateCheckBox = (values, errors) => {
    console.log(values);
    if (!values.tncCheck) {
      errors.tnc = "please check the box";
    }
    return errors;
  };

  const validate = (values) => {
    errors = validateFirstName(values, errors);
    errors = validateLastName(values, errors);
    errors = validateEmail(values, errors);
    errors = validatePassword(values, errors);
    errors = validateCheckBox(values, errors);
    return errors;
  };

  return (
    <>
      <div className="signUp-form">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="signUpConfirmation">Signed in successfully</div>
        ) : (
          <div></div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <h2 className="form-heading">sign up</h2>
          <div className="form-content">
            <p className="common-label">New Account Register</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control input-control"
                id="user-firstname"
                placeholder="First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={handleInputData}
                onBlur={handleFocusCheck}
              />
              <p className="form-error">{formErrors.firstName}</p>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control input-control"
                id="user-lastname"
                placeholder="Last Name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleInputData}
                onBlur={handleFocusCheck}
              />
              <p className="form-error">{formErrors.lastName}</p>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control input-control"
                id="user-providedEmail"
                placeholder="Email Address"
                name="emailInfo"
                value={formValues.emailInfo}
                onChange={handleInputData}
                onBlur={handleFocusCheck}
              />
              <p className="form-error">{formErrors.emailInfo}</p>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control input-control"
                id="user-providedPassword"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={handleInputData}
                onBlur={handleFocusCheck}
              />
              <p className="form-error">{formErrors.password}</p>
            </div>
            <div className="tnc-agreement">
              <input
                type="checkbox"
                name="tncCheck"
                defaultChecked={formValues.tncCheck}
                onChange={handleInputData}
                id="tnc-checkbox"
              />
              <label htmlFor="tnc-checkbox">
                I agree to the terms and conditions.
              </label>
              <p className="form-error">{formErrors.tnc}</p>
            </div>
            <div className="d-flex justify-content-center sbmtCont">
              <button className="submit-button" type="submit">
                Continue
              </button>
            </div>
            <div className="login-link">
              <p>
                Already have an account?{" "}
                <span onClick={() => handlePageChange()}>Log In</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
