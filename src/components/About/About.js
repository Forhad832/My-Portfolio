import React from 'react'
import { FaAward, FaLocationArrow } from 'react-icons/fa'
import Resume from '../../assets/resume.pdf'
import Border from '../Border/Border'
const About = () => {
  return (
    <section id='about' className='bg-[#0a192f]'>
      <div className="container px-4 mx-auto ">
            <div className='text-center'>
              <p className='text-[#47b5ff] text-sm font-semibold'>Get to know Me</p>
                <h2 className='mb-5 text-3xl font-bold text-gray-100 md:text-4xl'>About Me</h2>
                <Border />
            </div>

            <div className="flex flex-col gap-20 md:flex-row pt-28">
                <div data-aos="fade-right" data-aos-duration="1000" className="flex justify-center md:block w-5/5 md:w-2/5">
                  <div className='px-4 '>
                        <p className='text-lg text-gray-400 md:text-xl line-height'>Hello! I'm Forhad Hossen, I am a frontend developer and still I am learing.I have completed Diploma in Power engineering from Rangpur Polytechnic Institute at Rangpur,Bangladesh in 2022.I am available for any kind of job opportunity that suits my interests.</p>
                        <button className='flex gap-5 my-5 text-lg tracking-wider text-white btn hover:text-[#0A192F] transition-all hover:bg-[#47B5FF]' ><a href={Resume} download>Get Resume </a> </button>
                  </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className="w-5/5 md:w-3/5 ">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                      <div className='bg-[#2c2c6c] py-5 cursor-default px-4 rounded-md text-center'>
                          <FaAward className='text-[#47b5ff] text-center mx-auto '  size={25}/>
                          <h4 className='my-2 text-xl text-gray-100'>Experience</h4>
                          <p className='text-sm text-gray-200'>I'm Still Learing</p>
                      </div>
                      <div className='bg-[#2c2c6c] cursor-default py-5 px-4 rounded-md text-center'>
                          <FaAward className='text-[#47b5ff] text-center mx-auto '  size={25}/>
                          <h4 className='my-2 text-xl text-gray-100'>Clients</h4>
                          <p className='text-sm text-gray-200'>2 Clients</p>
                      </div>
                      <div className='bg-[#2c2c6c] cursor-default py-5 px-4 rounded-md text-center'>
                          <FaAward className='text-[#47b5ff] text-center mx-auto '  size={25}/>
                          <h4 className='my-2 text-xl text-gray-100'>Projects</h4>
                          <p className='text-sm text-gray-200'>84 + Projects</p>
                      </div>
                    </div>
                    <p className='mt-10 text-lg text-gray-400 md:text-xl'>Hello! I am Forhad Hossen and I’m a frontend developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive Frontend web applications And React applications.I'm also completed Diploma in Power Engineering</p>

                    <button className='my-5 text-xl btn btn-primary' ><a className='flex gap-5' rel="noopener noreferrer" target='_blank' href="https://m.me/Forhad9034">Let's Talk <FaLocationArrow  /> </a> </button>
                </div>
            </div>
      </div>
    </section>
  )
}

export default About
