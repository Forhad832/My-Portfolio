import React, { useState } from 'react';
import Border from '../Border/Border';
import skillsdata from './skillsdata';

const Allbrand = ['All', ...new Set(skillsdata.map((item)=> item.brand))];
const Skills = () => {
  const [skills,setSkills] = useState(skillsdata)
  const [active,setActive] = useState();

  
  
    const filtered = (brand)=>{
      setActive(brand)
        if(brand === 'All'){
          setSkills(skillsdata)
            return
        }
        const newItems = skillsdata.filter((item)=> item.brand === brand);

        setSkills(newItems)
    }
  return (
    <section id='skill' className='bg-[#0a192f] px-4 '>
      <div className="container mx-auto">
      <div className='text-center'>
      <p className='text-[#47b5ff] text-sm font-semibold'>I have This Skills</p>
                <h2 className='mb-5 text-3xl font-bold text-gray-100 md:text-4xl'>Skills</h2>
                <Border />
          </div>
          <div className='max-w-[1000px] mx-auto mt-32'>
           
          <div className='flex flex-wrap items-center justify-center gap-5'>{Allbrand.map((brand,index)=>{
        return (
            <button  className={`${active=== brand ? 'ml-5 border-2 text-lg px-5 rounded py-2 font-semibold border-[#47B5FF] bg-[#47B5FF]' : 'ml-5  border-2 text-lg px-5 rounded py-2 text-white border-[#47B5FF]'}`} key={index} onClick={()=> filtered(brand)}>{brand}</button>
        )
      })}</div>
         
                <div  className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 mt-28">
                    {skills.map((item)=>{
                        const {id,name,img,info} = item
                        return (
                            <div data-aos="zoom-in" data-aos-duration="2000" key={id} className='px-4 py-3 shadow-2xl bg-[#112747] rounded-md text-center'>
                            <img src={img} alt={name} className="w-24 mx-auto mb-3" />
                            <h3 className='mb-2 prose text-gray-100 lg:prose-xl'>{name}</h3>
                            <p className='text-gray-300 lg:prose-lg' >{info}</p>
                    </div>
                        )
                    })}
                   
                   
                </div>
          </div>
      </div>
    </section>
  )
}

export default Skills
