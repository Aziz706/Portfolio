import React from "react";
import Image from "../assets/avatar.jpg";
import { FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";
import Resume from "../assets/resume.pdf"

const Banner = () => {
  return (
    <section className="section min-h-[85] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1 
            variants={fadeIn("up", 0.3)}  
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.7}} 
            className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              Aziz <span>Murodov</span>
            </motion.h1>

            <motion.div
            variants={fadeIn("up", 0.4)}  
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.7}}             
            className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2500, // Waits 1s
                  "Markup developer", // Deletes 'One' and types 'Two'
                  2500, // Waits 2s
                  "React Developer",
                  2000,
                  "Web Developer",
                  1000,
                ]}
                speed={50}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                // style={{ fontSize: '2em', display: 'inline-block' }}
                className={"text-accent"}
              />
            </motion.div>

            <motion.p 

            variants={fadeIn("up", 0.5)}  
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.7}} 
            className="mb-8 max-w-lg mx-auto lg:mx-0">Junior Web Developer specializing in front end development.</motion.p>
            
            <motion.div
            variants={fadeIn("up", 0.6)}  
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount: 0.7}} 
            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 ">
              <Link to="contact" smooth={true} spy={true} className='btn btn-lg pt-5 pr-10 text-sm'>
            Contact me
          </Link>
            <a href={Resume} download={"My_portfolio.pdf"} className="text-gradient btn-link">
                  My portfolio
                </a>
            </motion.div>

                <motion.div 
                variants={fadeIn("up", 0.7)}  
                initial="hidden" 
                whileInView={"show"} 
                viewport={{once: false, amount: 0.7}} 
                className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                  <a href="https://github.com/Aziz706" target="_blank"><FaGithub /></a>
                  <a href="https://t.me/no_ndjdjdjdj333" target="_blank"><FaTelegram /></a>
                  <a href="https://instagram.com/azizbek_m079?igshid=ZDdkNTZiNTM=" target="_blank"><FaInstagram /></a>
                </motion.div>
          </div>
          <motion.div 
          variants={fadeIn("down", 0.3)}  
          initial="hidden" 
          whileInView={"show"} 
          className="hidden lg:flex flex-1 max-w-[320px]">
            <img
              style={{
                borderRadius: "100px 100px 100px 100px",
                width: "350px",
                // marginTop: "100px"
              }}
              src={Image}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
