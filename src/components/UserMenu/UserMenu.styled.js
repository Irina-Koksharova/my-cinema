import styled, { css } from 'styled-components';

const UserMenuStyled = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 65%;
  height: 85%;
  padding: 100px 30px 30px;
  background-color: #fff;
  z-index: 2;
  transform: translateX(100%);
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  ${props =>
    props.open &&
    css`
      transform: translateX(0);
    `} 
`;

export { UserMenuStyled };