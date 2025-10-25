import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div>
        <section class="py-5 bg-white" id="testimonials-section">
    <div class="container my-5 ">
     <div className='test-flex'>
        <div class="row text-center mb-5">
            <div class="col-lg-8 mx-auto">
                <h2 class="display-5 fw-bold text-primary set">Testimonials</h2>
                <p class="lead text-muted set1">Hear directly from our satisfied partners about the Xzellent difference.</p>
            </div>
            </div>
        </div>

       {/* <!-- Testimonials Grid Row -->
        <!-- Key Responsiveness: 
             1. row-cols-1: 1 card per row on extra small screens (mobile)
             2. row-cols-sm-2: 2 cards per row on small screens (tablets)
             3. row-cols-lg-3: 3 cards per row on large screens (laptops)
             4. row-cols-xl-4: 4 cards per row on extra large screens (desktops)
             5. g-4: Provides spacing (gutters) between cards
        -->*/}
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-4">
            
            {/*<!-- Testimonial Card 1 -->*/}
            <div class="col d-flex align-items-stretch">
                <div class="card testimonial-card w-100 p-3">
                    <div class="card-body d-flex flex-column">
                        <i class="bi bi-quote quote-icon"></i>
                        <div class="rating-stars mb-3">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                        <p class="card-text flex-grow-1">"Xzellent sell good and reliable and their response is fast and swift"</p>
                        <div class="mt-auto pt-3 border-top">
                            <h6 class="mb-0 fw-bold text-primary">Aisha M.</h6>
                            <small class="text-muted">Procurement Officer Globalway Ltd</small>
                        </div>
                    </div>
                </div>
            </div>
      {/*<!-- Testimonial Card 2 -->*/}
            <div class="col d-flex align-items-stretch">
                <div class="card testimonial-card w-100 p-3">
                    <div class="card-body d-flex flex-column">
                        <i class="bi bi-quote quote-icon"></i>
                        <div class="rating-stars mb-3">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i>
                        </div>
                        <p class="card-text flex-grow-1">""We are genuinely impressed with the level of service and quality delivered by Xzellent. Their products are consistently reliable and robust."</p>
                        <div class="mt-auto pt-3 border-top">
                            <h6 class="mb-0 fw-bold text-primary">Kwame N.</h6>
                            <small class="text-muted">Marketing Director, Africa Prints</small>
                        </div>
                    </div>
                </div>
            </div>

                  {/*<!-- Testimonial Card 3 -->*/}
            <div class="col d-flex align-items-stretch">
                <div class="card testimonial-card w-100 p-3">
                    <div class="card-body d-flex flex-column">
                        <i class="bi bi-quote quote-icon"></i>
                        <div class="rating-stars mb-3">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                        <p class="card-text flex-grow-1">"Flawless mobile app build. The innovative functionalities have given us a clear edge in the market."</p>
                        <div class="mt-auto pt-3 border-top">
                            <h6 class="mb-0 fw-bold text-primary">Chioma O.</h6>
                            <small class="text-muted">E-commerce Founder</small>
                        </div>
                    </div>
                </div>
            </div>

                 {/*<!-- Testimonial Card 4 -->*/}
            <div class="col d-flex align-items-stretch">
                <div class="card testimonial-card w-100 p-3">
                    <div class="card-body d-flex flex-column">
                        <i class="bi bi-quote quote-icon"></i>
                        <div class="rating-stars mb-3">
                            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
                        </div>
                        <p class="card-text flex-grow-1">"Their logistics service is incredibly swift and reliable. Delivery to Abuja was faster than expected. Highly recommend!"</p>
                        <div class="mt-auto pt-3 border-top">
                            <h6 class="mb-0 fw-bold text-primary">James E.</h6>
                            <small class="text-muted">Retail Manager</small>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    </div>
</section>

    </div>
  )
}

export default Testimonials