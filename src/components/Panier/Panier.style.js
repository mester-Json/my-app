import styled from "styled-components";

export const Styleh3 = styled.h3`
    font-size: 25px;
    color: white;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-shadow: 2px 2px 4px red;
    margin-top: 50px;
`

export const Styleh2 = styled.h2`
    font-size: 25px;
    color: white;
`

export const Stylediv = styled.div`
    margin: 50px auto;
    width: 80%; 
    height: 650px;
    background-color: #041829;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    padding: 20px; 
    border-radius: 25px;
    box-shadow: 2px 2px 4px grey;
    flex-direction: column;
    display: flex;
`

export const StyleRemove = styled.button`
    color: white;
    background-color: blue;
    border: 2px;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer; 
`

export const StylehCheckout = styled.button`
    color: white;
    background-color: blue;
    border: 2px;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer; 
`

export const Stylep = styled.p`
    color: white;
`

export const Stylea = styled.a`
    color: red;
`

export default Styleh3;
