import { SubtitleStyled, TextStyled } from './ReviewsCard.styled';

const ReviewsCard = ({ author, content }) => {
  return (
    <>
      <SubtitleStyled>Author: {author}</SubtitleStyled>
      <TextStyled>{content}</TextStyled>
    </>
  );
};

export default ReviewsCard;