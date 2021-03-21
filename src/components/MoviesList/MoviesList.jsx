import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ListStyled, ItemStyled, LinkStyled } from './MoviesList.styled';
import { showNotification } from 'services/notification/notification'; 
import { clientErrorInvalidQuery } from 'initialValues/messages';
import { navigationLinks } from 'initialValues/navigationLinks';
import MoviesListItem from 'components/MoviesListItem';

const MoviesList = ({ movies = null }) => {
  const location = useLocation();
  
  useEffect(() => {
    if (movies.length === 0) {
      showNotification(clientErrorInvalidQuery);
    }
  }, [movies.length]);

  const getPathName = value => {
    return value
      ? navigationLinks.MOVIES.toLowerCase()
      : navigationLinks.TV.toLowerCase();
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object)
};

export default MoviesList;
