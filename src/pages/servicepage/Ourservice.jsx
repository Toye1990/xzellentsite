import React from "react";
import pic7 from "../../assets/images/solitebattery1.jpg";
import pic8 from "../../assets/images/pic8.png";
import pic9 from "../../assets/images/pic9.jpg";
import pic10 from "../../assets/images/pic10.jpg";
import pic11 from "../../assets/images/gen2.jpg";
import pic12 from "../../assets/images/genpart2.jpg";
import pic13 from "../../assets/images/genpart13.jpg";
import pic14 from "../../assets/images/solarwk1.jpg";
import pic15 from "../../assets/images/solarwk2.jpg";
import pic16 from "../../assets/images/solarwk3.jpg";
import pic17 from "../../assets/images/web2.jpg";
import pic18 from "../../assets/images/graphics2.jpg";
import pic19 from "../../assets/images/logistic3.jpg";
import tyre1 from "../../assets/images/tyrepic2.jpg"
import tyre2 from "../../assets/images/tyrepic3.jpg"
import tyre3 from "../../assets/images/tyrepic4.jpg"
import "./Ourservice.css";
import { Link } from "react-router-dom";

const Ourservice = () => {
  return (
    <div className="cardex">
      <h2 class="text-center mb-5 display-4 fw-bold text-primary">
        Our Services
      </h2>

      <div className="container my-5">

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {/* CARD 1 */}
          <div className="col d-flex align-items-stretch">
            <div className="card shadow-sm w-100">
              <div
                id="carouselProduct1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={pic7}
                      className="d-block w-100"
                      alt="Battery View 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={pic8}
                      className="d-block w-100"
                      alt="Battery View 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={pic9}
                      className="d-block w-100"
                      alt="Battery View 3"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselProduct1"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselProduct1"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">
                  Battery & Engine Oil Supply
                </h5>
                <p className="card-text text-muted flex-grow-1">
                  We sell quality batteries of different sizes and also supply
                  engine oils of different brands & grades.
                </p>
                <span className="badge bg-light text-dark mb-3">
                  Available Now
                </span>
                <Link to="/placeorder" className="btn btn-primary w-100 mt-auto">
                  Place Order
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col d-flex align-items-stretch">
            <div className="card shadow-sm w-100">
              <div
                id="carouselProduct2"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={pic11}
                      className="d-block w-100"
                      alt="Generator View 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={pic12}
                      className="d-block w-100"
                      alt="Generator View 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={pic13}
                      className="d-block w-100"
                      alt="Generator View 3"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselProduct2"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselProduct2"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">
                  Generator Sales & Genuine Parts
                </h5>
                <p className="card-text text-muted flex-grow-1">
                  We sell generators, provide maintenance services, and supply
                  genuine parts for Cummins, CAT, and Perkins generators.
                </p>
                <span className="badge bg-light text-dark mb-3">
                  Available Now
                </span>
                <Link to="/placeorder" className="btn btn-success w-100 mt-auto">
                  Place Order
                </Link>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col d-flex align-items-stretch">
            <div className="card shadow-sm w-100">
              <div
                id="carouselProduct3"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={tyre1}
                      className="d-block w-100"
                      alt="Solar View 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={tyre2}
                      className="d-block w-100"
                      alt="Solar View 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={tyre3}
                      className="d-block w-100"
                      alt="Solar View 3"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselProduct3"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselProduct3"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">
                  Truck & Car Tyre Supply
                </h5>
                <p className="card-text text-muted flex-grow-1">
                 We deliver top-grade, long-lasting tyres for cars and trucks, ensuring our 
                 customers enjoy safer, smoother, and more durable driving experiences.
                </p>
                <span className="badge bg-light text-dark mb-3">
                  Available Now
                </span>
                <Link to="/placeorder" className="btn btn-success w-100 mt-auto">
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        
          
          {/* CARD 4 */}
           <div className="col d-flex align-items-stretch">
            <div className="card shadow-sm w-100">
              <div
                id="carouselProduct3"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={pic16}
                      className="d-block w-100"
                      alt="Solar View 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={pic15}
                      className="d-block w-100"
                      alt="Solar View 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={pic14}
                      className="d-block w-100"
                      alt="Solar View 3"
                    />
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselProduct3"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselProduct3"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-dark">
                  Solar & Inverter Installation
                </h5>
                <p className="card-text text-muted flex-grow-1">
                  We offer inverter and solar installation, maintenance, and the
                  sale of batteries & solar panels.
                </p>
                <span className="badge bg-light text-dark mb-3">
                  Available Now
                </span>
                <Link to="/placeorder" className="btn btn-success w-100 mt-auto">
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="card-cover2">
      <h2 className="text-center mb-5 display-4 fw-normal text-primary">Other Services</h2>
        <div className="card-space2">
          <div class="card" style={{ width: 280 }}>
            <img src={pic17} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Web & Mobile development</h5>
              <p class="card-text">
               <span className="web">Web Development:</span> We design and develop custom, high-impact websites tailored to your business portfolio, ensuring your brand's quality and professionalism are brought to the forefront.
                 <div><span className="web">Mobile Development:</span> We build innovative, user-friendly mobile applications with cutting-edge functionalities that drive engagement and solve real-world problems.</div>
              </p>
            
              <a href="#" class="btn btn-primary">
                contact us now
              </a>
            </div>
          </div>

          <div class="card" style={{ width: 280 }}>
            <img src={pic18} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Graphic designs & Branding</h5>
              <p class="card-text">
                 <span className="web">Graphic Designs:</span>We deliver iconic and high-impact graphic designs 
                 for all your marketing collateral, presentations, and digital assets. Our designs are custom-crafted to ensure your
                  message is clear and visually unforgettable. 
                  <div><span className="web">Branding:</span>We establish the foundation of your market presence by creating a cohesive and 
                  powerful brand identity. </div>
              </p>
              <a href="#" class="btn btn-primary">
               contact us now
              </a>
            </div>
          </div>

          <div class="card" style={{ width: 280 }}>
            <img src={pic19} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Logistics Services</h5>
              <p class="card-text">
               Nationwide Logistics, Delivered Swiftly. You can rely on Xzellent Solutions for the safe and prompt delivery of your items across every state in Nigeria. We guarantee reliable, time-efficient service.
               <div>Count on our swift and dependable network to ensure your items are delivered to any state, securely and on schedule.</div>
              </p>
              <a href="#" class="btn btn-primary">
                contact us now
              </a>
            </div>
          </div>
        </div>
      </div>*/}

      <div className="container my-5">
        <h2 className="text-center mb-5 display-5 fw-bold text-primary">
          Other Services
        </h2>

        <div className="row g-4">
          {/* Web & Mobile Development */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={pic17}
                className="card-img-top"
                alt="Web & Mobile Development"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Web & Mobile Development</h5>
                <p className="card-text flex-grow-1">
                  <span className="fw-bold">Web Development:</span> We design
                  and develop custom, high-impact websites tailored to your
                  business portfolio, ensuring your brand's quality and
                  professionalism are brought to the forefront.
                  <div>
                    <span className="fw-bold">Mobile Development:</span> We
                    build innovative, user-friendly mobile applications with
                    cutting-edge functionalities that drive engagement and solve
                    real-world problems.
                  </div>
                </p>
                <Link to="/contact" className="btn btn-primary mt-auto">
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>

          {/* Graphic Designs & Branding */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={pic18}
                className="card-img-top"
                alt="Graphic Designs & Branding"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Graphic Designs & Branding</h5>
                <p className="card-text flex-grow-1">
                  <span className="fw-bold">Graphic Designs:</span> We deliver
                  iconic and high-impact designs for your marketing collateral,
                  presentations, and digital assets.
                  <div>
                    <span className="fw-bold">Branding:</span> We create a
                    cohesive and powerful brand identity that strengthens your
                    market presence.
                  </div>
                </p>
                <Link to="/contact" className="btn btn-primary mt-auto">
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>

          {/* Logistics Services */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <img
                src={pic19}
                className="card-img-top"
                alt="Logistics Services"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Logistics Services</h5>
                <p className="card-text flex-grow-1">
                  Nationwide Logistics, Delivered Swiftly. You can rely on
                  Xzellent Solutions for the safe and prompt delivery of your
                  items across every state in Nigeria.
                  <div>
                    Count on our dependable network to ensure your items are
                    delivered securely and on schedule.
                  </div>
                </p>
                <Link to="/contact" className="btn btn-primary mt-auto">
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
