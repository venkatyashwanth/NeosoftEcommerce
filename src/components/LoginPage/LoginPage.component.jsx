import React from "react";
import "./LoginPage.component.scss";

function LoginPage(props) {
  const {handlePageChange} = props;

  return (
    <>
      <div className="login-form">
        <form>
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
              />
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
              />
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
                New to NeoSTORE? <span onClick={() => handlePageChange()}>Sign up</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
