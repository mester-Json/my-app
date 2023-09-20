import styled from 'styled-components';
import Image from './liquid-cheese.svg';

export const StyledNav = styled.nav`
  background-image: url(${Image});
  background-size: cover ;
  background-repeat: no-repeat ;
  background-position: center ;
  display: flex ;
  justify-content: space-around ;
  align-items: center ;
  height: 100px ;
  width: 100% ;
  top: 0 ;
  left: 0 ;
  z-index: 1 ;
`;

export const StyledH1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-shadow: 2px 2px 4px grey;

`;


export const StyledSearch = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid black;
  box-shadow: 2px 2px 4px grey;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border: 2px solid black;
  }
`;

export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;

export default StyledNav;