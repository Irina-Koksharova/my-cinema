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
  image,
  movieTitle,
  tvTitle,
  movieReleaseDate,
  tvReleaseDate,
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
            ? movieTitle + dateConversion(movieReleaseDate)
            : tvTitle + dateConversion(tvReleaseDate)}
        </TitleStyled>
      </TitleContainerStyled>
    </>
  );
};

export default MoviesListItem;
