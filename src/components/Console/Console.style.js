import styled from "styled-components";

export const Stylediv = styled.div`
    background-color: #10314c;
    color: white ;
    margin-top: 5% ;
    margin-bottom: 10% ;
    margin-left: 10% ;
    text-align: center ;
    border: 2px solid black ;
    border-radius: 30px ;
    width: 1550px ;
    height : 750px ;
    display: block ;
`

export const Styleh2 = styled.h2`
    font-size: 40px;
    color: black ;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-shadow: 2px 2px 4px grey;
    text-align: center;
    margin-top: 50px;
`

export const Styledivcontent = styled.div`
    background-color: #041829;
    margin-top: 5% ;
    margin-left: 10% ; 
    gap: 10px;
    padding: 10px;
    border: 2px solid black ;
    border-radius: 30px ;
    width: 1250px ;
    height : 600px ;
`

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

export const StyledButton = styled.button`
        border: 2px solid black ;
        margin-top: 350px ;
        margin-right: 10px ;
        cursor:  crosshair ;

`

export default Stylediv;