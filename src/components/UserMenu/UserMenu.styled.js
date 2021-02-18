import styled from 'styled-components';

const UserMenuStyled = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  width: 65%;
  height: 85%;
  padding: 100px 30px 30px;
  background-color: #fff;
  z-index: 2;
  
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(
    ${({ state }) => {
    switch (state) {
      case "entering":
        return '100%'
      case "entered":
        return '0'
      case "exiting":
        return '100%'
      case "exited":
        return '100%'
      default:
        return;
    }
  }}
  );    
`;

export { UserMenuStyled };
 