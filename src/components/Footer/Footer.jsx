import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

import "./Footer.css";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">Get in touch!</Typography>
        <Typography>
          "Explore my work and experience before getting in touch."
        </Typography>
        <Typography>
        "Discover my portfolio and see what I have to offer." 
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Me</Typography>
        </Link>
      </div>

      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/Sheel1211" target="blank">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/pandyasheel416/" target="blank">
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/sheel-pandya-160458219/"
          target="blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};
