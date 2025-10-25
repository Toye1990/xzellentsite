import React from 'react'
import './Header.css'

const Footer = () => {
  return (
    <div>
<footer class="footer bg-light py-5">
  <div class="container">
    <div class="row gy-4">

      <div class="col-12 col-md-6 col-lg-3">
        <h5 class="fw-bold text-primary footer-textname">Xzellent Solutions</h5>
        <p class="text-muted small">
          Reliability and excellence in digital solutions, design, and logistics across Nigeria for over 7 years. 
          <strong>Customer Delight Guaranteed.</strong>
        </p>
      </div>


      <div class="col-6 col-md-3 col-lg-2">
        <h6 class="fw-semibold text-dark">Quick Links</h6>
        <ul class="list-unstyled small">
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Home</a></li>
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">About Us</a></li>
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Our Services</a></li>
          <li><a href="#" class="text-muted text-decoration-none">Testimonials</a></li>
        </ul>
      </div>


      <div class="col-6 col-md-3 col-lg-3">
        <h6 class="fw-semibold text-dark">Our Services</h6>
        <ul class="list-unstyled small">
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Web & Mobile Dev</a></li>
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Graphic Design</a></li>
          <li class="mb-2"><a href="#" class="text-muted text-decoration-none">Branding Strategy</a></li>
          <li><a href="#" class="text-muted text-decoration-none">Logistics Services</a></li>
        </ul>
      </div>


      <div class="col-12 col-md-6 col-lg-4">
        <h6 class="fw-semibold text-dark">Connect With Us</h6>
        <p class="mb-2 small">
          <i class="bi bi-pin-map-fill text-primary me-2"></i> Lagos, Nigeria
        </p>
        <p class="mb-4 small">
          <i class="bi bi-envelope-fill text-primary me-2"></i> xzellentservices@gmail.com
        </p>

        <div class="d-flex gap-3">
          <a href="#" class="social-icon text-primary fs-5"><i class="bi bi-facebook"></i></a>
          <a href="#" class="social-icon text-primary fs-5"><i class="bi bi-twitter"></i></a>
          <a href="#" class="social-icon text-primary fs-5"><i class="bi bi-instagram"></i></a>
          <a href="#" class="social-icon text-primary fs-5"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
    </div>

    <hr class="mt-5 mb-3 text-secondary" />

    <div class="row align-items-center text-center text-md-start">
      <div class="col-md-6 mb-2 mb-md-0">
        <small class="text-muted">&copy; 2024 Xzellent Solutions. All rights reserved.</small>
      </div>
      <div class="col-md-6 text-center text-md-end">
        <small>
          <a href="#" class="text-muted text-decoration-none me-3">Privacy Policy</a>
          <a href="#" class="text-muted text-decoration-none">Terms of Service</a>
        </small>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer