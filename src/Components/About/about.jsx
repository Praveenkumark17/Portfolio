import React from "react";

import About_style from "./about.module.css";
import { motion } from "framer-motion";
import {
  Music,
  Gamepad2,
  Lightbulb,
  Zap,
  Brain,
  Settings,
  Users,
  Clock,
  CheckCircle2,
  Code2,

  Globe,
} from "lucide-react";
import { Icon } from "@iconify/react";
import DataMonolith from "../Functions/DataMonolith";

export default function About() {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const skills = [
    { name: "Java", icon: "devicon:java" },
    { name: "JavaScript", icon: "devicon:javascript" },
    { name: "React", icon: "devicon:react" },
    { name: "Node.js", icon: "devicon:nodejs" },
    { name: "MySQL", icon: "devicon:mysql" },
    { name: "MongoDB", icon: "devicon:mongodb" },
    { name: "Firebase", icon: "devicon:firebase" },
    { name: "Spring", icon: "devicon:spring" },
    { name: "Git", icon: "devicon:git" },
    { name: "Flutter", icon: "devicon:flutter" },
  ];

  const tools = [
    { name: "VS Code", icon: "devicon:vscode" },
    { name: "IntelliJ", icon: "devicon:intellij" },
    { name: "Postman", icon: "devicon:postman" },
    { name: "Figma", icon: "devicon:figma" },
    { name: "GitHub", icon: "devicon:github" },
  ];

  const softSkills = [
    { name: "Quick Learner", icon: <Zap size={20} className="text-warning" /> },
    {
      name: "Problem Solving",
      icon: <Brain size={20} className="text-primary" />,
    },
    {
      name: "Adaptability",
      icon: <Settings size={20} className="text-success" />,
    },
    {
      name: "Time Management",
      icon: <Clock size={20} className="text-danger" />,
    },
    { name: "Team Player", icon: <Users size={20} className="text-info" /> },
  ];

  const hobbies = [
    { name: "Listening Music", icon: <Music size={20} /> },
    { name: "Playing Games", icon: <Gamepad2 size={20} /> },
    { name: "Learning Tech", icon: <Lightbulb size={20} /> },
  ];

  return (
    <motion.div
      className={About_style.about_wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0, x: 20 }}
    >
      <div className="container">
        <div className="row align-items-center mb-5">
          <motion.div className="col-lg-7" variants={itemVariants}>
            <h1 className={About_style.title}>
              Who <span className="gradient-text">I Am</span>
            </h1>
            <div className={About_style.bio_card}>
              <p>
                Hello! I'm{" "}
                <span className={About_style.highlight}>Praveenkumar K</span>, a
                passionate developer based in Dharmapuri, Tamil Nadu.
              </p>
              <p>
                Currently, I'm honing my skills in the{" "}
                <span className={About_style.highlight}>MERN Stack</span>
                at KGiSL MicroCollege, Coimbatore.
              </p>
              <p>
                I hold a{" "}
                <span className={About_style.highlight}>
                  B.E. in Computer Science
                </span>
                from Anna University Regional Campus, Madurai.
              </p>

              <div className={About_style.extra_info}>
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="mb-3 d-flex align-items-center">
                      <Globe size={18} className="me-2" /> Hobbies
                    </h5>
                    <ul className={About_style.icon_list}>
                      {hobbies.map((h) => (
                        <li key={h.name}>
                          {h.icon} {h.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h5 className="mb-3 d-flex align-items-center">
                      <CheckCircle2 size={18} className="me-2" /> Soft Skills
                    </h5>
                    <ul className={About_style.icon_list}>
                      {softSkills.map((s) => (
                        <li key={s.name}>
                          {s.icon} {s.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-lg-5 d-flex justify-content-center"
            variants={itemVariants}
          >
            <div className={About_style.image_container}>
              <div className={About_style.about_image}>
                <DataMonolith />
              </div>
              <div className={About_style.floating_badge}>
                <Code2 size={24} />
                <span>2+ Years Coding</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skillset Section */}
        <motion.section
          className={About_style.skill_section}
          variants={itemVariants}
        >
          <h2 className="text-center mb-5">
            Professional <span className="gradient-text">Skillset</span>
          </h2>
          <div className={About_style.skills_grid}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={About_style.skill_card}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              >
                <Icon icon={skill.icon} className={About_style.skill_icon} />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tools Section */}
        <motion.section
          className={About_style.skill_section}
          variants={itemVariants}
        >
          <h2 className="text-center mb-5">
            Tools I <span className="gradient-text">Use</span>
          </h2>
          <div className={About_style.skills_grid}>
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className={About_style.skill_card}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <Icon icon={tool.icon} className={About_style.skill_icon} />
                <span>{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}
