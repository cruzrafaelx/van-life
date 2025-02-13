import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetails from './pages/Vans/VanDetails';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import "./server"


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/host' element={<Dashboard/>}></Route>
            <Route path='/host/income' element={<Income/>}></Route>
            <Route path='/host/reviews' element={<Reviews/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/vans' element={<Vans/>}></Route>
            <Route path='/vans/:id' element={<VanDetails/>}></Route>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
    
  );
}

export default App;
