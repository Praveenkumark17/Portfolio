import React from "react";
import home_style from "./home.module.css";
import { useSelector } from "react-redux";

export default function Home() {
  const theme = useSelector((state) => state.theme.isTheme);

  return (
    <>
      <div
        className={theme ? home_style.home_color_dark : home_style.home_color}
      >
        <div className="container">
          <div className={`${home_style.intro_name}`}>
            <div className={`row`}>
              <div className="col-lg-5 col-sm-12 d-flex justify-content-center text-center text-sm-center text-lg-start flex-column">
                <div className={`ms-lg-5`}>
                  <h1 className={`${home_style.intro_title}`}>Hello There!!</h1>
                  <h1 className={`${home_style.intro_title}`}>
                    I'M{" "}
                    <span className={`${home_style.name}`}>Praveenkumar K</span>
                  </h1>
                  <h1 className={`${home_style.name} ${home_style.intro_title} mt-5`}>
                    Junior Developer
                  </h1>
                </div>
              </div>
              <div className="col-lg-7 col-sm-12 d-flex justify-content-center">
                <div
                  className={
                    theme ? home_style.home_img_dark : home_style.home_img
                  }
                ></div>
              </div>
            </div>
          </div>
          <div className={`${home_style.intro_myself}`}>
            <div className="row">
              <div className="col-lg-8 col-12">
                <h1 className={`text-center mb-5 ${home_style.intro_title}`}>
                  LET ME INTRODUCE{" "}
                  <span className={`${home_style.name}`}>MYSELF</span>
                </h1>
                <div className={`fw-semibold ${home_style.intro_content}`}>
                  <p >
                    My journey into programming has been a{" "}
                    <span className={`${home_style.name}`}>
                      thrilling adventure
                    </span>
                    , and I've picked up quite a few skills along the way, I
                    believe... 😊
                  </p>
                  <p >
                    <span className={`${home_style.name}`}>
                      Java and Javascript
                    </span>{" "}
                    are my go-to languages.
                  </p>
                  <p >
                    Developing{" "}
                    <span className={`${home_style.name}`}>innovative</span> Web
                    Technologies and Products.
                  </p>
                  <p >
                    I love harnessing my skills to create products with{" "}
                    <span className={`${home_style.name}`}>React.js</span>.
                  </p>
                  <p>
                    I enjoy working with Modern Javascript Libraries and
                    Frameworks such as{" "}
                    <span className={`${home_style.name}`}>
                      React.js and Vu.js
                    </span>
                    .
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12 m-lg-0 mt-4 d-flex align-items-center justify-content-center">
                <div className={home_style.profile}></div>
              </div>
            </div>
          </div>
          <div className={`${home_style.connect}`}>
            <p className="text-center fs-3 fw-semibold">Let's get in touch.</p>
            <div className="text-center mt-4">
              <button className={`${theme?home_style.connect_icon_dark:home_style.connect_icon}`}><a href="https://www.instagram.com/praveen.krish.121/" target="_blank" rel="noreferrer noopener" className="d-flex justify-content-center"><i className="fa-brands fa-instagram"></i></a></button>
              <button className={`${theme?home_style.connect_icon_dark:home_style.connect_icon} ms-3`}><a href="http://www.twitter.com" target="_blank" rel="noreferrer noopener" className="d-flex justify-content-center"><i className="fa-brands fa-x-twitter"></i></a></button>
              <button className={`${theme?home_style.connect_icon_dark:home_style.connect_icon} ms-3`}><a href="http://www.facebook.com" target="_blank" rel="noreferrer noopener" className="d-flex justify-content-center"><i className="fa-brands fa-facebook-f"></i></a></button>
              <button className={`${theme?home_style.connect_icon_dark:home_style.connect_icon} ms-3`}><a href="https://www.linkedin.com/in/praveenkumar-k-09b1b1219/" target="_blank" rel="noreferrer noopener" className="d-flex justify-content-center"><i className="fa-brands fa-linkedin-in"></i></a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
