import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import './index.css';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <header>
          <Header />
        </header>
        <main>
          <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
          </Container>
        </main>
        <footer>
          <div className='text-center'>
          All rights reserved
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
