import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationPage.component.scss";
import LoginPage from "../LoginPage/LoginPage.component";
import SignUpPage from "../SignUpPage/SignUpPage.component";

// image-imports
import twoFactorImg from "./images/two-factor-authentication.png";

function RegistrationPage() {
  const [action, setAction] = useState(true);
  const navigate = useNavigate();

  const handlePageChange = () => {
    setAction((prevAction) => !prevAction);
  };

  return (
    <>
      <section className="registration__page">
        <div className="shopping__alert">
          <p>
            MARKDOWNS:
            <span>
              UP TO 70% OFF <span className="link">SHOP NOW</span>
            </span>
          </p>
        </div>
        <div className="registration__page-interface">
          <div className="container">
            <div className="row">
              <h2
              onClick={
                () => {
                  navigate("/");
                }
              }
              className="brand-name">
                neo<span>store</span>
              </h2>
              <div className=" d-none d-lg-flex flex-lg-column justify-content-center col-lg-6">
                <div className="imageWrapper authImage">
                  <img src={twoFactorImg} alt="two-factor" />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                {action ? (
                  <LoginPage handlePageChange={handlePageChange} />
                ) : (
                  <SignUpPage handlePageChange={handlePageChange} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RegistrationPage;
