import styled from 'styled-components'
export const StyledContactCard=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:38%;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
margin:20px;
& div{
    margin:3px;
}
& button{
    padding:10px 20px;
}
@media(max-width:${({theme})=>theme.mobile}){
    width:75%;
    height:250px;
}
& .socials{
    width:100%;
    height:70px;
}
`
export const StyledContactForm=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:10px;
width:40%;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
& input{
    width:80%;
    height:30px;
    margin:5px;

}
& .msgbox{
    height:100px;
   
    
}
@media(max-width:${({theme})=>theme.mobile}){
    width:75%;
    & button{
        width:40%;
    }
}`
export const StyledContactContainer=styled.div`
display:flex;
justify-content:space-evenly;
@media (max-width:${({theme})=>theme.mobile}){
    flex-direction:column;
    align-items:center;
}`
export const StyledContactmain=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
@media(max-width:${({theme})=>theme.mobile}){
    flex-direction:column;
}`