import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { MdArrowUpward } from 'react-icons/md';
import { fetchTrendingShow } from 'services/apiMovies';
import { scrollTop } from 'services/scroll';
import { options } from 'initialValues/selectorValues';
import { serverError } from 'initialValues/messages';
import { ButtonStyled } from './HomePage.styled';
import Main from 'components/Main';
import Spinner from 'components/Spinner';
import Notification from 'components/Notification';
import Title from 'components/Title';
import SortSelector from 'components/SortSelector';
import MoviesList from 'components/MoviesList';
import IconButton from 'components/IconButton';
import Footer from 'components/Footer';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const history = useHistory();
  const location = useLocation();
  const currentSelector =
    new URLSearchParams(location.search).get('selected') ?? options.ALL;
  const currentPage = new URLSearchParams(location.search).get('page') ?? page;

  useEffect(() => {
    setPage(Number(currentPage));
    if (location.search === '') {
      history.push({
        ...location,
        search: `selected=${options.ALL}&page=${page}`,
      });
    }
  }, [currentPage, history, location, page]);

  const { isLoading, isError, isSuccess, data } = useQuery(
    ['movies', currentSelector, page],
    () => fetchTrendingShow(currentSelector.slice(0, 5), page),
  );

  const onChangeSelector = e => {
    history.push({
      ...location,
      search: `selected=${e.target.value}&page=1`,
    });
    setPage(Number(currentPage));
  };

  const onChangePage = value => {
    setPage(value);
    history.push({
      ...location,
      search: `selected=${new URLSearchParams(location.search).get(
        'selected',
      )}&page=${value}`,
    });
    scrollTop();
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
        <>
          <Main>
            <Title title={'Trending today'} />
            <SortSelector
              options={options}
              value={currentSelector}
              onChange={onChangeSelector}
            />  
            {data.results && (
              <>
                <MoviesList movies={data.results} />
                <ButtonStyled>
                  <IconButton
                    aria-label='Up'
                    onClick={scrollTop}
                  >
                    <MdArrowUpward size={'2em'} color={'rgb(248, 100, 14)'} />
                  </IconButton>
                </ButtonStyled>
              </>
            )}
          </Main>
          { data.total_pages && (
            <Footer
              count={data.total_pages}
              page={page}
              onChange={onChangePage} />
          )
          }
        </>
      )
      }
    </>
  )
};
    
export default HomePage;