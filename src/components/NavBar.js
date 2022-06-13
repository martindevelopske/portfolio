import React, { useState } from 'react';

import Modal from './Modal';


import {MdOutlineMenu} from 'react-icons/md'


import { StyledLinks, StyledMenuBtn, StyledNav } from './styles/Header.Styled';

import { Logo } from './styles/Header.Styled';

import { Link } from 'react-router-dom';
import {RiCloseLine} from 'react-icons/ri'


function NavBar(){
    const [btn,setBtn]=useState(<MdOutlineMenu />);
    const [click,setClick]=useState(false);
    const [showModal,setShowModal]=useState(false);
    
    const openModal=()=>{
        setShowModal(true);
        setBtn(<RiCloseLine/>);
    }
    const closeModal=()=>{
        setShowModal(false);
        setBtn(<MdOutlineMenu />);
    }
    const handleClick=()=>{
        setClick(!click);
        if(showModal){
            closeModal();
        } else{
            openModal();
        }
        
    }
    return(
        <>
        <nav>
            <StyledNav>
                
                
                    <Link to='/'>
                        <Logo>
                            MARTIN
                        </Logo>
                    </Link>
                
                <StyledMenuBtn >
                    <i onClick={handleClick}>
                    {btn}
                    </i>
                    
                </StyledMenuBtn>
                <StyledLinks>
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
            </StyledNav>
            
        </nav>
        {showModal? <Modal />: null}
        </>
    );
}
export default NavBar;