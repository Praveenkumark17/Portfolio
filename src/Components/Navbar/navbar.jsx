import React, { useState } from "react";
import Navstyle from "./navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useLiveStats } from "../Functions/useLiveStats";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/themeslice";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, FileText, Mail, Github, Instagram, Linkedin, Sun, Moon, Menu, X, Eye, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isBlurred = useSelector((state) => state.blur.isBlurred);
  const theme = useSelector((state) => state.theme.isTheme);
  const dispatch = useDispatch();
  const location = useLocation();
  const { views, likes, isLiked, toggleLike } = useLiveStats();

  const handleToggle = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Projects", path: "/project", icon: <Briefcase size={20} /> },
    { name: "Resume", path: "/resume", icon: <FileText size={20} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={20} /> },
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/Praveenkumark17", icon: <Github size={20} /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/praveenkumar-k-09b1b1219/", icon: <Linkedin size={20} /> },
    { name: "Instagram", url: "https://www.instagram.com/praveen.krish.121/", icon: <Instagram size={20} /> },
  ];

  return (
    <nav className={`${Navstyle.nav_wrapper} ${isBlurred ? Navstyle.is_blurred : ""}`}>
      <div className="container">
        <div className={Navstyle.nav_container}>
          <Link to="/" className={Navstyle.nav_brand}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={Navstyle.brand_icon_wrapper}
            >
              <div className={Navstyle.brand_logo}>P</div>
              <span className={Navstyle.brand_name}>Praveenkumar</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className={Navstyle.nav_desktop}>
            <ul className={Navstyle.nav_list}>
              {navLinks.map((link) => (
                <li key={link.name} className={Navstyle.nav_item}>
                  <Link 
                    to={link.path} 
                    className={`${Navstyle.nav_link} ${location.pathname === link.path ? Navstyle.active : ""}`}
                  >
                    <span className={Navstyle.link_icon}>{link.icon}</span>
                    <span className={Navstyle.link_text}>{link.name}</span>
                    {location.pathname === link.path && (
                      <motion.div 
                        layoutId="nav-underline"
                        className={Navstyle.nav_underline}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={Navstyle.nav_divider}></div>

            <div className={Navstyle.nav_socials}>
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={Navstyle.social_link}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className={Navstyle.nav_divider}></div>

            <div className={Navstyle.nav_stats}>
                <div className={Navstyle.stat_item}>
                    <Eye size={18} className={Navstyle.stat_icon} />
                    <span>{views}</span>
                </div>
                <button 
                    className={`${Navstyle.like_button} ${isLiked ? Navstyle.is_liked : ""}`}
                    onClick={toggleLike}
                >
                    <motion.div
                        animate={isLiked ? { scale: [1, 1.4, 1] } : {}}
                        transition={{ duration: 0.3 }}
                    >
                        <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                    </motion.div>
                    <span>{likes}</span>
                </button>
            </div>

            <button 
              className={Navstyle.theme_toggle}
              onClick={() => dispatch(toggleTheme())}
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                {theme ? <Sun size={20} className={Navstyle.sun_icon} /> : <Moon size={20} className={Navstyle.moon_icon} />}
              </motion.div>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className={Navstyle.nav_mobile_actions}>
            <div className={Navstyle.mobile_stats}>
                <button 
                    className={`${Navstyle.like_button_mobile} ${isLiked ? Navstyle.is_liked : ""}`}
                    onClick={toggleLike}
                >
                    <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
                    <span>{likes}</span>
                </button>
            </div>
            <button 
              className={Navstyle.theme_toggle_mobile}
              onClick={() => dispatch(toggleTheme())}
            >
              {theme ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={Navstyle.menu_toggle} onClick={handleToggle}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={Navstyle.mobile_menu}
          >
            <div className="container">
              <ul className={Navstyle.mobile_nav_list}>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className={`${Navstyle.mobile_nav_link} ${location.pathname === link.path ? Navstyle.active : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={Navstyle.mobile_socials}>
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Navstyle.social_link}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
