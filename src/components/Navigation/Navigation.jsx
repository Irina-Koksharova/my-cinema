import { useContext } from 'react';
import { navigationLinks } from 'initialValues/navigationLinks';
import { NavStyled, ListStyled, StyledLink } from './Navigation.styled';
import { menuContext } from 'context/menu/MenuContextProvider';

const Navigation = () => {
  const { toggleMenu } = useContext(menuContext)

  return (
    <NavStyled>
      <ListStyled>
        {navigationLinks.map(({ name, link }) => (
          <li key={name}>
                <StyledLink exact to={link} onClick={toggleMenu}>
                    {name}
                </StyledLink>
          </li>
        ))}
      </ListStyled>
    </NavStyled>
  );
};

export default Navigation;