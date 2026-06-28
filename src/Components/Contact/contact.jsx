import React, { useState } from "react";

import Contact_style from "./contact.module.css";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Github, Linkedin, Instagram, MapPin } from "lucide-react";

export default function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate sending
    setTimeout(() => {
      setIsSending(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className={Contact_style.contact_wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <motion.div className="text-center mb-5" variants={itemVariants}>
          <h1 className={Contact_style.title}>Get In <span className="gradient-text">Touch</span></h1>
          <p className={Contact_style.subtitle}>Have a project in mind? Let's talk about it.</p>
        </motion.div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className={Contact_style.contact_card}>
              <div className="row">
                {/* Contact Info */}
                <motion.div className="col-lg-5 p-lg-5 p-4" variants={itemVariants}>
                  <div className={Contact_style.info_panel}>
                     <h3 className="mb-4">Contact Information</h3>
                     <div className={Contact_style.info_item}>
                        <div className={Contact_style.info_icon}><Mail size={20} /></div>
                        <div>
                           <p className={Contact_style.info_label}>Email</p>
                           <p className={Contact_style.info_value}>praveenkumar123@gmail.com</p>
                        </div>
                     </div>
                     <div className={Contact_style.info_item}>
                        <div className={Contact_style.info_icon}><Phone size={20} /></div>
                        <div>
                           <p className={Contact_style.info_label}>Phone</p>
                           <p className={Contact_style.info_value}>(+91) 9876542130</p>
                        </div>
                     </div>
                     <div className={Contact_style.info_item}>
                        <div className={Contact_style.info_icon}><MapPin size={20} /></div>
                        <div>
                           <p className={Contact_style.info_label}>Location</p>
                           <p className={Contact_style.info_value}>Dharmapuri, Tamil Nadu</p>
                        </div>
                     </div>

                     <div className={Contact_style.social_box}>
                        <p className="mb-3 fw-bold">Follow Me</p>
                        <div className={Contact_style.social_links}>
                           <a href="https://github.com/Praveenkumark17" target="_blank" rel="noreferrer"><Github size={20} /></a>
                           <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                           <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
                        </div>
                     </div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div className="col-lg-7 p-lg-5 p-4" variants={itemVariants}>
                  <form onSubmit={handleSubmit} className={Contact_style.contact_form}>
                    <div className={Contact_style.form_group}>
                      <label>Your Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className={Contact_style.form_group}>
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className={Contact_style.form_group}>
                      <label>Message</label>
                      <textarea 
                        placeholder="Tell me about your project..." 
                        rows="5"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      ></textarea>
                    </div>
                    <motion.button 
                      type="submit" 
                      className={Contact_style.submit_btn}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSending}
                    >
                      {isSending ? "Sending..." : "Send Message"}
                      <Send size={18} className="ms-2" />
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
