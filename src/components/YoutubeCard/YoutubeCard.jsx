import { Typography } from '@mui/material'
import React from 'react'
import "./YoutubeCard.css";
// import customImg from "../../Images/logo.jpg";
const YoutubeCard = ({url="https://www.youtube.com/@6PackProgrammer",
title="Title here",
image="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}) => {
  
  return (
    <div className="youtubeCard">
      <a href={url} target="blank">    
      {/* _blank opens every click on new tab whereas blank just redirects to the same opened tab which was opened on first click*/}
          <img src={image} alt="Video" />
          <Typography variant="h3">{title}</Typography>
      </a>
    </div>
  );
};  

export default YoutubeCard;