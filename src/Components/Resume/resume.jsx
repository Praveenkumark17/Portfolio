import React from "react";
import pdfFile from "../images/Praveenkumar_K_Resume.pdf";
import Resume_style from "./resume.module.css";

import { motion } from "framer-motion";
import { Download, FileText, Eye, ShieldCheck, Star } from "lucide-react";
import resumeImg from "../images/Praveenkumar_K_Resume.jpg";

export default function Resume() {


  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className={Resume_style.resume_wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h1 className={Resume_style.title}>My <span className="gradient-text">Resume</span></h1>
          <p className={Resume_style.subtitle}>View or download my professional background and skills.</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className={Resume_style.resume_card}>
               <div className={Resume_style.card_header}>
                  <div className={Resume_style.file_info}>
                     <div className={Resume_style.file_icon}><FileText size={32} /></div>
                     <div>
                        <h3>Praveenkumar_K_Resume.pdf</h3>
                        <p>Latest Version • 245 KB</p>
                     </div>
                  </div>
                  <a href={pdfFile} download className={Resume_style.download_btn_top}>
                     <Download size={18} />
                     <span>Download</span>
                  </a>
               </div>

               <div className={Resume_style.resume_preview}>
                  <div className={Resume_style.preview_overlay}>
                     <a href={pdfFile} target="_blank" rel="noreferrer" className={Resume_style.view_btn}>
                        <Eye size={24} />
                        <span>View Full Document</span>
                     </a>
                  </div>
                  {/* The actual preview image from original project */}
                  <div className={Resume_style.preview_image} style={{ backgroundImage: `url(${resumeImg})` }}></div>
               </div>

               <div className={Resume_style.resume_footer}>
                  <div className={Resume_style.trust_badges}>
                     <div className={Resume_style.badge}><ShieldCheck size={16} /> Verified</div>
                     <div className={Resume_style.badge}><Star size={16} /> ATS Friendly</div>
                  </div>
                  <a href={pdfFile} download className={Resume_style.download_btn_bottom}>
                     <Download size={20} className="me-2" /> Download Resume
                  </a>
               </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
