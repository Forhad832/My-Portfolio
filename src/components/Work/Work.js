import React from 'react';
import { workdata } from './wrokdata';
const Work = () => {
  return (
    <section className='bg-[#0a192f] ' id='work'>
      <div className="container px-4 mx-auto md:px-0">
      <div className='text-center'>
              <p className='text-[#47b5ff] text-lg font-semibold'>I have Created many websites</p>
                <h2 className='inline text-gray-100 text-4xl font-bold border-b-4 border-[#47B5FF]'>Portoflio Work</h2>
            </div>

         


            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-44">
            {workdata.map((work)=>{
                const {id,image,btn1,btn2,text,url,codeUrl}= work
                return (
                    <div key={id} className='text-gray-300 bg-transparent rounded-md shadow-lg same-height '>
                    <img src={image} alt="" className='w-full h-56 img' />
                       <div className='px-4'>
                    
                        <div className='flex gap-4 my-4'>
                            <a target='_blank' href={url} className='btn btn-primary text-[#0a192f]'>{btn1}</a>
                            <a href={codeUrl} className='btn'>{btn2}</a>
                            
                        </div>
                        <p className='mb-3 text-lg font-semibold text-[#47b5ff]'>{text}</p>
                       </div>
                    </div>
                )
            })}
            </div>
           <div>
          
           </div>
 
      </div>
    </section>
  )
}

export default Work
