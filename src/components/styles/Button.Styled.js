import styled from "styled-components";
const Button=styled.button`
border-radius: 50px;
border:1px solid white;
box-shadow:0 0 10px rgba(0,0,0,0.15);
cursor:pointer;
font-size:16px;
font-weight:700;
padding: 10px 50px;
margin-left:20px;
outline: #fff;
background-color: ${({BG})=>BG || '#fff'};
color: ${({color})=>color|| "#000"};
& a{
    text-decoration:none;
    color:#000;
    width:100%;
}
&:hover{
    opacity:0.9;
    transform: scale(0.98);
};
@media(max-width:${({theme})=>theme.mobile}){
    padding: 10px 30px;
}`

export default Button;