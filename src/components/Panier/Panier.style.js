import styled from "styled-components";

export const Styleh3 = styled.h3`
    font-size: 25px;
    color: white ;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-shadow: 2px 2px 4px red;
    text-align: center;
    margin-top: 50px;
`
export const Styleh2 = styled.h2`
    font-size: 25px;
    color: white ;
    text-align: center;
`

export const Stylediv = styled.div`
    margin-top: 50px ;
    margin-left: 25% ;
    margin-bottom: 50px ;
    width: 50% ;
    height: auto ;
    background-color: #041829 ;
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    gap: 10px;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 2px 2px 4px grey;
    flex-direction: column ;
    display: flex ;
`
export const StyleRemove = styled.button`
    color: blue ;
    border: 2px  ;
    border-radius: 5px ;
    margin-left: 445px ;
    margin-top: 10px ;
`

export const StylehCheckout = styled.button`
    color: blue ;
    border: 2px  ;
    border-radius: 5px ;
    margin-left: 445px ;
    margin-top: 10px ;
`

export const Stylep = styled.p`
    color: white;
    text-align: center;

`
export const Stylea = styled.a`
    color: red ;
`


export default Styleh3;