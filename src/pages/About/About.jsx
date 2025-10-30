import React from 'react'
import pic6 from '../../assets/images/pic6.jpg'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <section class="py-5" id="about-us">
    <div class="container my-5">
        <h2 class="text-center mb-5 display-4 fw-bold text-primary">About us</h2>
        
        <div class="row align-items-center mb-5">
            
            <div class="col-lg-6 order-lg-1 order-2">
                <p class="lead">
                    "For seven years, Xzellent Solutions—starting as Excellent Stores—has built a reputation as a trusted and reliable partner. Our longevity is a testament to our known record of excellence and unwavering quality. We are dedicated to customer delight, treating every client relationship with the highest respect. We don't just aim for service; we guarantee satisfaction, ensuring that every engagement delivers the value and outstanding results our customers expect."
                </p>
                <Link to="/products" class="btn btn-primary btn-lg mt-3 buttoncenter">Learn more</Link>
            </div>

            <div class="col-lg-6 order-lg-2 order-1 mb-4 mb-lg-0">
                <img src={pic6} class="img-fluid rounded shadow-lg" alt="Team members collaborating in an office setting."/>
            </div>
        </div>

        <hr class="my-5"/>

        <h3 class="text-center mb-4 text-secondary">Our Impact</h3>
        <div class="row text-center g-4">
            
            <div class="col-md-4">
                <div class="card p-4 border-0 shadow-sm h-100">
                    <div class="card-body">
                        <i class="bi bi-people-fill display-4 text-success"></i>
                        <h4 class="card-title mt-3 cardtext">7+ Years</h4>
                        <p class="card-text text-muted">In Business, delivering quality service.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card p-4 border-0 shadow-sm h-100">
                    <div class="card-body">
                        <i class="bi bi-globe2 display-4 text-warning"></i>
                        <h4 class="card-title mt-3 cardtext">25+ states</h4>
                        <p class="card-text text-muted">Served by our distributed team.</p>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card p-4 border-0 shadow-sm h-100">
                    <div class="card-body">
                        <i class="bi bi-lightning-charge-fill display-4 text-danger"></i>
                        <h4 class="card-title mt-3 cardtext">99.9% Uptime</h4>
                        <p class="card-text text-muted">Guaranteed platform availability.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</section>
    </div>
  )
}

export default About