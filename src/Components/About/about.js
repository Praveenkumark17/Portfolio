import { React } from "react";
import { useSelector } from "react-redux";
import About_style from "./about.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function About() {
  const theme = useSelector((state) => state.theme.isTheme);

  return (
    <>
      <div className={`${theme ? About_style.main_dark : About_style.main}`}>
        <div className="container">
          <div className={`${About_style.myself}`}>
            <div className={`row`}>
              <div className="col-lg-8 col-12">
                <div className="h1 fw-semibold text-center text-lg-start">
                  Are you aware of{" "}
                  <span className={`${About_style.name}`}>who I am!!</span>
                </div>
                <div className="fs-5 fw-semibold text-center text-lg-start">
                  <p className="mt-5 mb-lg-0">
                    Hello Everyone, I'M{" "}
                    <span className={`${About_style.name}`}>
                      Praveenkumar K
                    </span>{" "}
                    from Dharmapuri, Tamilnadu.
                  </p>
                  <p className="mb-lg-0">
                    I'm currently studying the{" "}
                    <span className={`${About_style.name}`}>
                      MERN Stack at KGiSL MicroCollege
                    </span>{" "}
                    in Coimbatore.
                  </p>
                  <p className="">
                    I completed my{" "}
                    <span className={`${About_style.name}`}>B.E.</span> in
                    Computer Science at{" "}
                    <span className={`${About_style.name}`}>
                      Anna University
                    </span>{" "}
                    Regional Campus, Madurai.
                  </p>

                  <p className="mt-5">Other than coding, I spend my time...</p>
                  <p className="ms-lg-5 mb-0">
                    <i class="fa-regular fa-badge-check me-2"></i>Listening
                    Music
                  </p>
                  <p className="ms-lg-5 mb-0">
                    <i class="fa-regular fa-badge-check me-2"></i>Playing
                    Badminton
                  </p>
                  <p className="ms-lg-5 mb-0">
                    <i class="fa-regular fa-badge-check me-2"></i>Learning New
                    Things
                  </p>

                  <p className="mt-5">Soft Skills...</p>
                  <p className="ms-lg-5 mb-0">
                    <i class="fa-regular fa-badge-check me-2"></i>Quick Learner
                  </p>
                  <p className="ms-lg-5 mb-0">
                    <i class="fa-regular fa-badge-check me-2"></i>Problem-Solving
                  </p>
                  <p className="ms-lg-5 mb-0">
                    <i class="fa-regular fa-badge-check me-2"></i>Adaptability
                  </p>
                  <p className="ms-lg-5 mb-0">
                    <i class="fa-regular fa-badge-check me-2"></i>Time Management
                  </p>
                  <p className="ms-lg-5 mb-0">
                    <i class="fa-regular fa-badge-check me-2"></i>Teamwork
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-12 d-flex justify-content-center d-lg-block">
                <div
                  className={`${
                    theme ? About_style.img_dark : About_style.img
                  } mt-lg-0 mt-5`}
                ></div>
              </div>
            </div>
          </div>
          <div className={`${About_style.skill}`}>
            <p className="text-center h1 fw-semibold">
              Proffesional{" "}
              <span className={`${About_style.name}`}>Skillset</span>
            </p>
            <div className={`${About_style.skill_box} mt-5`}>
              <div className={`${About_style.skill_logo}`}><Icon icon="fa6-brands:java"/></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="ri:javascript-fill" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="fa6-brands:node" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="fa6-brands:react" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="simple-icons:mysql" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="lineicons:mongodb" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="mdi:firebase" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="bxl:git" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="cib:spring" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="fa6-brands:flutter" /></div>
            </div>
          </div>
          <div className={`${About_style.tools}`}>
            <p className="text-center h1 fw-semibold">Used Tools
            </p>
            <div className={`${About_style.tools_box} mt-5`}>
              <div className={`${About_style.skill_logo}`}><Icon icon="akar-icons:vscode-fill" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="devicon-plain:intellij" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="devicon-plain:eclipse" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="fluent-mdl2:git-hub-logo" /></div>
              <div className={`${About_style.skill_logo}`}><Icon icon="devicon-plain:postman" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
