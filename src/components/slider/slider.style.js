import styled from 'styled-components';


export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledSlider = styled.div`
    width: 70%;
    height: 500px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: rgba(0,0,0,0.5);
    border-radius: 5px;
    box-shadow: 2px 2px 4px grey;
`;

export const StyledSliderContener = styled.div`
    display: flex ;
    justify-content: space-around;
    align-items: center;
    margin-top: 250px ;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5); 
`

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
    text-align: center;
    margin-top: 20px; 
    color: black;
    font-size: 50px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-shadow: 2px 2px 4px grey;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: underline;
    text-decoration-color: black;
    text-decoration-thickness: 5px;
    text-underline-offset: 5px;
    text-underline-position: under;
`;

export const StyledButton = styled.button`
    width: 100px;
    height: 50px;
    background-color: black;
    color: white;
    border: 2px solid black;
    border-radius: 5px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    box-shadow: 2px 2px 4px grey;
    &:hover {
        cursor: pointer;
        background-color: white;
        color: black;
        border: 2px solid black;
    }
`;

export default StyledDiv;