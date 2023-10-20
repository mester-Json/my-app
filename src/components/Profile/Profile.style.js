import styled from "styled-components";


export const StyleForm = styled.form`
    width: 750px;
    height: 450px ;
    background-color: #001829 ;
    border: 2px solid black  ;
    margin-top: 104px ;
    border-radius: 30px ;
    margin-left: 30% ;
    margin-bottom: 50px ;
    align-items: center ;
    display: flex ;
    flex-direction: column ;
`

export const StyleH2 = styled.h2`
    text-align: center ;
    font-size: 35px;
    color: black ;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-shadow: 2px 2px 4px grey;
    text-align: center;
    margin-top: 50px;
`
export const StyleButton = styled.input`
    background-color : white ;
    width: 300px ;
    height: 25px;
    font-size: 25px ;
    margin-top : 30px ;
    margin-left: 10px ;
    text-align: center ;
    color: black ;
    border-radius: 10px ;
    border: 2px solid black ;
    &::placeholder {
        color: black ;
        font-size: 25px ;
    }
`
export const StyleSubmit = styled.button`
    background-color : white ;
    width: 150px ;
    height: 25px;
    font-size: 20px ;
    margin-top : 50px ;
    margin-left: 165px ;
    text-align: center ;
    color: black ;
    border: 2px solid black ;
    border-radius: 10px ;
`

export const StyleLabel = styled.label`
    font-size: 18px ;
    margin-left: 10px;
    margin-top: 70px ;
    color: white ;                              
`
export const StyleText = styled.a`
    color: white ;
    font-size: 20px ;
    text-decoration-color: red;
    margin-right: 500px ;
`
export default StyleForm;