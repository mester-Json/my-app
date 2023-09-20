import styled from 'styled-components';
import Image from './liquid-cheese.svg';

export const StyledNav = styled.nav`
  background-image: url(${Image});
  background-size: cover ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  color: white;
`;

export const StyledH1 = styled.h1`
  font-size: 24px;
  margin: 0;
`;


export const StyledSearch = styled.input`
  width: 200px; 
  padding: 5px; 
  color: white ;
  border: none; 
  background-color: #000;
  opacity: 70% ;
  border: 2px solid white ;
  border-radius: 5px ;
  margin-left: 20px; 
  &::placeholder {
    color: #ffff;
    font-size: 15px;
    text-align: center;
  } 
`;

export const StyledImg = styled.img`
  width: 150px;
  height: 150px;
`;

export default StyledNav;