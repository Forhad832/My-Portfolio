import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Me from '../../assets/Forhad.png';
import Resume from '../../assets/resume .pdf';
const Home = () => {
  return (
    <section id='home'  name='home' className='bg-[#0A192F] w-full '>
      <div className="container px-4 mx-auto">
        <div className="grid gap-10 px-4 mt-32 md:grid-cols-2 md:px-0">
            <div className='mb-5 md:mb-0'>
                <p className='text-[#47B5FF] font-semibold text-xl'>Hello! I am</p>
                <h2 className='mb-5 text-4xl font-bold text-gray-100 md:text-7xl'>Forhad Hossen</h2>
                <h3 className='text-[#47B5FF] mb-4 text-3xl font-bold  md:text-4xl'> Frontend Developer.</h3>
                <p className='mb-5 text-xl text-gray-400'>I’m a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive React applications.</p>
               <div className="flex">
               <button className='btn text-[#0A192F] font-bold uppercase flex items-center gap-4 tracking-wider mt-5 w-fit btn-primary mr-5'  >Hire Me <BsArrowRight size={20} className='hover:rotate-[90deg] duration-500'/></button>
               
               <a href={Resume} download  ><button className='btn text-[#fff] font-bold uppercase tracking-wider mt-5 flex gap-4'>Download CV  <BsArrowRight size={20} className='hover:rotate-[90deg] duration-500'/></button></a>          
               </div>
            </div>
            <div className='flex justify-center mb-5 md:justify-end md:md-0'>
                <img src={Me} alt="Forhad" className='content-div w-96 -mt-8 rounded-t-full bg-[#47B5FF]' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home
