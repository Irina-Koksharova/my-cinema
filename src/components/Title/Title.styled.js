import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

const { main } = breakpoints;

const TitleStyled = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  
   @media screen and (min-width: ${main.tablet}px) {
		font-size: 26px;
	}`;

export default TitleStyled;