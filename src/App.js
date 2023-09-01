import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeMovie from './components/HomeMovie';
import './index.css';
import Container from 'react-bootstrap/esm/Container';
import Popular from './components/Popular';
import Footer from './components/Footer';
import HomeSerie from './components/HomeSerie';
import Search from './screen/Search';
import Error from './screen/Error';
import PopularApi from './screen/PopularApi';
import Movies from './screen/Movies';
import Series from './screen/Series';


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
              <Route path="/" element={<PopularApi />} />
              <Route path="/popular-api" element={<Popular />} />
              <Route path="/home-movie" element={<HomeMovie />} />
              <Route path="/home-series" element={<HomeSerie />} />
              <Route path="/search" element={<Search />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/series" element={<Series />} />
             </Routes>
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
