import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';
import SimpleSlider from './components/HeroCarousel';
import HeroSection from './components/HeroSection';
import OurBestSellers from './components/OurBestSellers';
import Ingridients from './components/Ingridients';
import JournalSection from './components/JournalSection';
import BsText from './components/BsText';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SinglePage from "./components/SinglePage";
import JournalPage from "./components/JournalPage";
import Cart from './components/Cart';
import FollowONIG from './components/FollowONIG';
import Products from './components/Products';
import CartHold from './components/CartHold';
import SPFooter from './components/SPFooter';
import MobileNav from './components/MobileNav';
import CrossDrive from './components/CrossDrive';
import SecuraDrive from './components/SecuraDrive';
import Offroad from './components/Offroad';
import Sports from './components/Sports';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes >
          <Route path='/' exact element={<>   <NavBar /> <MobileNav />  <SimpleSlider />  <HeroSection />  <BsText />  {<Products />}  <OurBestSellers />  <Ingridients />  <JournalSection /> {/*<FollowONIG />*/} <SPFooter />  </>} />
          <Route path='/:id' exact element={<> <NavBar /> <MobileNav />  <SinglePage /> </>} />
          <Route path='/journal/april' element={<> <NavBar /> <MobileNav />  <JournalPage /> </>} />
          <Route path='/cart' exact element={<>  <NavBar /> <CartHold /></>} />
          <Route path='/CrossDrive' element={<> <NavBar />  <CrossDrive /> </>} />
          <Route path='/SecuraDrive' element={<> <NavBar />  <SecuraDrive /> </>} />
          <Route path='/Offroad' element={<> <NavBar />  <Offroad /> </>} />
          <Route path='/Sports' element={<> <NavBar />  <Sports /> </>} />
        </Routes>

      </BrowserRouter>




    </div>
  );
}

export default App;
