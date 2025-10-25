import React from 'react'
import Header from '../../component/Header'
import Herosection from '../herosection/Herosection'
import About from '../About/About'
import Ourservice from '../servicepage/Ourservice'
import Testimonials from '../Testimonies/Testimonials'
import Footer from '../../component/Footer'

const Homepage = () => {
  return (
    <>
     <Header/>
     <Herosection/>
     <About/>
     <Ourservice/>
     <Testimonials/>
     <Footer/>
    </>
  )
}

export default Homepage