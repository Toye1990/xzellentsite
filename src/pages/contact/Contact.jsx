
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

const Contact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handchange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createAct = async () => {
    try {
      const emptyfield = [];

      if (!formData.firstname.trim()) emptyfield.push("Your name");
      if (!formData.email.trim()) emptyfield.push("Email");
      if (!formData.phone.trim()) emptyfield.push("Phone number");
      if (!formData.message.trim()) emptyfield.push("Message");

      if (emptyfield.length > 0) {
        emptyfield.forEach((item) => toast.error(`${item} cannot be empty`));
        return;
      }

      const response = await axios.post(
        "https://xzellentwebbackend.onrender.com/api/v1/contact",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", response.data);
      toast.success("Message sent successfully!");
      navigate("/");
    } catch (err) {
      if (err.response) {
        toast.error(`${err.response.data.message || err.message}`);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <>
      <Header />

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            {/* Heading */}
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold text-primary mb-2">
                Contact Us
              </h1>
              <p className="lead text-muted">
                We'd love to hear from you — please fill out the form below.
              </p>
            </div>

            {/* Form */}
            <form
              id="contactForm"
              className="p-4 p-md-5 bg-white shadow-lg border border-light rounded-4 needs-validation"
              noValidate
            >
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="firstname"
                  className="form-label fw-semibold text-dark"
                >
                  Your Name
                </label>
                <div className="input-group input-group-lg shadow-sm">
                  <span className="input-group-text bg-light text-primary border-end-0 rounded-start-4">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control form-control-lg border-start-0"
                    name="firstname"
                    placeholder="Enter your name"
                    value={formData.firstname}
                    onChange={handchange}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label fw-semibold text-dark"
                >
                  Email Address
                </label>
                <div className="input-group input-group-lg shadow-sm">
                  <span className="input-group-text bg-light text-primary border-end-0">
                    <i className="bi bi-envelope-fill"></i>
                  </span>
                  <input
                    type="email"
                    id="email"
                    className="form-control form-control-lg border-start-0"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handchange}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="form-label fw-semibold text-dark"
                >
                  Phone Number
                </label>
                <div className="input-group input-group-lg shadow-sm">
                  <span className="input-group-text bg-light text-primary border-end-0">
                    <i className="bi bi-telephone-fill"></i>
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control form-control-lg border-start-0"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handchange}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="form-label fw-semibold text-dark"
                >
                  Message
                </label>
                <div className="input-group shadow-sm">
                  <span className="input-group-text bg-light text-primary border-end-0 rounded-start-4 align-items-start pt-3">
                    <i className="bi bi-chat-left-text-fill"></i>
                  </span>
                  <textarea
                    id="message"
                    className="form-control"
                    name="message"
                    rows="4"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={handchange}
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button
                  type="button"
                  onClick={createAct}
                  className="btn btn-primary btn-lg rounded-3 shadow-sm py-3 text-uppercase fw-bold"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

















/*import { useState, useContext } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Contact.css'
import Header from '../../component/Header'
import Footer from '../../component/Footer'

const Contact = () => {
 
 const navigate = useNavigate()
 //const {addUser, setMytoken} = ContextData()

  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    message:""
  })

 

  const handchange = (e) =>{
    const {name, value} = e.target;
    setFormData({
     ...formData,
      [name] : value
    })
  }

  const createAct = async() =>{
    try{
        const emptyfield = []

    if(!formData.firstname || formData.firstname.trim() === ""){
      emptyfield.push("your name")
    }

      if(!formData.email || formData.email.trim() === ""){
      emptyfield.push("email")
    }
    
      if(!formData.phone || formData.phone.trim() === ""){
      emptyfield.push("phone number")
    }

      if(!formData.message || formData.message.trim() === ""){
      emptyfield.push("type message")
    }

    if(emptyfield.length > 0){
      emptyfield.forEach((item)=>{
        toast.error(`${item} cannot be empty`)
      })

      return;
    }

const response =  await axios.post("http://localhost:5522/api/v1/contact", formData, {
  headers: { "Content-Type": "application/json" }
});

    /*const response =  await axios.post("https://nodecodarproject.onrender.com/api/v1/register", formData, {
  headers: { "Content-Type": "application/json" }
});*/

 /*  console.log("response:", response.data)
 
     toast.success("message sent successfully")
  navigate("/")
    
   
    }catch(err){
      if(err.response){
        console.log("Error response data:", err.response.data)
        console.log("Error response status:", err.response.status)
        console.log("Error response header:", err.response.headers)

        toast.error(` ${err.response.data.message} || ${err.message}`)
      }else{
        console.log("error:", err.message)
        toast.error("error occurred")
      }
    }
  
  }
*/


 /* return (


      <>
      <Header/>
 
     
     <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">

      
                <div className="text-center mb-5">
                    <h1 className="display-4 fw-bold text-primary mb-2">
                        Contact Us
                    </h1>
                    <p className="lead text-muted">
                        We'd love to hear from you — please fill out the form below.
                    </p>
                </div>

                <form id="contactForm" className="p-4 p-md-5 bg-white shadow-lg border border-light rounded-4 needs-validation" novalidate>
                    

                    <div className="mb-4">
                        <label htmlfor="firstname" className="form-label fw-semibold text-dark">Your Name</label>
                        <div className="input-group input-group-lg shadow-sm">
                            <span className="input-group-text bg-light text-primary border-end-0 rounded-start-4">
                                <i className="bi bi-person-fill"></i>
                            </span>
                            <input
                                type="text"
                                id="firstname"
                                className="form-control form-control-lg border-start-0"
                                name="firstname"
                                placeholder="Enter your name"
                                required
                                value={formData.firstname}
                                onChange={handchange}
                            />
                            <div className="invalid-feedback">Your name is required.</div>
                        </div>
                    </div>

 
                    <div className="mb-4">
                        <label htmlfor="email" className="form-label fw-semibold text-dark">Email Address</label>
                        <div clasNames="input-group input-group-lg shadow-sm">
                            <span className="input-group-text bg-light text-primary border-end-0">
                                <i className="bi bi-envelope-fill"></i>
                            </span>
                            <input
                                type="email"
                                id="email"
                                className="form-control form-control-lg border-start-0"
                                name="email"
                                placeholder="Enter your email"
                                required
                                  value={formData.email}
                                onChange={handchange}
                            />
                            <div className="invalid-feedback">A valid email address is required.</div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlfor="phone" className="form-label fw-semibold text-dark">Phone Number (Optional)</label>
                        <div className="input-group input-group-lg shadow-sm">
                            <span className="input-group-text bg-light text-primary border-end-0">
                                <i className="bi bi-telephone-fill"></i>
                            </span>
                            <input
                                type="tel"
                                id="phone"
                                className="form-control form-control-lg border-start-0"
                                name="phone"
                                placeholder="Enter your phone number"
                                  value={formData.phone}
                                onChange={handchange}
                            />
                        </div>
                    </div>


                    <div className="mb-5">
                        <label htmlfor="message" className="form-label fw-semibold text-dark">Message</label>
                        <div className="input-group shadow-sm">
                            <span className="input-group-text bg-light text-primary border-end-0 rounded-start-4 align-items-start pt-3">
                                <i className="bi bi-chat-left-text-fill"></i>
                            </span>
                            <textarea
                                id="message"
                                className="form-control"
                                name="message"
                                rows="4"
                                placeholder="Type your message here..."
                                required
                                  value={formData.message}
                                onChange={handchange}
                            ></textarea>
                            <div className="invalid-feedback">The message field is required.</div>
                        </div>
                    </div>

        
                    <div className="d-grid">
                        <div
                            type="submit"
                            id="submitButton"
                            onClick={createAct}
                            className="btn btn-primary btn-lg rounded-3 shadow-sm py-3 text-uppercase fw-bold"
                        >
                            Submit Message
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>


     <Footer/>
     </>
  )
}

export default Contact*/

