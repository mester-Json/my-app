import styled from "styled-components";

export const StyledDiv = styled.div`
    margin-top: 50px ;
    margin-left: 25% ;
    margin-bottom: 50px ;
    width: 50% ;
    height: auto ;
    background-color: #041829 ;
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 10px;
`;

export const StyledImg = styled.img`
    width: 100px ;
    height: 100px ;
    margin-left: 100px ;
    margin-top: 50px ;
    margin-bottom: 50px ;
    border: 2px solid black ;
    &:hover {
        transform: scale(1.2);
        transition: 0.5s;
        cursor: pointer;
    }`

export default StyledDiv