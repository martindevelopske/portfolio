import React from 'react'

import { StyledSkillCard } from './styles/skills.styled'

function SkillElement({Image,Text}) {
  return (
    <StyledSkillCard>
        <div>
        <img src={Image} alt='image'/>
        <h5>{Text}</h5>
        </div>
        
    </StyledSkillCard>
  )
}

export default SkillElement