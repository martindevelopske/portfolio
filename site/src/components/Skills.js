import React from 'react';
import SkillElement from './SkillElement';
import SkillsData from './SkillsData';
import { Container, Container2,StyledHeader} from './styles/Body.Styled'
import {StyledSkillsHolder, StyledSkillContainer } from './styles/skills.styled';

function Skills({skillsData}){

    return(
        <>
        
        <Container FD='column'>
        <StyledHeader>my skills and Knowledge</StyledHeader>
        <StyledSkillsHolder>
        {SkillsData.map((skill)=>{
            const{logo,text,id}=skill;
            return(
                <StyledSkillContainer key={id}>
                    <SkillElement Image={logo} Text={text} />
                  
                </StyledSkillContainer>
                    

            )
            
        })}
        </StyledSkillsHolder>
        
        </Container>
        
        
        
        
        </>
        
    );
}
export default Skills;