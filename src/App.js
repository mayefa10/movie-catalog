import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screen/HomeScreen';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    
      <BrowserRouter>
   <div className='d-flex flex-column site-container'>
    <header>
        <Header/>
    </header>
    <main>
      <Container>
         <Routes>
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
        </Container>  
      </main> 
      <footer>
      </footer>  
        </div>
      </BrowserRouter>
   
  );
}

export default App;
