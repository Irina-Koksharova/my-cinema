import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

const { main } = breakpoints;

const ContainerStyled = styled.div`
width: 130px;
height: 50px;
padding: 10px;

@media screen and (min-width: ${main.tablet}px) {
	margin-right: 0px;
    margin-left: auto;
}

@media screen and (min-width: ${main.decktop}px) {
	width: 200px;
    height: 60px;
}`;

export { ContainerStyled };