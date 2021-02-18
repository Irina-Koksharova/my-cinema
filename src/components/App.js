import Container from 'components/Container';
import {MenuProvider} from 'context/menu/MenuContextProvider';
import Header from 'components/Header';
import HomePage from 'views/HomePage';

const App = () => {
    
  return (
    <Container>
      <MenuProvider>
        <Header />
      </MenuProvider>
      <HomePage/>
    </Container>
  )
}

export default App;
