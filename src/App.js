import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetails from './pages/Vans/VanDetails';
import Layout from './components/Layout';
import HostLayout from './components/HostLayout';
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
            <Route path='about' element={<About/>}></Route>
            <Route path='vans' element={<Vans/>}></Route>
            <Route path='vans/:id' element={<VanDetails/>}></Route>
            
            <Route path='host' element={<HostLayout/>}>
              <Route index element={<Dashboard/>}></Route>
              <Route path='income' element={<Income/>}></Route>
              <Route path='reviews' element={<Reviews/>}></Route>
            </Route>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
    
  );
}

export default App;
