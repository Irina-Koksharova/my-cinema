import PropTypes from 'prop-types';
import { ButtonStyled } from './IconButton.styled'

const IconButton = ({ children = null, onClick = () => null, ...allyProps }) => (
  <ButtonStyled onClick={onClick} {...allyProps}>
    {children}
  </ButtonStyled>
);

IconButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};

export default IconButton;