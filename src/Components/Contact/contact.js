import { React } from "react";
import { useSelector } from "react-redux";
import Contact_style from "./contact.module.css";

export default function Contact() {
  const theme = useSelector((state) => state.theme.isTheme);

  return (
    <>
      <div
        className={`${theme ? Contact_style.main_dark : Contact_style.main}`}
      >
        <p className="mt-5 text-center h1">Contact Me</p>
        <div className="container">
          <div className={`${Contact_style.box}`}>
            <div className="row gap-lg-4">
              <div className="col-lg-5 col-12">
                <p className={`${Contact_style.title} fs-3 fw-bold`}>
                  Get In Touch
                </p>
                <div className="fs-5">
                  <p>
                    <span className="fw-bold">Email:</span>{" "}
                    praveenkumar123@gmail.com
                  </p>
                  <p>
                    <span className="fw-bold">Phone:</span> (+91) 9876542130
                  </p>
                  <p className={`${Contact_style.text} fw-semibold`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <div className={`${Contact_style.input_box} ms-lg-5`}>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        className={`${
                          theme ? Contact_style.input_dark : Contact_style.input
                        } fs-5`}
                        placeholder="Name"
                      />
                    </div>
                    <div className="col-md-6 mt-4 mt-md-0">
                      <input
                        className={`${
                          theme ? Contact_style.input_dark : Contact_style.input
                        } fs-5`}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <textarea
                      className={`${
                        theme ? Contact_style.input_dark : Contact_style.input
                      } ${Contact_style.textarea} fs-5`}
                      placeholder="Message"
                    />
                  </div>
                  <button className={`${theme?Contact_style.btn_dark:Contact_style.btn} fs-5 mt-3`}>Send</button>
                </div>
              </div>
            </div>
            <div className={`${Contact_style.connect}`}>
            <p className="text-center fs-3 fw-semibold">Let's get in touch.</p>
            <div className="text-center mt-4">
              <button className={`${theme?Contact_style.connect_icon_dark:Contact_style.connect_icon}`}><a href="http://www.instagram.com" className="d-flex justify-content-center"><i className="fa-brands fa-instagram"></i></a></button>
              <button className={`${theme?Contact_style.connect_icon_dark:Contact_style.connect_icon} ms-3`}><a href="http://www.twitter.com" className="d-flex justify-content-center"><i className="fa-brands fa-x-twitter"></i></a></button>
              <button className={`${theme?Contact_style.connect_icon_dark:Contact_style.connect_icon} ms-3`}><a href="http://www.facebook.com" className="d-flex justify-content-center"><i className="fa-brands fa-facebook-f"></i></a></button>
              <button className={`${theme?Contact_style.connect_icon_dark:Contact_style.connect_icon} ms-3`}><a href="http://www.linkedin.com" className="d-flex justify-content-center"><i className="fa-brands fa-linkedin-in"></i></a></button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
