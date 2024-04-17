import React from "react";
import "./SignUpPage.component.scss";

function SignUpPage(props) {
  const { handlePageChange } = props;

  return (
    <>
      <div className="signUp-form">
        <form>
          <h2 className="form-heading">sign up</h2>
          <div className="form-content">
            <p className="common-label">New Account Register</p>
            <div className="form-group">
              <input
                type="text"
                className="form-control input-control"
                id="user-firstname"
                placeholder="First Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control input-control"
                id="user-lastname"
                placeholder="Last Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control input-control"
                id="user-providedEmail"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control input-control"
                id="user-providedPassword"
                placeholder="Password"
              />
            </div>
            <div className="tnc-agreement">
              <input type="checkbox" id="tnc-checkbox"/>
              <label htmlFor="tnc-checkbox">I agree to the terms and conditions.</label>
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
