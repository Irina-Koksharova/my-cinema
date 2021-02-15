import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { size } from 'styles/variables'

const {main} = size

const ListStyled = styled.ul`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  text-transform: capitalize;
`

const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 15px;
    font-size: 12px;
    font-weight: 500;
    text-transform: capitalize;
    color: rgb(85, 83, 83);  
    
    &.${(props) => props.activeClassName} {
    color: rgb(248, 100, 14);
    }
  
    @media screen and (min-width: ${main.tablet}) {
	padding: 25px;
    font-size: 28px;
	}`;

StyledLink.defaultProps = {
    activeClassName: 'active',
};

export {ListStyled, StyledLink};