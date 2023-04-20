import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "Website development",
    description: "Providing quality work to clients and companies.",
  },
  {
    name: "Building SPA Applications",
    description:
      "SPA that interacts with the user by dynamically rewriting the current web page with new data from the web server. The goal is faster transitions that make the website feel more like a native app.",
  },
  {
    name: "Markup",
    description: "Building web sites/applications based on clients requirements from technologies like Figma or Adobe XD. It may have just UX without functions and with."
  },
  {
    name: "Ecommerce development",
    description: "Ecommerce website develop is the process of executing the build plan for the backend and frontend of your ecommerce website. This includes your product pages, shopping cart, order form and support pages."
  }
];

const Services = () => {
  return (
  <section className="section" id="services">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        <motion.div
         variants={fadeIn("right", 0.3)}  
         initial="hidden" 
         whileInView={"show"} 
         viewport={{once: false, amount: 0.3}}
         className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
          <h2 className="h2 text-accent mb-6">What I Do</h2>
          <h3 className="h3 max-w-[455px] mb-16">I am a Junior Front-end Developer</h3>
          <Link smooth={true} spy={true} className="btn btn-sm p-5 text-lg cursor-pointer" to="work">See my work</Link>
        </motion.div>
        <motion.div 
        variants={fadeIn("left", 0.5)}  
        initial="hidden" 
        whileInView={"show"} 
        viewport={{once: false, amount: 0.3}}
        className="flex-1">
          <div>
            {services.map((service, index) => {
              const {name, description} = service
              return (
              <div className="border-b border-white/20 h-[156px] mb-[10px] flex" key={index}>
                <div className="max-w-[476px]">
                  <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-3">{name}</h4>
                  <p className="font-secondary leading-tight">{description}</p>
                </div>
              </div>)
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>)
};

export default Services;
