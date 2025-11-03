
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Contact.css";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Buttonloading from "../../component/buttonLoader/Buttonloading";

const Contact = () => {
  const navigate = useNavigate();

   const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      const emptyfield = [];

      if (!formData.firstname.trim()) emptyfield.push("Your name");
      if (!formData.email.trim()) emptyfield.push("Email");
      if (!formData.phone.trim()) emptyfield.push("Phone number");
      if (!formData.message.trim()) emptyfield.push("Message");

      if (emptyfield.length > 0) {
        emptyfield.forEach((item) => toast.error(`${item} cannot be empty`));
        setLoading(false);
        return;
      }

      const response = await axios.post(
        "https://xzellentwebbackend.onrender.com/api/v1/contact",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Response:", response.data);
      toast.success("Message sent successfully!");
      setLoading(false);
      navigate("/");
    } catch (err) {
      if (err.response) {
        toast.error(`${err.response.data.message || err.message}`);
      } else {
        toast.error("An unexpected error occurred");
      }
      setLoading(false);
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

              
              {loading ? (
              <div className="d-grid">
                <button
                  type="button"
                  className="btn btn-primary btn-lg rounded-3 shadow-sm py-3 text-uppercase fw-bold"
                >
                 <Buttonloading/>
                </button>
              </div>
              ) : (
                 <div className="d-grid">
                <button
                  type="button"
                  onClick={createAct}
                  className="btn btn-primary btn-lg rounded-3 shadow-sm py-3 text-uppercase fw-bold"
                >
                  Submit Message
                </button>
              </div>
              )}

             {/*<div className="d-grid">
                <button
                  type="button"
                  onClick={createAct}
                  className="btn btn-primary btn-lg rounded-3 shadow-sm py-3 text-uppercase fw-bold"
                >
                  Submit Message
                </button>
              </div>*/}
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;















