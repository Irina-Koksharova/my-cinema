import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchTrendingShow } from 'services/api-movies';
import { scrollTo } from 'services/scroll';
import { options } from 'initialValues/selectorValues';
import { serverError } from 'services/notification/notification';
import Main from 'components/Main';
import Spinner from 'components/Spinner';
import Notification from 'components/Notification';
import Title from 'components/Title';
import SortSelector from 'components/SortSelector';
import MoviesList from 'components/MoviesList';
import Footer from 'components/Footer';

const HomePage = () => {
  const [page, setPage] = useState(1);
  const history = useHistory();
  const location = useLocation();
  const currentSelector =
    new URLSearchParams(location.search).get('selected') ?? options[0];
  const currentPage = new URLSearchParams(location.search).get('page') ?? page;

  useEffect(() => {
    setPage(Number(currentPage));
    if (location.search === '') {
      history.push({
        ...location,
        search: `selected=${options[0]}&page=${page}`,
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
    scrollTo();
  };

  return (
    <>
      <Main>
        <Title title={'Trending today'} />
        <SortSelector
          options={options}
          value={currentSelector}
          onChange={onChangeSelector}
        />
        {isLoading && <Spinner />}
        {isError && <Notification message={serverError} />}
        {isSuccess && 
          (data.results && <MoviesList movies={data.results} />)
        }
      </Main>
      {isSuccess && (
        data.total_pages && (
          <Footer
            count={data.total_pages}
            page={page}
            onChange={onChangePage} />
        )
      )}
    </>
  )
};

export default HomePage;