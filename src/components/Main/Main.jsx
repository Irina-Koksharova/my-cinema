import PropTypes from 'prop-types';
import { MainStyled } from './Main.styled';

const Main = ({style = null, children}) => {
    return (
        <MainStyled style={style}>{children}</MainStyled>
    )
}

Main.propTypes = {
  style: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default Main;