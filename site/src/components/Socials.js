import React from 'react'
import { Link } from 'react-router-dom';
import socialsData from './SocialsData'
import { StyledSocialContainer } from './styles/Body.Styled';

// css

function Socials() {
  return (
      <>
      <StyledSocialContainer>
        {socialsData.map((item)=>{
          const {id,path,icon}=item;
          return(
            <Link to={path} key={id}>{icon}</Link>
          );
        })}
        
      </StyledSocialContainer>
        
        
      
      </>
    
  )
}

export default Socials;