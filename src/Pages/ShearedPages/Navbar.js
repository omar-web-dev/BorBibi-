import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { FaUserPlus, FaUser } from 'react-icons/fa';
import Social from "../../Assit/Social";
import AnimationLogo from "../../Assit/AnimationLogo";


const Navbar = () => {

  const navItems =
    <>
      <li className="px-4"><Link to='/home'>Home</Link></li>
      <li className="px-4"><Link to='/about-us'>About Us</Link></li>
      <li className="px-4"><Link to='/service'>Our Service</Link></li>
      <li className="px-4"><Link to='/blogs'>Blogs</Link></li>
      <li className="px-4"><Link to='/search'>Search</Link></li>
      <li className="px-4"><Link to='/contact'>Contact Us</Link></li>
    </>

  return (
    <div className=" w-full bg-gray-300 ">
      <div className="opacity-100 flex justify-around items-center">
        <Social />
        <div className="logo flex justify-center items-center">
          <div className="w-[15%] ">
            <img src="https://i.ibb.co/mvVtVH1/navigation-shape1.png" alt="navigation-shape1" />
          </div>
          <AnimationLogo />
          <div className="w-[15%]">
            <img className="" src="https://i.ibb.co/jvf0cV0/navigation-shape2.png" alt="navigation-shape2" />
          </div>
        </div>
        <div className="in_page flex">
          <button className="login-btn mr-4">
            <FaUser />
            Login
          </button>
          <button className="register-btn">
            <FaUserPlus className="icon" />
            Register
          </button>
        </div>
      </div>
      <div className="navbar-end hidden md:w-full md:flex">
        <ul tabIndex={0} className="text-2xl flex w-full justify-center">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;