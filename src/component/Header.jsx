import React, { useState } from "react";
import { Link } from "react-router-dom";
import mylogo from "../assets/images/xzellentlogo.png";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    // Convert input to lowercase
    const term = searchTerm.toLowerCase();

    // Try to find an element that matches the search term by ID or text
    const allSections = document.querySelectorAll("section, div, h1, h2, h3, p, span");
    let found = false;

    allSections.forEach((el) => {
      if (el.textContent.toLowerCase().includes(term)) {
        found = true;

        // Scroll to the element
        el.scrollIntoView({ behavior: "smooth", block: "center" });

        // Highlight it temporarily
        el.style.backgroundColor = "yellow";
        setTimeout(() => {
          el.style.backgroundColor = "";
        }, 8000);
      }
    });

    if (!found) {
      alert("No matching content found on this page.");
    }
  };

  return (
    <>
      <div className="header">
        <div className="navbar-outer">
          <nav className="navbar navbar-expand-lg navbar-dark bg-darkblue sticky-top">
            <div className="container-fluid cut">
              <Link to="/" className="navbar-brand">
                <img className="logosize" src={mylogo} alt="logo" />
              </Link>
              <div className="companyname">Xzellent Solutions</div>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/products" className="nav-link">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>

                <form className="d-flex" role="search" onSubmit={handleSearch}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search content..."
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>

                <ul className="navbar-nav ms-2">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-cart"></i> Cart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
