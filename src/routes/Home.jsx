import React, { useState } from 'react'
import Carditem from '../components/carditem/Carditem'
import Navbar from '../components/navbar/Navbar'


const Home = () => {


  return (
    <>
    <Navbar/>
    <div className="container">
         <Carditem />
    

    </div>
    </>
  )
}

export default Home