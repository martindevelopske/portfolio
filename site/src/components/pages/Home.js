import React from 'react'
import Intro from '../Intro'
import NewsLetter from '../NewsLetter'
import Skills from '../Skills'
import { StyledHomeContainer } from '../styles/home.styled'

import WhoAmI from '../WhoAmI'
import Works from '../Works'

function Home() {
  return (
    <StyledHomeContainer>
    <Intro />
    <WhoAmI />
    <Skills />
    <Works />
    <NewsLetter /> 
    </StyledHomeContainer>
  )
}

export default Home