import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <p className="navbar-brand" style={{ cursor: "pointer" }}>
          <i className="fs-2 bi bi-currency-exchange ms-5"></i>
        </p>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-4">
              <Link to="/">Converter</Link>
            </li>
            <li className="nav-item ms-4">
              <Link to="/current-exchange-rate">Exchange Rate</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
