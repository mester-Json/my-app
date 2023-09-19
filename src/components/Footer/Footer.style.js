import styled from 'styled-components';
import Image from './liquid-cheese.svg';

export const StyledFooter = styled.footer`
  background-image: url(${Image});
  background-size: cover;
  display: block ;
  height: 30px;
  padding: 1rem;
  width: auto;
`;

export const StyledP = styled.p`
    color: #ffff;
    justify-content:center ;
    margin-top: 5px;
    display: flex;
`;

export default StyledFooter;