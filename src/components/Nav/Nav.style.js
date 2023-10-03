import styled from 'styled-components';
import Image from './symbol-scatter-haikei.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const StyledNav = styled.nav`
  background-image: url(${Image});
  background-size: cover ;
  background-position: center ;
  display: flex ;
  align-items: center ;
  height: auto ;
  width: 100% ;
  top: 0 ;
  left: 0 ;
  z-index: 1 ;
`;

export const StyledH1 = styled.h1`
  font-size: 40px;
  color: white ;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-shadow: 2px 2px 4px grey;
  text-align: center;
  margin-left: 500px ;
  margin-top: 20px;
  margin-bottom: 20px;
`;


export const StyledSearch = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid black;
  box-shadow: 2px 2px 4px grey;
  margin-top: 10px;
  margin-left: 380px ;
  margin-bottom: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  ::placeholder {
    text-align: center;
  } 
`;

export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 35px ;
  margin-left: 120px ;
  background-color: #001829  ;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: white ;
    margin-left: 50px ;
    margin-right: 25px;
    font-size: 50px ;
`

export default StyledNav;