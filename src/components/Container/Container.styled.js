import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

const { main, secondary } = breakpoints;

const ContainerStyled = styled.div`
margin: 0px auto;
padding: 15px;

    @media screen and (max-width: ${secondary.tablet}px) {
		max-width: ${main.mobile}px;
	}

    @media screen and (min-width: ${main.tablet}px) {
		width: ${main.tablet}px;
	}

    @media screen and (min-width: ${main.decktop}px) {
		width: ${main.decktop}px;
	}`;

export { ContainerStyled };
