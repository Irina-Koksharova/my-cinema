import PropTypes from 'prop-types';
import TitleStyled from './Title.styled';

const Title = ({ style = null, title }) => {
  return (
    <TitleStyled style={style}>
      {title}
    </TitleStyled>
  );
};

Title.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string.isRequired,
};

export default Title;
