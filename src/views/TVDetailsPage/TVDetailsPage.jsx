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
import { serverError } from 'initialValues/messages';
import { scrollTop } from 'services/scroll';
import { buttonStyle } from './TVDetailsPage.styled';
import Main from 'components/Main';
import Button from 'components/Button';
import MovieCard from 'components/MovieCard';
import Spinner from 'components/Spinner';
import Notification from 'components/Notification';

const Cast = lazy(() => import('views/Cast' /* webpackChunkName: "cast-page" */));

const Reviews = lazy(() =>
  import('views/Reviews' /* webpackChunkName: "reviews-page" */),
);

const TVDetailsPage = () => {
  const { tvId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const [locationFrom] = useState(
    () => location?.state?.from?.location ?? '/',
  );
 
  const { isLoading, isError, isSuccess, data } = useQuery(
    ['selectedTV', tvId],
    () => fetchSelectedShow('tv', tvId),
  );

  const onButtonGoBackClick = () => {
    history.push(locationFrom) 
    scrollTop()
  };

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
          <Button style={buttonStyle} onClick={onButtonGoBackClick}>
            {`<< back to ${url.slice(1, 3)}`}
          </Button>
          <MovieCard movie={data} url={url} />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path={`${path}/${links.CAST}`}>
                <Cast sectionTitle={links.CAST} movie={data} />
              </Route>
              <Route path={`${path}/${links.REVIEWS}`}>
                <Reviews sectionTitle={links.REVIEWS} movie={data} />
              </Route>
            </Switch>
          </Suspense>
        </Main>
      )}
    </>
  );
};
  
export default TVDetailsPage;