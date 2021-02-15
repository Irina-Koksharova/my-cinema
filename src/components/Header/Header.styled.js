import styled from 'styled-components';
import { breakpoints } from 'styles/variables';

const { main } = breakpoints;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  min-height: 60px;
  padding: 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  
  @media screen and (min-width: ${main.tablet}px) {
	min-height: 80px;
  justify-content: flex-start;
`;

export { HeaderStyled };