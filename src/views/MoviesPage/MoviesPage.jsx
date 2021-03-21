import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MdArrowUpward } from 'react-icons/md';
import { fetchSearchingShow } from 'services/apiMovies';
import { scrollTop } from 'services/scroll';
import { showNotification } from 'services/notification/notification';
import { clientErrorEmptyQuery, serverError } from 'initialValues/messages';
import { ButtonStyled } from './MoviesPage.styled';
import Main from 'components/Main';
import SearchBar from 'components/SearchBar';
import Spinner from 'components/Spinner';
import Notification from 'components/Notification';
import MoviesList from 'components/MoviesList';
import IconButton from 'components/IconButton';
import Footer from 'components/Footer';

const MoviesPage = () => {
  const [page, setPage] = useState(1);
  const history = useHistory();
  const location = useLocation();
  const queryUrl = new URLSearchParams(location.search).get('query') ?? null;
  const currentPage = new URLSearchParams(location.search).get('page') ?? page;

  useEffect(() => {
    if (queryUrl === '') {
      return;
    }
    setPage(Number(currentPage));
  }, [currentPage, queryUrl]);

  const { isIdle, isLoading, isError, isSuccess, data } = useQuery(
    ['searchMovies', location.pathname, queryUrl, currentPage],
    () =>
      fetchSearchingShow(location.pathname.slice(1, 6), queryUrl, currentPage),
    { enabled: !!queryUrl },
  );

  const onFormSubmit = query => {
    if (query.trim() === '') {
      showNotification(clientErrorEmptyQuery);
    }
    history.push({
      ...location,
      search: `query=${query.trim()}&page=1`,
    });
  };

  const onChangePage = value => {
    scrollTop();
    setPage(value);
    history.push({
      ...location,
      search: `query=${new URLSearchParams(location.search).get(
        'query',
      )}&page=${value}`,
    });
  };

  return (
    <>
      {isIdle &&
        <Main style={{ background: 'transparent' }}>
        <SearchBar onSubmit={onFormSubmit} />
        </Main>}
      
      {isLoading &&
        <Main style={{ background: 'transparent' }}>
          <Spinner />
        </Main>}
      
      {isError &&
        <Main style={{ background: 'transparent' }}>
          <Notification message={serverError} />
        </Main>}
      
      {isSuccess && (
        data.results.length === 0 
          ? <Main style={{ background: 'transparent' }}>
            <SearchBar onSubmit={onFormSubmit} />
            <MoviesList movies={data.results} />
          </Main>
          : <>
            <Main>
              <SearchBar onSubmit={onFormSubmit} />
              <MoviesList movies={data.results} />
              <ButtonStyled>
                <IconButton
                  aria-label='Up'
                  onClick={scrollTop}
                >
                  <MdArrowUpward size={'2em'} color={'rgb(248, 100, 14)'} />
                </IconButton>
              </ButtonStyled>
            </Main>
            {data.total_pages && (
              <Footer
                count={data.total_pages}
                page={page}
                onChange={onChangePage} />
            )}
          </>
      )}
    </>
  );
};

export default MoviesPage;