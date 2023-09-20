import styled from 'styled-components';


export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledSlider = styled.div`
    width: 70%;
    height: 500px;
    margin: 0 auto;
    margin-top: 0px;
    margin-bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    border-radius: 30px;
    box-shadow: 2px 2px 4px grey;
`;

export const StyledSliderContener = styled.div`
    display: flex ;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px ;
    width: 90%;
    height: 320px;
    margin-left: 5%;
    border-radius: 25px;
    background-color: rgba(0,0,0,0.5); 
`;

export const StyledImage = styled.img`
    max-width: 10%;  
    height: auto;
    border-radius: 5px;
    margin-right: 10px;
    margin-left: 10px;
    border: 2px solid black;
    box-shadow: 2px 2px 4px grey;
    &:hover {
        transform: scale(1.2);
        transition: 0.5s;
        cursor: pointer;
    }
`;



export const StyledH1 = styled.h1`
    font-size: 30px;
    color: black ;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-shadow: 2px 2px 4px grey;
    text-align: center;
    margin-top: 20px;  
    margin-bottom: 20px;
`;

export const StyledButton = styled.button`
    width: 100px;
    height: 50px;
    background-color: black;
    color: white;
    border: 2px solid black ;
    border-radius: 5px;
    margin-top: 10px ;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 50px;
    box-shadow: 2px 2px 4px grey;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
        border: 2px solid black;
    }
`;

export default StyledDiv;