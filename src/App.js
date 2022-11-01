import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import Container from './components/Container/Container'
import './styles/normalize.scss';
import './styles/global.scss';

const App = () => {
  return (
    <Container>
    <div>
      <Hero />
      <SearchForm />
      <List />
    </div>
    </Container>
  );
};

export default App;