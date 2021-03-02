import { useContext } from 'react';
import { navigationLinks } from 'initialValues/navigationLinks';
import { NavStyled, ListStyled, StyledLink } from './Navigation.styled';
import { menuContext } from 'context/menu/MenuContextProvider';

const Navigation = () => {
  const { toggleMenu } = useContext(menuContext)

  return (
    <NavStyled>
      <ListStyled>
        {Object.values(navigationLinks).map(link => (
          <li key={link}>
                <StyledLink exact to={`/${link.toLowerCase()}`} onClick={toggleMenu}>
                    {link}
                </StyledLink>
          </li>
        ))}
      </ListStyled>
    </NavStyled>
  );
};

export default Navigation;