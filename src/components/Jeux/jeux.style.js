import styled from "styled-components";

export const Styleh2 = styled.h2`
    font-size: 40px;
    color: black ;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-shadow: 2px 2px 4px grey;
    text-align: center;
    margin-top: 50px;
`

export const Stylediv = styled.div`
    background-color: #10314c;
    color: white ;
    margin-top: 5% ;
    margin-bottom: 10% ;
    margin-left: 10% ;
    text-align: center ;
    display: block ;
    border: 2px solid black ;
    border-radius: 30px ;
    width: 1550px ;
    height : 1050px ;
    box-shadow: 2px 2px 2px #969696 ;
`

export const Styledivcontent = styled.div`
    background-color: #041829;
    margin-top: 30px ;
    margin-left: 10% ; 
    text-align: center ;
    border: 2px solid black ;
    border-radius: 30px ;
    width: 1250px ;
    height : 900px ;

`

export const StyledImg = styled.img`
    width: 200px ; 
    height: auto ;
    margin-left: 100px ;
    margin-top: 50px ;
    margin-bottom: 50px ;
    border: 2px solid black ;
    border-radius: 4% ;
    &:hover {
        transform: scale(1.2);
        transition: 0.5s;
        cursor: pointer;
    }`

export const StyledButton = styled.button`
        border: 3px solid black ;
        border-radius: 30px ;
        margin-top: 15px ;
        margin-left: 15px ;
        color: #10314c ;
        width: 120px ;
        height : 30px ;
        cursor:  crosshair ;
    &:hover {
        background-color: #fcaf3c ;
        color: black ;
    }
`

export const StyledLabel = styled.label`
    margin-right:10px ;
`
export const StyledSelect = styled.select`
        border: 3px solid black ;
        border-radius: 30px ;
        margin-top: 10px ;
        margin-right:1250px ;
        text-align: center  ;
        font-size : 12px ;
        color: #10314c ;
        width: 120px ;
        height : 30px ;`

export default Stylediv;