import React, { useRef } from 'react';
import {motion} from "framer-motion"
import { fadeIn } from '../variants';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5emuj8n', 'template_nadhp68', form.current, 'erRfKTIC0Ll9-ycvg')
      .then((result) => {
          console.log(result.text);
          toast.success('Email was sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <div className='py-16 lg:section mb-16' id='contact'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        <motion.div 
        variants={fadeIn("right", 0.3)}  
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
          </div>
        </motion.div>
        <motion.form 
        variants={fadeIn("left", 0.3)}  
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once: false, amount: 0.3}}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
        ref={form} onSubmit={sendEmail}>
        <input required name="user_name" placeholder='Your name' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' />
          <input required name="user_email" placeholder='Your email' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='email' />
          <textarea required name="message" placeholder='Your message' className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'></textarea>
          <button type="submit" value="Send" className='btn btn-lg'>Send message</button>
        </motion.form>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      </div>
    </div>
  </div>)
};

export default Contact;
