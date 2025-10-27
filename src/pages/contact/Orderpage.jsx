
import React, { useState } from "react";
import "./Contact.css";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Orderpage = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    phone: "",
    producttype: "",
    description: "",
  });

  const handchange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const buttonFunction = async (e) => {
    e.preventDefault(); // 🔥 stop page reload

    try {
      const emptyFields = [];

      if (!formData.firstname.trim()) emptyFields.push("Your name");
      if (!formData.email.trim()) emptyFields.push("Email");
      if (!formData.phone.trim()) emptyFields.push("Phone number");
      if (!formData.producttype.trim()) emptyFields.push("Product type");
      if (!formData.description.trim()) emptyFields.push("Description");

      if (emptyFields.length > 0) {
        emptyFields.forEach((item) => toast.error(`${item} cannot be empty`));
        return;
      }

      const response = await axios.post(
        "http://xzellentwebbackend.onrender.com/api/v1/productrequest",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("response", response.data);
      toast.success("Message delivered successfully!");
      setFormData({
        firstname: "",
        email: "",
        phone: "",
        producttype: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      if (err.response && err.response.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Unexpected error occurred");
      }
    }
  };

  return (
    <>
      <Header />
      <Toaster position="top-center" /> {/* ✅ Required for toast */}
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold text-primary mb-2">Place Your Order</h1>
              <p className="lead text-muted">
                Thanks for choosing us — Please fill out the form below.
              </p>
            </div>

            <form
              id="contactForm"
              className="p-4 p-md-5 bg-white shadow-lg border border-light rounded-4"
            >
              {/* Name */}
              <div className="mb-4">
                <label htmlFor="firstname" className="form-label fw-semibold text-dark">
                  Your Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  className="form-control"
                  name="firstname"
                  placeholder="Enter your name"
                  value={formData.firstname}
                  onChange={handchange}
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="form-label fw-semibold text-dark">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handchange}
                />
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label htmlFor="phone" className="form-label fw-semibold text-dark">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handchange}
                />
              </div>

              {/* Product Type */}
              <div className="mb-4">
                <label htmlFor="producttype" className="form-label fw-semibold text-dark">
                  Product Type
                </label>
                <input
                  type="text"
                  id="producttype"
                  className="form-control"
                  name="producttype"
                  placeholder="Tell us the product you need"
                  value={formData.producttype}
                  onChange={handchange}
                />
              </div>

              {/* Message */}
              <div className="mb-5">
                <label htmlFor="description" className="form-label fw-semibold text-dark">
                  Message
                </label>
                <textarea
                  id="description"
                  className="form-control"
                  name="description"
                  rows="4"
                  placeholder="Short description of the product you need"
                  value={formData.description}
                  onChange={handchange}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="d-grid">
                <button
                  type="submit"
                  id="submitButton"
                  className="btn btn-primary btn-lg rounded-3"
                  onClick={buttonFunction}
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

export default Orderpage;
