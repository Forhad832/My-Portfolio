import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/logo.png';
const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleClick = ()=>{setNav(!nav)}
  return (
    <header className='bg-[#0A192F]  w-full px-4 fixed z-10'>
      <nav className='container flex items-center justify-between h-20 px-4 py-4 mx-auto text-white shadow-2xl md:px-0'>
        <div className="logo">
            <img src={Logo} style={{width:"60px"}} alt='Logo' className='object-cover 0'/>
        </div>
        <div className='hidden gap-8 md:flex'>
            <a className='text-xl text-gray-300' href="#home"><span className='text-green-500'>01.</span> Home</a>
            <a  className='text-xl text-gray-300' href="#about"><span className='text-green-500'>02.</span> About</a>
            <a className='text-xl text-gray-300' href="#skill"><span className='text-green-500'>03.</span> Skills</a>
            <a className='text-xl text-gray-300' href="#work"><span className='text-green-500'>04.</span> Work</a>
            <a className='text-xl text-gray-300' href="#contact"><span className='text-green-500'>05.</span> Contact</a>
        </div>
        <div className='z-10 cursor-pointer md:hidden' onClick={handleClick}>
            {nav ?  <FaTimes size={30}/> : <FaBars size={30}/>}
            
           
        </div>
        <div className={!nav ? 'hidden' : ' nav w-full left-0 absolute z-10 top-20 justify-center items-center  h-screen flex flex-col gap-8'}>
            <a onClick={handleClick} className='py-1 text-xl text-gray-300' href="#home">Home</a>
            <a onClick={handleClick} className='py-1 text-xl text-gray-300' href="#about">About</a>
            <a onClick={handleClick} className='py-1 text-xl text-gray-300' href="#skill">Skills</a>
            <a onClick={handleClick} className='py-1 text-xl text-gray-300' href="#work">Work</a>
            <a onClick={handleClick} className='py-1 text-xl text-gray-300' href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
