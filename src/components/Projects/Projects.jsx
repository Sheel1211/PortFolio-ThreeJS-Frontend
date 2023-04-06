import { Delete } from '@mui/icons-material';
import { Button, Typography } from '@mui/material'
import React from 'react'
import { AiOutlineProject } from 'react-icons/ai'
import { FaRegSmileWink } from 'react-icons/fa';
import "./Projects.css"
const ProjectCard=({url,projectImage,projectTitle,description,technologies,isAdmin=false,})=>{
    return (
        <>
            <a href={url} className="projectCard" target="blank">
                <div>
                    <img src={projectImage} alt="project"  />
                    <Typography variant="h5" className="projectTitle">{projectTitle}</Typography>
                    
                </div>
                <div>
                    <Typography variant="h4">About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant="h6">Tech Stack: {technologies}</Typography>
                </div>
            </a>

            {isAdmin && (
                <Button style={{color:"rgba(40,40,0.7)"}}>
                    <Delete />
                </Button>
            )}
        </>
    );
}

const Projects = () => {
    const projects=[1 ,2 ,3];
  return (
    <div className="projects">
        <Typography variant="h3"> Projects <AiOutlineProject/></Typography>
        <div className="projectsWrapper">
            {projects.map((project,index)=>(
                <ProjectCard 
                url="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                projectImage="https://images.unsplash.com/photo-1533422902779-aff35862e462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                projectTitle="Sample Project"
                description="This is a sample project"
                technologies="Mongodb,React, NodeJs, Express"
                
                />
            ))}
        </div>

        <Typography variant="h3" style={{font:"100 1.2rem 'Ubuntu Mono'"}}>
            All the Projects Shown Above are made by me <FaRegSmileWink/>
        </Typography>
    </div>
  )
}

export default Projects;