import styled from "styled-components";

export const StyleH1 = styled.h1`
    font-size: 30px;
    color: black ;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-shadow: 2px 2px 4px grey;
    block-size: 0;
    text-align: center;
    margin-top: 20px;  
    margin-bottom: 20px;
`;

export const StyleButton = styled.button`
    width: 100px;
    height: 50px;
    background-color:#10314c;
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
        background-color:#041829;
        color: white;
        border: 2px solid black;
    }
`;

export const StyleH2 = styled.h2`
    font-size: 30px;
    color: black ;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-shadow: 2px 2px 4px grey;
    block-size: 0;
    text-align: center;
    margin-top: 50px;
    `
export const StyleH3 = styled.h3`
    font-size: 30px;
    color: black ;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-shadow: 2px 2px 4px grey;
    block-size: 0;
    text-align: center;
    margin-top: 50px;
    `
export default StyleH1;