import { ButtonStyled } from './Button.styled';

const Button = ({ id, style, children, onClick }) => {
  return (
    <ButtonStyled id={id} style={style} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;