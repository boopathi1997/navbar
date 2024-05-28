import React from 'react'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
    <div className='logo'>
        </div>
        <h1>logo</h1>


    <div className='navs'>
        <a href='/home'>Home</a>
        <a href='/products'>Products</a>
        <a href='/about'>About</a>
        <a href='/Contacts'>Contacts</a>

        </div>

    </div>
  )
}

export default Navbar