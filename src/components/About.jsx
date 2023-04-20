import React from 'react';

import CountUp from "react-countup"
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import Resume from "../assets/resume.pdf"
const About = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-[50px] lg:gap-y-0 h-screen">
          <motion.div 
          variants={fadeIn("right", 0.3)}  
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-cover bg-about bg-no-repeat h-[640px] mix-blend-normal bg-top'></motion.div>
          
          <motion.div
          variants={fadeIn("left", 0.5)}  
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount: 0.3}}
          className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>
              I'm a Freelance Front-end Developer with over a year of experience
            </h3>
            <p className='mb-6'>Junior Web Developer specializing in front end development.
            Experienced with all stages of the development cycle for dynamic
            web projects. Well-versed in numerous programming languages
            including HTML5, TypeScript, React, Redux, Redux-toolkit, JavaScript, CSS. Strong
            background in project management and customer relations</p>
   
              <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>{inView ? <CountUp start={0} end={2} duration={3} /> : 2}</div>
                  <div className='font-primary text-sm tracking-[2px]'>Years of <br />Experience</div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>{inView ? <CountUp start={0} end={10} duration={3} /> : 10}+</div>
                  <div className='font-primary text-sm tracking-[2px]'>Projects <br />Completed</div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2'>{inView ? <CountUp start={0} end={9} duration={3} /> : 9}+</div>
                  <div className='font-primary text-sm tracking-[2px]'> Technologies<br />I know</div>
                </div>
              </div>
              <div className='flex gap-x-8 items-center'>
              <Link to="contact" smooth={true} spy={true} className='btn btn-lg pt-5 pr-10 text-sm'>
            Contact me
          </Link>
                <a href={Resume} download={"My_portfolio.pdf"} className="text-gradient btn-link">
                  My portfolio
                </a>
              </div>
          </motion.div>
      </div>
    </div>
  </section>)
};

export default About;
