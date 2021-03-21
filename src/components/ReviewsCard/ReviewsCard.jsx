import PropTypes from 'prop-types';
import { SubtitleStyled, TextStyled } from './ReviewsCard.styled';

const ReviewsCard = ({ author = null, content = null }) => {
  return (
    <>
      <SubtitleStyled>Author: {author}</SubtitleStyled>
      <TextStyled>{content}</TextStyled>
    </>
  );
};

ReviewsCard.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string
};

export default ReviewsCard;