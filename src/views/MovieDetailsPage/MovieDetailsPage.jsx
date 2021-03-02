import { useState, lazy, Suspense } from 'react';
import {
  useParams,
  useRouteMatch,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchSelectedShow } from 'services/apiMovies';
import { links } from 'initialValues/editionalInfo';
import { serverError } from 'services/notification/notification';
import { buttonStyle } from './MovieDetailsPage.styled';
import Main from 'components/Main';
import Spinner from 'components/Spinner';
import Notification from '../../components/Notification';
import Button from 'components/Button';
import MovieCard from 'components/MovieCard';

const Cast = lazy(() => import('views/Cast' /* webpackChunkName: "cast-page" */));

// const Reviews = lazy(() =>
//   import('../Reviews' /* webpackChunkName: "reviews-page" */),
// );

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [locationFrom, setLocationFrom] = useState(
    () => location?.state?.from?.location ?? '/',
  );

  const { isLoading, isError, isSuccess, data } = useQuery(
    ['selectedMovie', movieId],
    () => fetchSelectedShow('movie', movieId),
  );

  return (
    <>
      {isLoading &&
        <Main style={{ background: 'transparent' }}>
          <Spinner />
        </Main>}
      
      {isError &&
        <Main style={{ background: 'transparent' }}>
          <Notification message={serverError} />
        </Main>}
      
      {isSuccess && (
        <Main>
          <Button style={buttonStyle} onClick={() => history.push(locationFrom)}>
            {`<< back to ${url.slice(1, 7)}`}
          </Button>
          <MovieCard movie={data} url={url} />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path={`${path}/${links.CAST}`}>
                <Cast sectionTitle={links.CAST} movie={data} />
              </Route>
          {/* <Route path={`${path}/${links[1]}`}>
                <Reviews sectionTitle={links[1]} movie={data} />
              </Route> */}
            </Switch>
          </Suspense>
        </Main>
      )}
    </>
  );
};

export default MovieDetailsPage;