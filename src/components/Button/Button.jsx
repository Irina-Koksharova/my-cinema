import { ButtonStyled } from './Button.styled';

const Button = ({ style, children, onClick }) => {
  return (
    <ButtonStyled style={style} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;