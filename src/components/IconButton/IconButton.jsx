import {ButtonStyled} from './IconButton.styled'

const IconButton = ({ children, onClick, ...allyProps }) => (
  <ButtonStyled onClick={onClick} {...allyProps}>
    {children}
  </ButtonStyled>
);

export default IconButton;