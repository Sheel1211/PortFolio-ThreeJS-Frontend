import { Typography } from "@mui/material";
import logo from "../../Images/space.jpg";
import React from "react";
import "./About.css";
const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about.quotes}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={about.avatar.url} alt="Sheel" className="aboutAvatar"/>
          <Typography
            variant="h4"
            style={{
              margin: "1vmax 0",
              color: "black",
            }}
          >
            {about.name}
          </Typography>
          <Typography
            style={{
              margin: "1vmax 0",
            }}
          >
            {about.title}
          </Typography>
          <Typography
            style={{
              margin: "1vmax 0",
              textAlign: "center",
            }}
          >
            {about.subtitle}
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {about.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
