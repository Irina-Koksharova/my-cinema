import TitleStyled from './Title.styled';

const TitleMain = ({ title }) => {
  return (
    <TitleStyled id="title">
      {title}
    </TitleStyled>
  );
};

export default TitleMain;
