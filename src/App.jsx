import React from 'react';
import './App.css';
import Main from './pages/Main';
import Client from './pages/Client';
import Services from './pages/Services';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='w-full h-full bg-neutral-100 px-4 overflow-hidden'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/clients' element={<Client/>} />
      <Route path='/services' element={<Services/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
