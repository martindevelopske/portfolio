import styled from "styled-components"
export const StyledProjectsHolder=styled.div`
background-color:#1A1A1A;
width:80%;
height:350px;
display:flex;
flex-direction:row;
justify-content:space-around;

& .prev{
    font-size:2em;
    margin-top:150px;
    color:pink;
    
}
& .next{
    font-size:2em;
    margin-top:150px;
    color:pink
}
& .container{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
}
& img{
    width:50%;
    margin-top:30px;

}
@media(max-width:${({theme})=>theme.mobile}){
    width:90%;
    & .container{
        flex-direction:column;
    }
    & img{
        width:60%;
    }
}`