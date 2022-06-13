import styled from 'styled-components'
export const StyledNewsletterContainer=styled.div`
width:70%;
height:250px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
& input{
    height:1cm;
    width:70%;
    border-radius:10px;
    border:none;
    margin:10px;
}
& .email{
    width:100%;
    border:none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    & button{
        width:40%;
    }
& button{
    width:40%;
}
}
@media(max-width:${({theme})=>theme.mobile}){
    & button{
        
    }
}`