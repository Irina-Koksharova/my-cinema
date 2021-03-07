import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

const { main } = breakpoints;

const TextStyled = styled.p`
  text-align: center;
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #3514aa;

  @media screen and (min-width: ${main.tablet}px) {
	  font-size: 16px;
	}
  
  @media screen and (min-width: ${main.decktop}px) {
	  font-size: 18px;
	}`;

export {TextStyled}