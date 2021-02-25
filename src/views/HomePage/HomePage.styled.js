import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

const { main } = breakpoints;

const ButtonStyled = styled.div`
position: fixed;
bottom: 55px;
right: 25px;
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background: white;
cursor: pointer;

 @media screen and (min-width: ${main.tablet}px) {
    bottom: 40px;
 }
`;

export { ButtonStyled };