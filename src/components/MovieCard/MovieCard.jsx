import { useLocation } from 'react-router-dom';
import { imageURL } from 'initialValues/url';
import { dateConversion } from 'services/dateConversion';
import { getGenresNames } from 'services/getGenresNames';
import { links } from 'initialValues/editionalInfo';
import {
    ContainerStyled,
    ContainerImageStyled,
    ImageStyled,
    ContainerDescriptionStyled,
    TitleStyled,
    SubTitleStyled,
    TextStyled,
    ListStyled,
    ItemStyled,
    LinkStyled
} from './MovieCard.styled';
import defaultFoto from 'images/error.jpg';

const MovieCard = ({ movie, url }) => {
  const location = useLocation();
  const {
    poster_path,
    title,
    original_name,
    release_date,
    first_air_date,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <ContainerStyled>
      <ContainerImageStyled>
        <ImageStyled
          src={poster_path ? imageURL + poster_path : defaultFoto}
          alt={title ?? original_name}
        />
      </ContainerImageStyled>
      <ContainerDescriptionStyled>
        <TitleStyled>
          {title
            ? title + `${dateConversion(release_date)}`
            : original_name + `${dateConversion(first_air_date)}`}
        </TitleStyled>
        <SubTitleStyled>{`User score: ${vote_average * 10}%`}</SubTitleStyled>
        <SubTitleStyled>Overview</SubTitleStyled>
        <TextStyled>{overview}</TextStyled>
        <SubTitleStyled>Genres</SubTitleStyled>
        <TextStyled>{getGenresNames(genres)}</TextStyled>
        <SubTitleStyled>Editional information</SubTitleStyled>
        <ListStyled>
          {Object.values(links).map(link => (
            <ItemStyled key={link}>
              <LinkStyled
                to={{
                  pathname: `${url}/${link}`,
                  state: {
                    from: {
                      location,
                    },
                  },
                }}
                exact
              >
                {link}
              </LinkStyled>
            </ItemStyled>
          ))}
        </ListStyled>
      </ContainerDescriptionStyled>
    </ContainerStyled>
  );
};

export default MovieCard;