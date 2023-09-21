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
    background-color: #10314c ;
    border-radius: 30px;
    box-shadow: 2px 2px 4px grey;
`;

export const StyledSliderContener = styled.div`
    display: flex ;
    justify-content: space-around;
    align-items: center ;
    margin-top: 100px ;
    width: 90%;
    height: 320px;
    margin-left: 5%;
    border-radius: 25px;
    background-color: #041829 ; 
    ::selection {
        background-color: transparent;
    }
`;

export const StyledImage = styled.img`
    max-width: 10%;  
    height: auto;
    border-radius: 5px;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    border: 2px solid black;
    box-shadow: 2px 2px 4px grey;
    &:hover {
        transform: scale(1.2);
        transition: 0.5s;
        cursor: pointer;
    }
`;



export default StyledDiv;