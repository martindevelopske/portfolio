import React from 'react'
import { Link } from 'react-router-dom'
import { Container2 } from './styles/Body.Styled'
import Button from './styles/Button.Styled'

function WhoAmI() {
  return (
    <>
    <Container2 FD="column">
        <div className='container-one'>
        <h2>Who am I?</h2>
        <p>i am a computer science student, developer,designer and a freelancer 
        Outlined buttons are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app.

Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.
        </p>
        </div>
        <Link to='/about'>
        <Button BG='transparent' color='#fff'>read more</Button>
        </Link>
        
    </Container2>
        </>
        
  )
}

export default WhoAmI