import React from 'react';
import './App.css';
import Main from './pages/Main';
import Client from './pages/Client';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div className='w-full h-full bg-neutral-100 px-4 overflow-hidden'>
      <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/clients' element={<Client/>} />
      </Routes>
    </div>
  );
}

export default App;
