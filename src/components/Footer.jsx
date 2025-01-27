import React from 'react'
import styles from "../Css/NavFooter.module.css"
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>

      <p>Connect with me</p>
      <div className={styles.socialLinks}>
        <a href="https://www.linkedin.com/in/rohit-singh-rawat-5540171b6/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={25} />
        </a>
        <a href="https://github.com/RohitRawat-08" target="_blank" rel="noopener noreferrer">
          <FaGithub size={25} />
        </a>
        <a href="mailto:rsrawat2929@gmail.com">
          <FaEnvelope size={25} />
        </a>
      </div>
      <p className={styles.made}>© 2025 made by Rohit</p>
      
    </div>
  )
}

export default Footer
