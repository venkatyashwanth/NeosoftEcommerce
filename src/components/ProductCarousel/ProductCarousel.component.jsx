import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./ProductCarousel.component.scss";

function ProductCarousel() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* 1 */}
      <SwiperSlide>
        <div className="slider-content">
          <div className="slider-title">
            <p>
              Furniture <span>2022</span>
            </p>
          </div>
          <p className="slider-text">NEW ARRIVALS</p>
          <h2>Spring<span>Collection</span></h2>
          <button className="shop-now-btn">Shop now</button>
        </div>
      </SwiperSlide>
      {/* 2 */}
      <SwiperSlide>
        <div className="slider-content"></div>
      </SwiperSlide>

      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default ProductCarousel;
