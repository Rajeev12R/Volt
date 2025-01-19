import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Work from './components/Work';

const App = () => {
  return (
    <div className='w-full h-full bg-neutral-100 px-4'>
      <Navbar />
      <Home />
      <div className="bg-gradient-to-r from-red-50 via-violet-50 to-teal-50 mt-40 work">
        <Work />
      </div>
      <Footer />
    </div>
  );
}

export default App;
