import React, { useState } from 'react'
import Button from './styles/Button.Styled'
import Socials from './Socials'
import { Container, StyledDateContainer } from './styles/Body.Styled'
import { Link } from 'react-router-dom'
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'
const days=['sun','mon','tue','wed','thur','fri','sat']
const date=new Date().getDate();
const day=days[new Date().getDay()];
//date.style={'font-size':'3em'}
function Intro() {
  const [button,setButton]=useState(true);
  const [count,setCount]=useState(0);
  const alert=()=>{
    setCount(count+1);
    console.log('oeoe',count);}
  return (
      <>
      <Container FD='column'  MT='60px'>             
        <h1> HI THERE!</h1>
        <h4> Designer, Front-end Developer, Back-end Developer.</h4>
        <h3>websites done right!</h3>
        <span>
          <Link to='/works'>
            <Button>see works <BsFillArrowUpRightCircleFill style={{fontSize:"1.5em"}}/></Button>
          </Link>
         <Link to='/contact'>
         <Button onClick={alert}> hire me</Button>
         </Link>
        
        </span>
        <StyledDateContainer>
          <div><big>{date}</big> <i>{day}</i> </div>
          
          <div>
            <Socials />
          </div>
          
        </StyledDateContainer>
      </Container>
    
      </>
    
  )
} 

export default Intro