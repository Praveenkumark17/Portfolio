import React from "react";
import Footer_style from './footer.module.css';

import { Github, Linkedin, Instagram, Heart } from "lucide-react";

export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className={Footer_style.footer_wrapper}>
            <div className="container">
                <div className={Footer_style.footer_content}>
                    <div className={Footer_style.copyright}>
                        <p>
                            Designed & Built with <Heart size={14} className={Footer_style.heart_icon} /> by Praveenkumar
                        </p>
                        <span className={Footer_style.year_text}>© {year} All Rights Reserved</span>
                    </div>

                    <div className={Footer_style.social_links}>
                        <a href="https://github.com/Praveenkumark17" target="_blank" rel="noreferrer"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/praveenkumar-k-09b1b1219/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                        <a href="https://www.instagram.com/praveen.krish.121/" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}