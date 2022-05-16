import React from 'react'
import Socials from './Socials'
import {Link} from 'react-router-dom'
import {FooterContainer} from './styles/Footer.styled'
import { StyledLinks } from './styles/Header.Styled'
import {BiCopyright} from 'react-icons/bi'
// css

function Footer() {
  return (
    <FooterContainer>
      <div>
        <Socials />
      </div>
      <StyledLinks style={{width:'30%'}}>
                    <li className='link'>
                        <Link to="/">HOME</Link>
                    </li>
                    <li className='link'>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li className='link'>
                        <Link to="/works">WORKS</Link>
                    </li>
                    <li className='link'>
                        <Link to="/contact">CONTACT</Link>
                    </li>

                </StyledLinks>

                <div>
                  <p>
                  copyright <BiCopyright /> {new Date().getFullYear()} <br/>
                  all rights reserved.
                  </p>
                </div>
    </FooterContainer>
  )
}

export default Footer