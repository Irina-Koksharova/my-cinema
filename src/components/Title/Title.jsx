import TitleStyled from './Title.styled';

const Title = ({ style, title }) => {
  return (
    <TitleStyled style={style}>
      {title}
    </TitleStyled>
  );
};

export default Title;
