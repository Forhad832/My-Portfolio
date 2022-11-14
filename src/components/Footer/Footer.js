import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import Logo from '../../assets/logo.png';
import ScrollButton from '../SCroll/ScrollButton';
const Footer = () => {
  return (
    <footer className='bg-[#2c2c6c] py-5'>
      <div data-aos="fade-up"
      data-aos-duration="2000"
     data-aos-anchor-placement="top-bottom" className="container px-4 mx-auto">
        <a href="#home"><div className="flex items-center gap-3"><img src={Logo} alt="logo" width={50}/><span className='prose text-gray-100 lg:prose-xl'>Forhad</span></div></a>
      
        <div className="grid grid-cols-1 gap-12 my-16 md:grid-cols-3">
          <article className='prose lg:prose-sm'>
            <h3 className='text-gray-300'>About Me</h3>
            <div className="flex flex-col mt-5 prose prose-a:no-underline">
            <a className='text-gray-400 ' href="#home"> Home</a>
            <a  className='text-gray-400 ' href="#about"> About</a>
            <a className='text-gray-400 ' href="#skill"> Skills</a>
            <a className='text-gray-400 ' href="#work">Work</a>
            <a className='text-gray-400 ' href="#contact">Contact</a>
            </div>
          </article>
          <article className='prose lg:prose-sm'>
            <h3 className='text-gray-300'>Language</h3>
            <div className="flex gap-4 mt-5 prose prose-a:no-underline">
            <button className='text-lg text-gray-400' >Bangla </button>
            <button  className='text-lg text-gray-400 ' > English</button>
            <button className='text-lg text-gray-400'> Hindi</button>
            </div>
          </article>
          <article className='prose lg:prose-sm'>
            <h3 className='text-gray-300 '>Get in Touch</h3>
            <div className="flex gap-5 pt-5 prose prose-a:no-underline">
             <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com/Forhad9034"><FiFacebook className='text-gray-100' size={25} /></a>
             <a target='_blank' rel="noopener noreferrer" href="https://mobile.twitter.com/Forhad9034"><FiTwitter className='text-gray-100' size={25} /></a>
             <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com/abrarforhad"><FiInstagram className='text-gray-100' size={25} /> </a>
             <a target='_blank' rel="noopener noreferrer" href="https://github.com/Forhad832"><BsGithub className='text-gray-100 ' size={25}/></a>
            
            </div>
          </article>
        </div>
           <div className="flex justify-between ">
           <p className='text-sm text-slate-300'>© copyright 2022 Forhad Hossen. All Rights Reserved.</p>
           <div>
            <ScrollButton />
           
           </div>
           </div>
      </div>
    </footer>
  )
}

export default Footer
