import React, { useState } from 'react'
import { Container2, StyledHeader } from './styles/Body.Styled'
import { ProjectContainer, StyledProjectsHolder } from './styles/projects.Styled';
import {projects} from './ProjectsData'
import Button from './styles/Button.Styled';
import { Link } from 'react-router-dom';

import{TiArrowLeftOutline,TiArrowRightOutline} from 'react-icons/ti'
function Works() {
  const [current,setCurrent]=useState(1);
  const length=projects.length
  const prevSlide=()=>{
    setCurrent(current===0?length-1: current-1)
    console.log(current);
  }
  const nextSlide=()=>{
    setCurrent(current===length-1?0:current+1)
    console.log(current);
  }
  return (
    <Container2 FD='column'>
      <StyledHeader>my projects</StyledHeader>
      <ProjectContainer FD='row'>
      <TiArrowLeftOutline className="prev" onClick={prevSlide}/>
      <StyledProjectsHolder>
    
        {projects.map((project)=>{
          const {id,img,description,link,technologies,github}=project;
          return(
            <div key={id} >
            {id===current?
                        <div className='container'>
                        <img src={img} alt=''></img>
                        <div>
                        <p>{description}</p>
                        <p>technologies used: {technologies}</p>
                        <span>
                        <Link to={link}>
                        <Button>view project</Button>
                        </Link>
                        <Link to={github}>
                        <Button BG="transparent" color='#fff'>github repo</Button>
                        </Link>
                        </span>
                        
                        </div>
                                
                      </div>
            :null}

            </div>
            
          )
        })}
        
        
      </StyledProjectsHolder>
      <TiArrowRightOutline className="next" onClick={nextSlide}/>
      </ProjectContainer>
      
    </Container2>
  )
}

export default Works    