import TitleStyled from './Title.styled';

const Title = ({ title }) => {
  return (
    <TitleStyled id="title">
      {title}
    </TitleStyled>
  );
};

export default Title;
