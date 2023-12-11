import styled from "styled-components";

export const StyledDiv = styled.div`
    margin-top: 50px ;
    margin-left: 25% ;
    margin-bottom: 50px ;
    width: 50% ;
    height: 600px ;
    background-color: #041829 ;
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 10px;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 2px 2px 4px grey;

`

export const StyledImg = styled.img`
    width: 200px ; 
    height: 150px ;
    margin-left: 50px ;
    margin-top: 80px ;
    margin-bottom: 20px ;
    border: 2px solid black ;
    &:hover {
        transform: scale(1.2);
        transition: 0.5s;
        cursor: pointer;
    }`

export default StyledDiv