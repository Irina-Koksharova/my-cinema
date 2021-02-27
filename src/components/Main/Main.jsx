import { MainStyled } from './Main.styled';

const Main = ({style, children}) => {
    return (
        <MainStyled style={style}>{children}</MainStyled>
    )
}

export default Main;