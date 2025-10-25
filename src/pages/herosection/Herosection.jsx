import React from "react";
import pic1 from "../../assets/images/xzellentcarousel1.jpg";
import pic2 from "../../assets/images/xzellentcarousel2.jpg";
import pic3 from "../../assets/images/xzellentcarousel3.jpg";
import "./Hero.css";

const Herosection = () => {
  return (
    <>
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide caro"
        data-bs-touch="true"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={pic1}
              class="d-block w-100 img-fluid rounded pix"
              alt="Slide 1"
            />
          </div>

          <div class="carousel-item">
            <img
              src={pic2}
              class="d-block w-100 img-fluid rounded pix"
              alt="Slide 2"
            />
          </div>

          <div class="carousel-item">
            <img
              src={pic3}
              class="d-block w-100 img-fluid rounded pix"
              alt="Slide 3"
            />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Herosection;
