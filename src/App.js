import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';
import "./server"

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className='logo' to="/">#VANLIFE</Link>
        <div className='links-right'>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </header>
      
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/vans' element={<Vans/>}></Route>
        </Routes>
      </main>
    
      <footer>
        <p>Ⓒ 2022 #VANLIFE</p>
      </footer>
    </BrowserRouter>
    
  );
}

export default App;
