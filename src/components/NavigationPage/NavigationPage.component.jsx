import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavigationPage.component.scss";

function NavigationPage() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navigation-menu">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="brand-name">
                  neo<span>store</span>
                </h2>
                <ul className="nav-list">
                  <li className="nav-item">Home</li>
                  <li className="nav-item">Furniture</li>
                  <li className="nav-item">Home Decor</li>
                  <li className="nav-item">Blog</li>
                  <li className="nav-item">Sale</li>
                  <li className="nav-item">More</li>
                </ul>
                <div className="d-flex align-items-center">
                  <div className="search-box">
                    <input type="text" placeholder="search..." />
                    <span className="icon-magnifier ns-icon"></span>
                  </div>
                  <ul className="utility-list">
                    <li
                      className="utility-item"
                      onClick={() => {
                        navigate("/registration");
                      }}
                    >
                      <span class="icon-user ns-icon"></span>
                    </li>
                    <li className="utility-item">
                      <span className="icon-heart ns-icon"></span>
                    </li>
                    <li className="utility-item">
                      <span className="icon-cart ns-icon"></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavigationPage;
