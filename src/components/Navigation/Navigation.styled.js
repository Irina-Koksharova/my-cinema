import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { breakpoints } from 'styles/variables';

const {main} = breakpoints 

const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  text-transform: capitalize;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 150px;
  padding: 15px;
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
  color: rgb(85, 83, 83);  
    
  &.${(props) => props.activeClassName} {
    color: rgb(248, 100, 14);
  }
  
  @media screen and (min-width: ${main.tablet}px) {
	  padding: 25px;
    font-size: 28px;
	}`;

StyledLink.defaultProps = {
    activeClassName: 'active',
};

export {ListStyled, StyledLink};