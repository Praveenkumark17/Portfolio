import React from "react";
import Footer_style from './footer.module.css';
import { useSelector } from "react-redux";

export default function Footer(){
    const theme = useSelector((state) => state.theme.isTheme);

    return(
        <>
        <div className={`${theme?Footer_style.footer_main_dark:Footer_style.footer_main} d-flex justify-content-center align-items-center`}>
            <p className="m-0">Designed and Developed by praveenkumar <i class="fa-regular fa-copyright"></i> 2024</p>
        </div>
        </>
    );

} 