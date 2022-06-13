import React from 'react'
import { StyledServiceElement } from './styles/Body.Styled'
// css

function ServiceElement({image,title,Description, id}) {
  return (
    <>
    <StyledServiceElement>
        <img src={image} alt="logo" />
        <h4>{title}</h4>
        <p>{Description}</p>
    </StyledServiceElement>
    </>
  )
}

export default ServiceElement