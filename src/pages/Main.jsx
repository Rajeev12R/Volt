import React from 'react'
import Home from '../components/Home';
import Work from '../components/Work';
import Team from '../components/Team';
const Main = () => {
  return (
    <>
    <Home />
    <div className="bg-gradient-to-r from-red-50 via-violet-50 to-teal-50 mt-40 work">
      <Work />
    </div>
    <Team/>
    </>
  )
}

export default Main