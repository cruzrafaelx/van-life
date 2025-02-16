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
import HostVans from './pages/Host/HostVans';
import HostVanDetails from './pages/Host/HostVanDetails';
import Reviews from './pages/Host/Reviews';
import VansDetailsPhotos from './pages/HostVanDetails/VansDetailsPhotos';
import VansDetailsPricing from './pages/HostVanDetails/VansDetailsPricing';
import VansDetailsSub from './pages/HostVanDetails/VansDetailsSub';
import NotFound from './pages/NotFound';
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
              <Route path='hostvans' element={<HostVans/>}></Route>
              <Route path='reviews' element={<Reviews/>}></Route>
              <Route path='hostvans/:id' element={<HostVanDetails/>}>
                <Route index element={<VansDetailsSub/>}></Route>
                <Route path='vansdetailspricing' element={<VansDetailsPricing/>}></Route>
                <Route path='vansdetailsphotos' element={<VansDetailsPhotos/>}></Route>
              </Route>
            </Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
    
  );
}

export default App;
