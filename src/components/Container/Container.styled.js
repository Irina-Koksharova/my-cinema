import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

const { main } = breakpoints;

const ContainerStyled = styled.div`
max-width: ${main.mobile}px;
margin: 0px auto;


    @media screen and (min-width: ${main.tablet}px) {
		max-width: ${main.tablet}px;
		padding: 15px;
	}

    @media screen and (min-width: ${main.decktop}px) {
		max-width: ${main.decktop}px;
	}`;

export { ContainerStyled };
