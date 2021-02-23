import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import {MenuProvider} from 'context/menu/MenuContextProvider';
import Container from 'components/Container';
import Header from 'components/Header';
import Spinner from 'components/Spinner';

const HomePage = lazy(() =>
  import('views/HomePage.jsx' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('views/MoviesPage.jsx' /* webpackChunkName: "movies-page" */),
);

const queryClient = new QueryClient();

const App = () => {
    
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <MenuProvider>
          <Header />
        </MenuProvider>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/movies" exact>
              <MoviesPage />
            </Route>
            <Route path="/tv" exact>
              <MoviesPage />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
        <ToastContainer autoClose={3000} />
      </Container>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}
  
export default App;
