import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Me from '../../assets/Forhad.png';
import Resume from '../../assets/resume .pdf';
const Home = () => {
  return (
    <section id='home'  name='home' className='bg-[#0A192F] w-full '>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col-reverse gap-10 px-4 mt-32 1 lg:flex-row md:px-0">
            <div data-aos="fade-right" data-aos-duration="1000" className='flex-1 mb-5 md:mb-0'>
                <p className='text-[#47B5FF] font-semibold text-xl'>Hello! I am</p>
                <h2 className='mb-5 text-2xl font-bold text-gray-100 sm:text-2xl md:text-3xl lg:text-7xl'>Forhad Hossen</h2>
                <h3 className='text-[#47B5FF] mb-4 sm:text-2xl font-bold  md:text-3xl lg:text-4xl'> Frontend Developer.</h3>
                <p className='mb-5 text-lg text-gray-400 md:text-xl'>I’m a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive React applications.</p>
               <div className="flex flex-wrap">
               
               <a href="https://m.me/Forhad9034"><button className='btn text-[#0A192F] font-bold uppercase flex items-center gap-4 tracking-wider mt-5 w-fit btn-primary mr-5'  >Hire Me <BsArrowRight size={20} className='hover:rotate-[90deg] duration-500'/></button></a>
               <a href={Resume} download  ><button className='btn text-[#fff] font-bold uppercase tracking-wider hover:text-[#0A192F] transition-all hover:bg-[#47B5FF] mt-5 flex gap-4'>Download CV  <BsArrowRight size={20} className='hover:rotate-[90deg] duration-500'/></button></a>          
               </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000" className='flex justify-center flex-1 mb-5 md:justify-end md:md-0'>
                <img src={Me} alt="Forhad" className='content-div w-96 -mt-8 rounded-t-full bg-[#47B5FF]' />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Home
