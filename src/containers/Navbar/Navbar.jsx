import React from "react";
import navbarJson from "../../json/Navbar.json";
import logo from "../../images/tt1.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black p-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navbarJson.map((navbar) => {
                return (
                  <li className={navbar.li}>
                    <a className={navbar.a} aria-current="page" href={navbar.href}>
                      {navbar.contents}{" "}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
