import styled from 'styled-components';
import Image from './liquid-cheese.svg';

export const StyledFooter = styled.footer`
  background-image: url(${Image});
  background-size: cover ;
  background-repeat: no-repeat ;
  background-position: center ;
  display: flex ;
  justify-content: space-around ;
  align-items: center ;
  height: 100px ;
  width: 100% ;
  bottom: 0 ;
  left: 0 ;
  z-index: 1 ;
`;

export const StyledP = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  text-shadow: 2px 2px 4px grey;
  color: white;
`;

export default StyledFooter;