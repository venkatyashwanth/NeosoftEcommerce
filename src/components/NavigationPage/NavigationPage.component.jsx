import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationPage() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navigation-menu">
        <h2 className="brand-name">
          neo<span>store</span>
        </h2>
        <ul>
          <li
            onClick={() => {
              navigate("/registration");
            }}
          >
            Register Page
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavigationPage;
