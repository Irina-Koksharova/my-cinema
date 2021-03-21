import PropTypes from 'prop-types';
import { imageURL } from 'initialValues/url';
import { dateConversion } from 'services/dateConversion';
import {
  ImageContainerStyled,
  ImageStyled,
  TitleContainerStyled,
  TitleStyled
} from './MoviesListItem.styled';
import defaultFoto from 'images/error.jpg';

const MoviesListItem = ({
  image = null,
  movieTitle = '',
  tvTitle = '',
  movieReleaseDate = null,
  tvReleaseDate = null,
}) => {
  return (
    <>
      <ImageContainerStyled>
        <ImageStyled
          src={image ? imageURL + image : defaultFoto}
          alt={movieTitle ?? tvTitle}
        />
      </ImageContainerStyled>
      <TitleContainerStyled>
        <TitleStyled>
          {movieTitle
            ? movieTitle + dateConversion(movieReleaseDate || '-')
            : tvTitle + dateConversion(tvReleaseDate || '-')}
        </TitleStyled>
      </TitleContainerStyled>
    </>
  );
};

MoviesListItem.propTypes = {
  image: PropTypes.string,
  movieTitle: PropTypes.string,
  tvTitle: PropTypes.string,
  movieReleaseDate: PropTypes.string,
  tvReleaseDate: PropTypes.string
};

export default MoviesListItem;
