import React from "react";
import Project_style from "./project.module.css";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Globe, Database, Server } from "lucide-react";

export default function Project() {


  const projects = [
    {
      title: "Admin Control Web",
      description: "A comprehensive user, teacher, and admin control system with role-based access control.",
      tech: ["React", "Spring Boot", "MySQL", "Ant Design"],
      github: "https://github.com/Praveenkumark17/React_Full_Stack_Loginsystem",
      demo: null,
      icon: <Server className="text-primary" size={24} />,
      imageClass: Project_style.img1
    },
    {
      title: "MERN E-commerce",
      description: "Full-stack e-commerce with product catalog, auth, cart, and admin dashboard.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Praveenkumark17/E_commerce_react_app",
      demo: "https://e-commerce-client-swart.vercel.app/",
      icon: <Database className="text-secondary" size={24} />,
      imageClass: Project_style.img5
    },
    {
      title: "Shopping Cart UI",
      description: "Fully responsive e-commerce UI with product details and shopping cart functionality.",
      tech: ["HTML", "CSS", "Responsive Design"],
      github: "https://github.com/Praveenkumark17/e-commerce_UI",
      demo: "https://lovely-daffodil-5ce557.netlify.app/",
      icon: <Globe className="text-accent" size={24} />,
      imageClass: Project_style.img2
    },
    {
      title: "Weather App",
      description: "Real-time weather tracking using OpenWeather API with location-based updates.",
      tech: ["JavaScript", "Weather API", "CSS3"],
      github: "https://github.com/Praveenkumark17/weather_api",
      demo: "https://poetic-unicorn-57c545.netlify.app/project_3_js/",
      icon: <Code2 className="text-info" size={24} />,
      imageClass: Project_style.img3
    },
    {
      title: "Landing Page",
      description: "Brand landing page for an AC company featuring testimonials and product showcase.",
      tech: ["Bootstrap", "HTML5", "UI/UX"],
      github: "https://github.com/Praveenkumark17/landing_page",
      demo: "https://ornate-kitten-27735f.netlify.app/",
      icon: <Globe className="text-success" size={24} />,
      imageClass: Project_style.img4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className={Project_style.project_wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <motion.h1 className={Project_style.title} variants={cardVariants}>
            Featured <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p className={Project_style.subtitle} variants={cardVariants}>
            A showcase of my technical journey and creative problem-solving.
          </motion.p>
        </div>

        <div className={Project_style.projects_grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={Project_style.project_card}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className={`${Project_style.project_image} ${project.imageClass}`}>
                <div className={Project_style.image_overlay}>
                  <div className={Project_style.tech_badges}>
                    {project.tech.map((t, i) => (
                      <span key={i} className={Project_style.tech_tag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={Project_style.project_content}>
                <div className={Project_style.card_header}>
                  {project.icon}
                  <h3>{project.title}</h3>
                </div>
                <p>{project.description}</p>
                <div className={Project_style.card_footer}>
                  <a href={project.github} target="_blank" rel="noreferrer" className={Project_style.action_btn}>
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className={`${Project_style.action_btn} ${Project_style.btn_primary}`}>
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
