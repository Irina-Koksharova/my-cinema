import Container from 'components/Container';
import {MenuProvider} from 'context/menu/MenuContextProvider';
import Header from 'components/Header';

const App = () => {
    
  return (
    <Container>
      <MenuProvider>
        <Header />
      </MenuProvider>
    </Container>
  )
}

export default App;
