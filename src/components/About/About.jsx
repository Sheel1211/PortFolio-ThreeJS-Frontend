import { Typography } from '@mui/material';
import logo  from "../../Images/space.jpg";
import React from 'react'
import "./About.css";
const About = () => {
  return (
    <div className="about">
        <div className="aboutContainer">
            <Typography>
                This is a sample Code.
            </Typography>
        </div>
        <div className="aboutContainer2">
        <div>
            <img src="" alt="Sheel" />
            <Typography variant="h4" style={{
                margin:"1vmax 0",color:"black"
            }}>Sheel</Typography>
            <Typography style={{
                margin:"1vmax 0"
            }}>Full Stack Developer</Typography>
            <Typography style={{
                margin:"1vmax 0"
            }}>I am a Student</Typography>
        </div>
        <div>
            <Typography style={{
                wordSpacing:"5px",
                lineHeight:"50px",
                letterSpacing:"5px",
                textAlign:"right",
            }}>

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nihil, molestiae architecto quidem voluptas odit modi saepe soluta adipisci consequatur libero dolorem 
            </Typography>
        </div>
        </div>
    </div>
  )
}

export default About;