import styled from "styled-components"
export const StyledProjectsHolder=styled.div`
background-color:#1A1A1A;
width:90%;
height:350px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;



& .container{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    border:2px solid gray;
    width:100%;
    
}
& img{
    width:50%;
    margin-top:30px;
    border:2px solid blue;
    height:250px;
    border-radius:20px;

}


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
export const ProjectContainer=styled.div`
width:95%;
background-color:${({BG})=>BG || '#1A1A1A'};
color:#FFF;
margin-top:${({MT})=>MT || "0px"};
display: ${({display})=>display || 'flex'};
flex-direction: ${({FD})=>FD || 'row'};
flex-wrap: ${({flexWrap})=>flexWrap || 'wrap'};
justify-content: center;
align-items: center;
height:${({height})=>height || '400px'};

`
export const ProjectsCard=styled.div`
border:1px solid black;
width:30%;
margin:10px;
height:400px;
border-radius:10px;
& img{
    height:170px;
    width:100%;
}
@media(max-width:${({theme})=>theme.mobile}){
    width:60%;
}
&:hover{
    transform:scale(0.98);
}`