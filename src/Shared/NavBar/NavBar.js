import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import TopNavBar from "./TopNavBar";
import { NavHashLink } from 'react-router-hash-link';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TopNavBar />
      <header
        className={`shadow-md font-Rubik sticky top-0 left-0 w-full z-50`}
      >
        <nav className="bg-white shadow">
          <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <div>
                <Link
                  className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform lg:text-3xl hover:text-gray-700"
                  to="/"
                >
                  <img
                    className="w-[80%]"
                    src={require("../../Assets/Images/logo.png")}
                    alt="logo"
                  />
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="toggle menu"
                  onClick={() => setOpen(!open)}
                >
                  <FiMenu />
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`items-center md:flex mt-5 ${open ? "hidden" : ""}`}
            >
              <div className="flex flex-col md:flex-row md:mx-6 items-start md:items-center">
                <NavLink
                  className={({isActive})=> isActive ? "nav-item text-primary" : " nav-item"}
                  to="/"
                  onClick={() => setOpen(!open)}
                >
                  Home
                </NavLink>
                <NavHashLink
                  className={({isActive})=> isActive ? "nav-item text-primary" : " nav-item"}
                  to="/services#ourServices"
                  onClick={() => setOpen(!open)}
                >
                  Services
                </NavHashLink>
                <NavLink
                  className={({isActive})=> isActive ? "nav-item text-primary" : " nav-item"}
                  to="/servicesArea"
                  onClick={() => setOpen(!open)}
                >
                  Services Area
                </NavLink>
                <NavHashLink
                  className={({isActive})=> isActive ? "nav-item text-primary" : " nav-item"}
                  to="/pricing#pricing"
                  onClick={() => setOpen(!open)}
                >
                  Pricing
                </NavHashLink>
                <NavLink
                  className={({isActive})=> isActive ? "nav-item text-primary" : " nav-item"}
                  to="/contact"
                  onClick={() => setOpen(!open)}
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setOpen(!open)}
                  className="nav-btn group mr-0 md:mr-5 mt-5 md:mt-0 w-full md:w-auto text-center"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-20 ease"></span>
                  <span className="relative">Register</span>
                </NavLink>
                <NavLink
                  to="/login"
                  onClick={() => setOpen(!open)}
                  className="nav-btn group mt-5 md:mt-0 w-full md:w-auto text-center"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-20 ease"></span>
                  <span className="relative">Login</span>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
