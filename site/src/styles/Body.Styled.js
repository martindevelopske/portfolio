import styled from 'styled-components'
export const Container=styled.div`
width:100%;
background-color:${({BG})=>BG || '#121212'};
color:#FFF;
margin-top:${({MT})=>MT || '0px'};
display: ${({display})=>display || 'flex'};
flex-direction: ${({FD})=>FD || 'row'};
flex-wrap: ${({flexWrap})=>flexWrap || 'wrap'};
justify-content: center;
align-items: center;
height:${({height})=>height || '560px'}

`
export const Container2=styled.div`
width:100%;
background-color:${({BG})=>BG || '#1A1A1A'};
color:#FFF;
margin-top:${({MT})=>MT || "0px"};
display: ${({display})=>display || 'flex'};
flex-direction: ${({FD})=>FD || 'row'};
flex-wrap: ${({flexWrap})=>flexWrap || 'wrap'};
justify-content: center;
align-items: center;
height:${({height})=>height || '560px'}

`

export const StyledHeader=styled.h1`
font-size:1.3em;
`

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
}
`
export const StyledServiceElement=styled.div`
display:flex;
flex-direction:column;
margin:20px;
& img{
    height:100px;
   
}
`
export const StyledServiceContainer=styled.div`
display:flex;
flex-wrap:wrap;
margin:8px;`
export const StyledSocialContainer=styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
width:220px;
& a{
    color:#fff;
    margin:5px;
};
& a:hover{
    color:lightblue;
    transform: scale(0.98);
}`
export const StyledDateContainer=styled.div`
display:flex;
flex-direction:row;
width:90%;
justify-content: space-around;
align-items:center;
padding:10px;
margin-bottom:10px;
`
