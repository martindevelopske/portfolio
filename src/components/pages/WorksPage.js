import React from 'react'
import { projects } from '../ProjectsData'
import { Container } from '../styles/Body.Styled'
import Button from '../styles/Button.Styled'
import {Link} from 'react-router-dom'

function WorksPage() {
  return (
  <div>

  {projects.map((project)=>{
    const {id,github,link,description,technologies,img}=project
  return(
    <Container key={id} BB="1px solid gray">
      <img src={img} alt=''></img>
      <div className='containerCenter'>
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
    </Container>
  )
  })}
  </div>  
      
    
  
  )
}

export default WorksPage