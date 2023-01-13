import React from 'react'
import { Link } from "react-router-dom";
import './hero.css'

const Select = () => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const hero = 'j.a-foods'
document.title = `${capitalizeFirstLetter(hero)}`
  return (
    <div className='hero'>
      <ul className='hero-menu'>
        <li><Link to="/burger" >Burger</Link></li>
        <li><Link to="/pizza" >Pizza</Link></li>
        <li><Link to="/biryani" >Biryani</Link></li>
      </ul>
    </div>
  )
}

export default Select