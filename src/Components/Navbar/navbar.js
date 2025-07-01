import React, {  useState } from "react";
import Navstyle from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setThemes } from "../Redux/themeslice";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  const isBlurred = useSelector((state) => state.blur.isBlurred);

  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const onHandletheme = () => {
    let mytheme = document.getElementById("light");
    if (mytheme) {
      mytheme.classList.toggle(`${Navstyle.dark_theme}`);
      setTheme(!theme);
      dispatch(setThemes(!theme))
      localStorage.setItem("theme", JSON.stringify({ theme: !theme }));
    }
    console.log("dark");
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top ${
          isBlurred
            ? theme
              ? Navstyle.blur_dark
              : Navstyle.blur
            : theme
            ? Navstyle.navbar_dark
            : Navstyle.navbar
        }`}
      >
        <div className="container">
          <Link to={"/"} className={`navbar-brand fs-3 fw-semibold`}>
            <p
              className={`m-0 ${
                theme ? Navstyle.navbar_brand_dark : Navstyle.navbar_brand
              }`}
            >
              <i className="fa-duotone fa-regular fa-pen-nib"></i> Praveenkumar
            </p>
          </Link>
          <button
            className={`d-lg-none ${theme?Navstyle.nav_toggle_btn_dark:Navstyle.nav_toggle_btn}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="fs-3">
              <i className={`fa-solid ${isOpen ? "fa-times" : "fa-bars"}`}></i>
            </span>
          </button>
          <div
            className={`collapse navbar-collapse d-lg-flex justify-content-lg-end`}
            id="navbarNav"
          >
            <ul className="navbar-nav fs-5 fw-semibold d-flex align-items-center">
              <li className={`nav-item me-3`}>
                <Link to={"/"} className={`nav-link`} aria-current="page">
                  <p
                    className={`m-0 ${
                      theme ? Navstyle.navbar_text_dark : Navstyle.navbar_text
                    }`}
                  >
                    <i className="fa-duotone fa-solid fa-house"></i> Home
                  </p>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to={"/about"} className={`nav-link`}>
                  <p
                    className={`m-0  ${
                      theme ? Navstyle.navbar_text_dark : Navstyle.navbar_text
                    }`}
                  >
                    <i className="fa-duotone fa-solid fa-user"></i> About
                  </p>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to={"/project"} className={`nav-link`}>
                  <p
                    className={`m-0  ${
                      theme ? Navstyle.navbar_text_dark : Navstyle.navbar_text
                    }`}
                  >
                    <i className="fa-duotone fa-solid fa-diagram-project"></i>{" "}
                    Project
                  </p>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to={"/resume"} className={`nav-link`}>
                  <p
                    className={`m-0  ${
                      theme ? Navstyle.navbar_text_dark : Navstyle.navbar_text
                    }`}
                  >
                    <i className="fa-regular fa-file-lines"></i> Resume
                  </p>
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link to={"/contact"} className={`nav-link`}>
                  <p
                    className={`m-0  ${
                      theme ? Navstyle.navbar_text_dark : Navstyle.navbar_text
                    }`}
                  >
                    <i className="fa-duotone fa-solid fa-address-book"></i>{" "}
                    Contact
                  </p>
                </Link>
              </li>
              <div className="d-flex">
                <li className="nav-item me-3">
                  <Link to={"https://github.com/Praveenkumark17"} target="_blank" rel="noopener noreferrer" className={`nav-link ${Navstyle.navbar_text}`}>
                    <p
                      className={`m-0  ${
                        theme ? Navstyle.navbar_text_dark : Navstyle.navbar_text
                      }`}
                    >
                      <i class="fa-brands fa-github"></i>
                    </p>
                  </Link>
                </li>
                <li className="nav-item me-3">
                  <Link to={"https://www.behance.net/praveenkrish5"} target="_blank" rel="noopener noreferrer" className={`nav-link ${Navstyle.navbar_text}`}>
                    <p
                      className={`m-0  ${
                        theme ? Navstyle.navbar_text_dark : Navstyle.navbar_text
                      }`}
                    >
                      <i class="fa-brands fa-square-behance"></i>
                    </p>
                  </Link>
                </li>
              </div>
              <li className="nav-item">
                <div className="d-flex align-items-center">
                  <p
                    className={`d-lg-none m-0 me-3 ${
                      theme ? Navstyle.navbar_text_dark : Navstyle.navbar_text
                    }`}
                  >
                    Theme:
                  </p>
                  <div className={Navstyle.outer_theme} onClick={onHandletheme}>
                    <div className={Navstyle.inner_theme} id="light">
                      <i
                        className={`fa-solid ${theme ? `fa-sun` : `fa-moon`}`}
                      ></i>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
