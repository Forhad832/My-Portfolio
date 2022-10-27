import React, { useState } from 'react';
import skillsdata from './skillsdata';

const Allbrand = ['All', ...new Set(skillsdata.map((item)=> item.brand))];
const Skills = () => {
  const [skills,setSkills] = useState(skillsdata)


  const [brand,setBrand] = useState(Allbrand);
  
    const filtered = (brand)=>{
        if(brand === 'All'){
          setSkills(skillsdata)
            return
        }
        const newItems = skillsdata.filter((item)=> item.brand === brand);

        setSkills(newItems)
    }
  return (
    <section id='skill' className='bg-[#0a192f] px-4 md:px-0'>
      <div className="container mx-auto">
      <div className='text-center'>
      <p className='text-[#47b5ff] text-lg font-semibold'>I have This Skills</p>
                <h2 className='inline text-gray-100 text-4xl font-bold border-b-4 border-[#47B5FF]'>Skills</h2>
          </div>
          <div className='max-w-[1000px] mx-auto mt-32'>
           
          {brand.map((brand,index)=>{
        return (
            <button  to='' className={`'btn mr-4 ml-5' ${brand === brand && 'btn btn-primary'}`} key={index} onClick={()=> filtered(brand)}>{brand}</button>
        )
      })}
         
                <div className="grid grid-cols-2 gap-10 md:grid-cols-3 mt-28">
                    {skills.map((item)=>{
                        const {id,name,img,info} = item
                        return (
                            <div key={id} className='px-4 py-3 shadow-2xl bg-[#112747] rounded-md text-center'>
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
