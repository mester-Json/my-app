import styled from 'styled-components';
import Image from './liquid-cheese.svg';

export const StyledNav = styled.nav`
  background-image: url(${Image});
  background-size: cover;
  display: block;
  padding: 3rem;
  height: 130px;
  width: auto;
`;

export const StyledH1 = styled.h1`
  color: #ffff;
  font-size: 30px;
  justify-content: center;
  margin-top: 0px;
  position: relative ;
  margin-left: 1500px;
  display: flex;
`;


export const StyledSearch = styled.input`
  background: black;
  color: #ffff;
  font-size: 15px ;
  margin-left: 750px ;
  width: 500px ;
  height: 25px ;
  border: 2px  solid  #ffff;
  border-radius: 90px ;  
  display: flex;
  &::placeholder {
    color: #ffff;
    font-size: 15px;
    text-align: center;
  } 
`;

export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  margin-left: 10px;
  bottom : 200px ; 
  display: flex;
`;

export default StyledNav;