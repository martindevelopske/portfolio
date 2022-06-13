import React from 'react'
import {ServiceData} from './ServiceData';
import ServiceElement from './ServiceElement';
import { Container2, StyledHeader, StyledServiceContainer } from './styles/Body.Styled';
// css

function Services() {
    
  return (
    <>
    
    <Container2 FD='column' height='auto'>
    <StyledHeader>services</StyledHeader>
      <StyledServiceContainer>
      {
        ServiceData.map((service)=>{
            const {id,image,title, description}=service;
            return(
                <ServiceElement image={image} title={title} key={id} Description={description}>{description}</ServiceElement>
            );
        })
    }
      </StyledServiceContainer>
    
    </Container2>
    
    </>
  );
}

export default Services