import styled from "styled-components";
export const StyledSkillContainer=styled.div`
display:flex;
margin:8px;
flex-direction:column;


`
export const StyledSkillsHolder=styled.div`
width:60%;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-content:center;
margin-bottom:30px;
@media (max-width:${({theme})=>theme.mobile}){
    width:95%;
}

`
export const StyledSkillCard=styled.div`
width:110px;
height:110px;
margin:0px;
justify-content:center;
align-items:center;
& h5{
margin-top:0px;
align-self:center;
@media (max-widht:410px){
    width:60px;
    heigh:60Px;
}
}
`