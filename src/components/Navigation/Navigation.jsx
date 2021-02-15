import { navigationLinks } from 'initialValues/navigationLinks';
import {ListStyled, StyledLink} from './Navigation.styled'

const Navigation = () => {
  return (
    <nav>
      <ListStyled>
        {navigationLinks.map(({ name, link }) => (
          <li key={name}>
                <StyledLink exact to={link}>
                    {name}
                </StyledLink>
          </li>
        ))}
      </ListStyled>
    </nav>
  );
};

export default Navigation;