import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Work from './components/Work'

const App = () => {
  return (
    <div className='w-full h-full bg-neutral-100'>
      <Navbar/>
      <Home/>
      <div className="bg-[#e4e1e1] mt-40 work">
      <Work />
      </div>
      <Footer/>
    </div>
  )
}

export default App