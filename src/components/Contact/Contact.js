
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import Border from '../Border/Border';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_gqvb8wj', 'template_usftwjc', form.current, 'h7ppidTHRSaouGNGN')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
    };
   
  return (
    <section className='bg-[#0a192f]' id='contact'>
      <div className="container px-4 mx-auto ">
      <div className='text-center'>
              <p className='text-[#47b5ff] text-sm font-semibold'>contact us</p>
                <h2 className='mb-5 text-3xl font-bold text-gray-100 md:text-4xl '>Contact With Me</h2>
              <Border />
        </div>

        <div className="grid grid-cols-1 gap-20 mt-32 md:grid-cols-2">
                <div data-aos="fade-right"
                data-aos-duration="1000"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='flex flex-col items-center gap-10 px-10 py-5 rounded-lg '>
                 <div className='flex flex-col justify-between px-4 md:px-0 w-80 content-center-center'>
                 <div className='mb-4 bg-[#2c2c6c] px-5 py-10 rounded-lg text-center'>
                         <div><MdOutlineMail className='mx-auto mb-3 text-gray-200' size={25} /></div>
                        <h3 className='mb-2 text-xl text-white'>Email</h3>
                      
                     
                        <a href="mailto:forhadhossain0619@gmail.com" className='text-[#47b5ff]'>Send a message</a>
                   </div>
                   <div className='mb-4 bg-[#2c2c6c] px-5 py-10 rounded-lg text-center'>
                         <div><RiMessengerLine className='mx-auto mb-3 text-gray-200' size={25} /></div>
                        <h3 className='mb-2 text-xl text-white'>Messenger</h3>
                      
                       
                        <a href="https://m.me/Forhad9034" className='text-[#47b5ff]'>Send a message</a>
                   </div>
                   <div className='mb-4 bg-[#2c2c6c] px-5 py-10 rounded-lg text-center'>
                         <div><BsWhatsapp className='mx-auto mb-3 text-gray-200' size={25} /></div>
                        <h3 className='mb-2 text-xl text-white'>Whats App</h3>
                      
                        
                        <a href="https://api.whatsapp.com/send?phone=01797911253" className='text-[#47b5ff]'>Send a message</a>
                   </div>
                 </div>
         
                </div>
                <div data-aos="fade-left"
                data-aos-duration="1000"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='bg-[#2c2c6c] px-2 md:px-10 py-5 rounded-lg'>
                <form ref={form} onSubmit={sendEmail}>
                        <label className='text-xl text-[#47b5ff] '>Name</label>
                        <input className='outline-none my-4 w-full py-2 rounded-lg border-2 border-[#47b5ff] px-4' type="text" name="user_name" />
                        <label className='text-xl text-[#47b5ff]  '>Email</label>
                        <input className='outline-none my-4 w-full py-2 rounded-lg border-2 border-[#47b5ff] px-4' type="email" name="user_email" />
                        <label className='text-xl text-[#47b5ff] mb-2'>Message</label>
                        <textarea className='outline-none my-4 w-full py-2 h-60 rounded-lg border-2 border-[#47b5ff] px-4' name="message" />
                        <input  className='cursor-pointer outline-none btn-primary text-lg font-bold w-full py-2 rounded-lg border-2 border-[#47b5ff] px-4' type="submit" value="Send" />
                                </form>
                </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
