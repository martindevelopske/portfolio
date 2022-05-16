import React, { useState } from 'react'
import { Container2, StyledHeader } from './styles/Body.Styled'
import { StyledProjectsHolder } from './styles/projects.Styled';
import {projects} from './ProjectsData'
import Button from './styles/Button.Styled';
import { Link } from 'react-router-dom';
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'
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
      <StyledHeader>projects</StyledHeader>
      <StyledProjectsHolder>
        <FaArrowAltCircleLeft className="prev" onClick={prevSlide}/>
        {projects.map((project)=>{
          const {id,img,description,link}=project;
          return(
            <div key={id} >
            {id===current?
                        <div className='container'>
                        <img src={img} alt=''></img>
                        <div>
                        <p>{description}</p>
                        <Link to={link}>
                        <Button>view project</Button>
                        </Link>
                        </div> 
                        
                        
                      </div>
            :null}

            </div>
            
          )
        })}
        <FaArrowAltCircleRight className="next" onClick={nextSlide}/>
        
      </StyledProjectsHolder>
    </Container2>
  )
}

export default Works    