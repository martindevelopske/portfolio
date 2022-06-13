import React from 'react'
import Button from './styles/Button.Styled'

import { Container, StyledHeader } from './styles/Body.Styled'
import { StyledNewsletterContainer } from './styles/newLetter.styled'

function NewsLetter() {
  return (
    <>
    <Container>
    <StyledNewsletterContainer>
        <div>
         <StyledHeader>get in touch</StyledHeader>
          <p> Be sure not to miss a thing by subscribing <br></br>to my monthly newsletter.</p>
        </div>
        <div className='email'>
          <input type="email" placeholder="Enter your E-mail"></input>
          <Button style={{width:"170px"}}>subscribe</Button>
        </div>
    </StyledNewsletterContainer>
    </Container>
    
    </>
  )
}

export default NewsLetter