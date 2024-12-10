import { React } from "react";
import pdfFile from "../images/Praveenkumar_K_Resume.pdf";
import Resume_style from "./resume.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Resume() {

  const theme = useSelector((state) => state.theme.isTheme);

  return (
    <>
      <div className={`${Resume_style.main} d-flex align-items-center justify-content-center flex-column`}>
            <Link className={`${theme?Resume_style.btn_dark:Resume_style.btn}`} to={pdfFile} target="_blank">Download the PDF <i class="ms-2 fa-solid fa-download"></i></Link>
            <div className="d-flex align-items-center justify-content-center">
              <div className={`${theme?Resume_style.pdfimg_dark:Resume_style.pdfimg}`}></div>
            </div>
            <Link className={`${theme?Resume_style.btn_dark:Resume_style.btn}`} to={pdfFile} target="_blank">Download the PDF <i class="ms-2 fa-solid fa-download"></i></Link>
      </div>
    </>
  );
}
