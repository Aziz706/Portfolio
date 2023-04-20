import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between itece">
          <a href="">
            <img style={{width: "100px", height: "50px", marginBottom:"30px"}} src={Logo} alt="" />
          </a>
          <Link to="contact" smooth={true} spy={true} className='btn btn-sm p-4 text-sm'>
            Work with me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
