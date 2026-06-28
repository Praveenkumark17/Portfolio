import React, { useEffect, useState } from "react";
import home_style from "./home.module.css";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowRight, Terminal, Database, Layout } from "lucide-react";
import confetti from "canvas-confetti";
import TerminalAnimation from "../Functions/TerminalAnimation";

export default function Home() {

  const [greeting, setGreeting] = useState("Hello There!!");

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting("Good Morning!!");
    else if (hours < 18) setGreeting("Good Afternoon!!");
    else setGreeting("Good Evening!!");
  }, []);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#a855f7', '#f43f5e']
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div 
      className={home_style.home_wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <div className="container">
        {/* Hero Section */}
        <div className={home_style.hero_section}>
          <div className="row align-items-center">
            <motion.div className="col-lg-6 mb-5 mb-lg-0" variants={itemVariants}>
              <div className={home_style.hero_content}>
                <motion.span 
                  className={home_style.greeting}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {greeting}
                </motion.span>
                <h1 className={home_style.hero_title}>
                  I'M <span className="gradient-text">Praveenkumar K</span>
                </h1>
                <div className={home_style.typewriter}>
                  <p>Full Stack Developer & UI Enthusiast</p>
                </div>
                <p className={home_style.hero_subtitle}>
                  Crafting modern, scalable and user-centric web applications with the latest technologies.
                </p>
                <div className={home_style.hero_actions}>
                  <motion.button 
                    className={home_style.btn_primary}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px var(--primary-glow)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleConfetti}
                  >
                    Say Hello <ArrowRight size={18} className="ms-2" />
                  </motion.button>
                  <motion.a 
                    href="/resume" 
                    className={home_style.btn_secondary}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="col-lg-6 d-flex justify-content-center" variants={itemVariants}>
              <div className={home_style.hero_image_container}>
                <div className={home_style.image_blob}></div>
                <div className={home_style.floating_icons}>
                  <motion.div className={home_style.icon_card} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                    <Layout className="text-primary" />
                  </motion.div>
                  <motion.div className={home_style.icon_card} animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}>
                    <Database className="text-secondary" />
                  </motion.div>
                  <motion.div className={home_style.icon_card} animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}>
                    <Terminal className="text-accent" />
                  </motion.div>
                </div>
                <div className={home_style.profile_image}>
                  <TerminalAnimation />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Introduction Section */}
        <motion.section className={home_style.intro_section} variants={itemVariants}>
          <div className="text-center mb-5">
            <h2 className={home_style.section_title}>
              LET ME <span className="gradient-text">INTRODUCE</span> MYSELF
            </h2>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <motion.div 
                className={home_style.feature_card}
                whileHover={{ y: -10 }}
              >
                <div className={`${home_style.feature_icon} bg-primary-soft`}>
                  <Terminal size={32} />
                </div>
                <h3>Developer Journey</h3>
                <p>
                  My journey into programming has been a <span className={home_style.highlight}>thrilling adventure</span>, 
                  where I discovered the power of code to bring ideas to life.
                </p>
              </motion.div>
            </div>
            
            <div className="col-lg-4">
              <motion.div 
                className={home_style.feature_card}
                whileHover={{ y: -10 }}
              >
                <div className={`${home_style.feature_icon} bg-secondary-soft`}>
                  <Database size={32} />
                </div>
                <h3>Technical Arsenal</h3>
                <p>
                  I specialize in <span className={home_style.highlight}>Java and JavaScript</span>, 
                  building innovative solutions that solve real-world problems with scalable architectures.
                </p>
              </motion.div>
            </div>
            
            <div className="col-lg-4">
              <motion.div 
                className={home_style.feature_card}
                whileHover={{ y: -10 }}
              >
                <div className={`${home_style.feature_icon} bg-accent-soft`}>
                  <Layout size={32} />
                </div>
                <h3>Frontend Mastery</h3>
                <p>
                  My weapon of choice is <span className={home_style.highlight}>React.js</span>, 
                  paired with modern frameworks to create seamless, user-centric experiences.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Connect Section */}
        <motion.section className={home_style.connect_section} variants={itemVariants}>
          <div className={home_style.connect_card}>
            <div className={home_style.connect_content}>
              <h2 className={home_style.connect_title}>Let's Build Something <span className="gradient-text">Extraordinary</span></h2>
              <p className={home_style.connect_subtitle}>
                Currently open to new opportunities, collaborations, or just a friendly chat about technology.
              </p>
              
              <div className={home_style.connect_actions}>
                <motion.button 
                  className={home_style.cta_btn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/contact'}
                >
                  Get In Touch
                </motion.button>
              </div>

              <div className={home_style.social_footer}>
                <p>FIND ME ON</p>
                <div className={home_style.social_grid}>
                  {[
                    { icon: <Github size={22} />, url: "https://github.com/Praveenkumark17", label: "Github" },
                    { icon: <Linkedin size={22} />, url: "https://www.linkedin.com/in/praveenkumar-k-09b1b1219/", label: "Linkedin" },
                    { icon: <Instagram size={22} />, url: "https://www.instagram.com/praveen.krish.121/", label: "Instagram" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={home_style.social_link_item}
                      whileHover={{ y: -5, color: "var(--primary)" }}
                      title={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <div className={home_style.connect_bg_decoration}></div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
