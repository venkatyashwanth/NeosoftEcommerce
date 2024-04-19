import React from "react";
import "./HomePage.component.scss";
import NavigationPage from "../NavigationPage/NavigationPage.component";
import ProductCarousel from "../ProductCarousel/ProductCarousel.component";


function HomePage() {
  return (
    <>
      <div>
        <div className="shopping__alert">
          <p>
            MARKDOWNS:
            <span>
              UP TO 70% OFF <span className="link">SHOP NOW</span>
            </span>
          </p>
        </div>
        <NavigationPage />
      </div>
      <div>
        <ProductCarousel/>
      </div>
    </>
  );
}

export default HomePage;
