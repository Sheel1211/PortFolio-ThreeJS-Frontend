import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

import "./Footer.css"
import { BsGithub , BsInstagram, BsLinkedin} from "react-icons/bs"
export const Footer = () => {
  return (
    <div className="footer">

    <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, rem. Quod asperiores ex amet consequuntur hic cupiditate voluptate cum voluptatem maxime pariatur labore omnis a eos ea officia, laboriosam esse alias reiciendis excepturi quaerat?
        </Typography>

        <Link to="/contact" className="footerContactBtn" >
            <Typography>Contact Us</Typography>
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
        <a href="https://www.linkedin.com/in/sheel-pandya-160458219/" target="blank">
            <BsLinkedin />
        </a>
    </div>
    </div>
  )
}
