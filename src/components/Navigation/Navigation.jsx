import { useContext } from 'react';
import { navigationLinks } from 'initialValues/navigationLinks';
import { NavStyled, ListStyled, StyledLink } from './Navigation.styled';
import { menuContext } from 'context/menu/MenuContextProvider';

const Navigation = () => {
  const { toggleMenu } = useContext(menuContext)

  const getLink = (value) => {
    return value === navigationLinks.HOME ? '/' : `/${value.toLowerCase()}`
  }

  return (
    <NavStyled>
      <ListStyled>
        {Object.values(navigationLinks).map(link => (
          <li key={link}>
                <StyledLink exact to={getLink(link)} onClick={toggleMenu}>
                    {link}
                </StyledLink>
          </li>
        ))}
      </ListStyled>
    </NavStyled>
  );
};

export default Navigation;