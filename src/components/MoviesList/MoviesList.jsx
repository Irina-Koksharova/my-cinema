import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ListStyled, ItemStyled, LinkStyled } from './MoviesList.styled';
import MoviesListItem from 'components/MoviesListItem';
import {
  clientErrorInvalidQuery,
  showNotification,
} from 'services/notification/notification';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  useEffect(() => {
    if (movies.length === 0) {
      showNotification(clientErrorInvalidQuery);
    }
  }, [movies.length]);

  const getPathName = value => {
    return value ? 'movies' : 'tv';
  };

  return (
    (
      movies.length > 0 && (
      <ListStyled>
      {movies.map(
        ({
          id,
          original_title,
          original_name,
          poster_path,
          release_date,
          first_air_date,
        }) => (
          <ItemStyled key={id}>
            <LinkStyled
              to={{
                pathname: `/${getPathName(original_title)}/${id}`,
                state: {
                  from: {
                    location,
                  },
                },
              }}
            >
              <MoviesListItem
                image={poster_path}
                movieTitle={original_title}
                tvTitle={original_name}
                movieReleaseDate={release_date}
                tvReleaseDate={first_air_date}
              />
            </LinkStyled>
          </ItemStyled>
        ),
      )}
    </ListStyled>
    ))
  );
};

export default MoviesList;
