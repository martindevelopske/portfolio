import styled from 'styled-components'
export const StyledNav=styled.div`
width:100%;
background-color:#141414;
color:#fff;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items: center;
height: 60px;
position: fixed;
top: 0;

`
export const Logo=styled.div`
margin:0px;
color:#fff;

& div{
    height:60px;
    width:100px;
}

`
export const StyledLinks=styled.div`
margin: 0 20px;
display:flex;
width:50%;
justify-content:space-between;
& a{
    text-decoration:none;
    color:#fff;
};
& li{
    
    list-style:none;
};

@media (max-width: ${({theme}) =>theme.mobile}) {
    display: none;
}
`
export const StyledMenuBtn=styled.button`
background:none;
font-size:1.2em;
color:white;
margin-right:20px;
border:none;
border-radius:10px;
@media(min-width:${({theme})=>theme.mobile}){
display:none;
}
`