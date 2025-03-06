import React from "react";
import Project_style from "./project.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Project() {
  const theme = useSelector((state) => state.theme.isTheme);

  return (
    <>
      <div className={theme ? Project_style.main_dark : Project_style.main}>
        <div className="text-center">
          <p className={`${Project_style.pro_head} fw-semibold`}>
            My Latest Projects
          </p>
          <p className={`${Project_style.pro_subhead} fw-semibold`}>
            Here are some of the things I've been creating recently.
          </p>
        </div>
        <div className="container">
          <div className={Project_style.box}>
            <div
              className={`${Project_style.box1} ${
                theme ? Project_style.card_dark : Project_style.card
              }`}
            >
              <div
                className={`${Project_style.img} ${Project_style.img1}`}
              ></div>
              <div className="text-center mt-3 fs-3">Admin Control web</div>
              <div className={`${Project_style.content} fw-semibold`}>
                Developed a comprehensive user, teacher, and admin control
                system using React for the front-end, Spring Boot for the
                back-end, MySQL for the database, and Ant Design for the user
                interface. The system facilitates seamless registration,
                approval workflows, and role-based access control, ensuring a
                robust and user-friendly experience.
              </div>
              <div className="text-center my-4">
                <Link
                  to={
                    "https://github.com/Praveenkumark17/React_Full_Stack_Loginsystem"
                  }
                  target="_blank"
                >
                  <button
                    className={`${
                      theme ? Project_style.btn_dark : Project_style.btn
                    }`}
                  >
                    GitHub
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`${Project_style.box2} ${
                theme ? Project_style.card_dark : Project_style.card
              }`}
            >
              <div
                className={`${Project_style.img} ${Project_style.img2}`}
              ></div>
              <div className="text-center mt-3 fs-3">Shopping Cart UI</div>
              <div className={`${Project_style.content} fw-semibold`}>
                Developed a fully responsive e-commerce user interface using
                HTML and pure CSS. The application features a product listing
                page, a separate product details page, and a shopping cart. The
                design ensures an optimal user experience across all devices,
                from desktops to mobile phones, maintaining consistent
                functionality and aesthetics.
              </div>
              <div className="text-center my-4">
                <Link
                  to={"https://github.com/Praveenkumark17/e-commerce_UI"}
                  target="_blank"
                >
                  <button
                    className={`${
                      theme ? Project_style.btn_dark : Project_style.btn
                    }`}
                  >
                    GitHub
                  </button>
                </Link>
                <Link
                  to={"https://lovely-daffodil-5ce557.netlify.app/"}
                  target="_blank"
                >
                  <button
                    className={`${
                      theme ? Project_style.btn_dark : Project_style.btn
                    } ms-3`}
                  >
                    Demo
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`${Project_style.box3} ${
                theme ? Project_style.card_dark : Project_style.card
              }`}
            >
              <div
                className={`${Project_style.img} ${Project_style.img3}`}
              ></div>
              <div className="text-center mt-3 fs-3">Weather app</div>
              <div className={`${Project_style.content} fw-semibold`}>
                Developed a real-time weather application using HTML, CSS, and
                JavaScript, integrated with the OpenWeather API. The app
                provides current location weather updates as well as the ability
                to search for weather information in different locations.
                Featuring a user-friendly interface and fully responsive design,
                it ensures accessibility and optimal performance across all
                devices.
              </div>
              <div className="text-center my-4">
                <Link
                  to={"https://github.com/Praveenkumark17/weather_api"}
                  target="_blank"
                >
                  <button
                    className={`${
                      theme ? Project_style.btn_dark : Project_style.btn
                    }`}
                  >
                    GitHub
                  </button>
                </Link>
                <Link
                  to={"https://poetic-unicorn-57c545.netlify.app/project_3_js/"}
                  target="_blank"
                >
                  <button
                    className={`${
                      theme ? Project_style.btn_dark : Project_style.btn
                    } ms-3`}
                  >
                    Demo
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`${Project_style.box4} ${
                theme ? Project_style.card_dark : Project_style.card
              }`}
            >
              <div
                className={`${Project_style.img} ${Project_style.img4}`}
              ></div>
              <div className="text-center mt-3 fs-3">Landing Page</div>
              <div className={`${Project_style.content} fw-semibold`}>
                Developed a fully responsive landing page for an air conditioner
                brand using HTML, CSS, and Bootstrap. The page is designed to
                provide an engaging user experience, showcasing product
                features, customer testimonials, and promotional offers. It
                adapts seamlessly to various devices, ensuring accessibility and
                optimal viewing on desktops, tablets, and mobile phones.
              </div>
              <div className="text-center my-4">
                <Link
                  to={"https://github.com/Praveenkumark17/landing_page"}
                  target="_blank"
                >
                  <button
                    className={`${
                      theme ? Project_style.btn_dark : Project_style.btn
                    }`}
                  >
                    GitHub
                  </button>
                </Link>
                <Link
                  to={"https://ornate-kitten-27735f.netlify.app/"}
                  target="_blank"
                >
                  <button
                    className={`${
                      theme ? Project_style.btn_dark : Project_style.btn
                    } ms-3`}
                  >
                    Demo
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`${Project_style.box5} ${
                theme ? Project_style.card_dark : Project_style.card
              }`}
            >
              <div
                className={`${Project_style.img} ${Project_style.img5}`}
              ></div>
              <div className="text-center mt-3 fs-3">E-commerce web page</div>
              <div className={`${Project_style.content} fw-semibold`}>
                I developed a fully responsive E-commerce web application
                leveraging the MERN stack, comprising MongoDB, Express.js,
                React.js, and Node.js.This application showcases a comprehensive
                product catalog, user authentication, an interactive shopping
                cart, and seamless order management, including tracking and
                history features. I built an efficient admin panel to manage
                products, users, and orders. The application ensures optimal
                viewing on desktops, tablets, and mobile devices, thanks to its
                responsive design. RESTful APIs power backend operations,
                providing robust and scalable database management with
                MongoDB. Note: If You want to access this page must Signup ans
                signIn
              </div>
              <div className="text-center my-4">
                <Link
                  to={"https://github.com/Praveenkumark17/E_commerce_react_app"}
                  target="_blank"
                >
                  <button
                    className={`${
                      theme ? Project_style.btn_dark : Project_style.btn
                    }`}
                  >
                    GitHub
                  </button>
                </Link>
                <Link
                  to={"https://e-commerce-client-swart.vercel.app/"}
                  target="_blank"
                >
                  <button
                    className={`${
                      theme ? Project_style.btn_dark : Project_style.btn
                    } ms-3`}
                  >
                    Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
