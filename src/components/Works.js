
import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from './ProjectsData'
import {  Container2 } from './styles/Body.Styled'
import Button from './styles/Button.Styled'
import { ProjectsCard } from './styles/projects.Styled'

function Works() {
  return (
    <>
    <Container2 height="auto">
    here are some of my works
    </Container2>
    
    <Container2 height="auto" gap="2">
    
    {projects.map((project)=>{
      const {img,description,technologies,github,link,id}=project
      return(
        <ProjectsCard key={id} >
          <img src={img} alt="website screenshot"></img>
          <p>{description}</p>
          <div>
            <span>
              <Link to={link}>
              <Button BG="transparent" color="#fff">view site</Button>
              </Link>
              <Link to={github}>
              <Button > github</Button>
              </Link>
            </span>
          </div>
        </ProjectsCard>
      )

    })}
    </Container2>
    
    </>
  )
}

export default Works