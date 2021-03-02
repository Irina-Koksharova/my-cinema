import TitleStyled from './Title.styled';

const Title = ({ style, title }) => {
  return (
    <TitleStyled id="title" style={style}>
      {title}
    </TitleStyled>
  );
};

export default Title;
