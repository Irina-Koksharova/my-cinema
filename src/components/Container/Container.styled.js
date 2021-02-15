import styled from 'styled-components';
import { size } from 'styles/variables'

const {main, secondary} = size

const ContainerStyled = styled.div`
margin: 0px auto;
padding: 15px;

    @media screen and (max-width: ${secondary.tablet}) {
		max-width: ${main.mobile};
	}

    @media screen and (min-width: ${main.tablet}) {
		width: ${main.tablet};
	}

    @media screen and (min-width: ${main.decktop}) {
		width: ${main.decktop};
	}`

export { ContainerStyled };
