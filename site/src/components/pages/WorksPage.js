import React from 'react'
import { projects } from '../ProjectsData'
import { Container } from '../styles/Body.Styled'
import Button from '../styles/Button.Styled'

function WorksPage() {
  return (
  <>
  {projects.map((project)=>{
    const {id,img,description,link}=project
    return(
      <Container key={id} FD='column' j>
        <div>
        <img src={img} alt='shot'></img>
        </div>
            {description}
            <Button onClick={link}>view project</Button>
      </Container>
    )
  })}
  </>
  )
}

export default WorksPage