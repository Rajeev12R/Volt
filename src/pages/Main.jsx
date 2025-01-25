import React from 'react'
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Work from '../components/Work';
import Team from '../components/Team';
const Main = () => {
  return (
    <>
    <Navbar />
    <Home />
    <div className="bg-gradient-to-r from-red-50 via-violet-50 to-teal-50 mt-40 work">
      <Work />
    </div>
    <Team/>
    <Footer/>
    </>
  )
}

export default Main