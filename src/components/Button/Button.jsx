import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

const Button = ({ id = null, style, children = null, onClick = () => null, ...otherProps }) => {
  return (
    <ButtonStyled id={id} style={style} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;