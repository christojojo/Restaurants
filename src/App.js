import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Detailes from './components/Detailes';
import { Container } from 'react-bootstrap';

function App() {
  return (
   <Router>
    <Header/>
    <Container>

    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/restaurant/:id' element={<Detailes/>}/>
    </Routes>
    </Container>
   
    </Router>
  );
}

export default App;
