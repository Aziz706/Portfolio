import React from 'react';
import {motion} from "framer-motion"
import {fadeIn} from "../variants"
import Img1 from "../assets/portfolio-img1.png"
import Img2 from "../assets/portfolio-img2.png"
import Img3 from "../assets/portfolio-img3.png"
const Work = () => {
  return (
  <section className='section' id='work'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div 
        variants={fadeIn("right", 0.3)}  
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once: false, amount: 0.3}}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>My Latest <br />Work.</h2>
            <p className='max-w-sm mb-[90px]'>Here are a few projects I've worked on recently. Feel free to ask any questions if you have.</p>
            <a href='https://github.com/Aziz706' className='btn btn-sm p-5 text-sm' target="_blank">View all projects</a>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>KingBurger</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-2xl text-white'><a href='https://aziz706.github.io/KingBurger/' target="_blank"><i className='bx bx-book-content'></i> Demo </a> | <a href="https://github.com/Aziz706/KingBurger" target="_blank"><i className='bx bxl-github' ></i> Github</a></span></div>
          </div>
        </motion.div>
        <motion.div
         variants={fadeIn("left", 0.2)}  
         initial="hidden" 
         whileInView={"show"} 
         viewport={{once: false, amount: 0.3}}
         className='flex-1 flex flex-col gap-y-10'>
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>LUMIA</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-2xl text-white'><a href='https://aziz706.github.io/Lumia/' target="_blank"><i className='bx bx-book-content'></i> Demo </a> | <a href="https://github.com/Aziz706/Lumia" target="_blank"><i className='bx bxl-github' ></i> Github</a></span></div>
          </div >
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>  
            <div className='group-hover:bg-black/70  0 w-full h-full absolute z-40 transition-all duration-300'></div>
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Cafeteria</span></div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'><span className='text-2xl text-white'><a href='https://aziz706.github.io/Coffe-website/' target="_blank"><i className='bx bx-book-content'></i> Demo </a> | <a href="https://github.com/Aziz706/Coffe-website" target="_blank"><i className='bx bxl-github' ></i> Github</a></span></div>
          </div>
        </motion.div>
      </div>  
    </div>
  </section>
  )
};

export default Work;
