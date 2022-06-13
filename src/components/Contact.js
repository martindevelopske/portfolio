import React from 'react'
import Button from './styles/Button.Styled'
import {RiWhatsappFill} from 'react-icons/ri'
// css

import Socials from './Socials'
import { Container, Container2, StyledHeader } from './styles/Body.Styled'
import { StyledContactCard, StyledContactContainer, StyledContactForm, StyledContactmain } from './styles/Contact.Styled'
function Contact() {
  return (
    <>
     
    <Container  MT='60px' FD='column' height='auto'>
    <StyledHeader>CONTACT ME</StyledHeader>
    <StyledContactmain>
    <div>
          <h2>i would love to help you.</h2>
          <p> i like to create thing to a customers satisfaction, feel free to say hello.</p>
        </div>
        <StyledContactContainer>

            <StyledContactForm>
              <p>please fill in the form below and i'll get back to you as soon as possible</p>
              <input type="text" placeholder='your Name'></input>
              <input type="email" placeholder='your Email'></input>
              <input className="msgbox" type="text" placeholder="Message"></input>
              <Button>send</Button>
            </StyledContactForm>
            <StyledContactCard>
              <div>TEL: +254111943094</div>
              <div>Whatsapp: +254111943094 </div>
                <div><Button>message<RiWhatsappFill style={{fontSize: "1.5em"}}></RiWhatsappFill> </Button></div>
              <div>
              EMAIL: martindevelopske@gmail.com
              </div>
              <div>
                <p> FOLLOW US:</p> 
                <div className='socials'><Socials /></div>
              </div>
            </StyledContactCard>
        </StyledContactContainer>
    
        
       
    </StyledContactmain>
    
    </Container>
    </>
  )
}

export default Contact