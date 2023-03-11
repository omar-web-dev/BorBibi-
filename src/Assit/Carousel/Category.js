import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const navItems =
        <>
            <li className="px-4  hover:text-[#c18b4d]">
                <Link to='/blogs'>Blogs</Link>
            </li>
            <li className="px-4  hover:text-[#c18b4d]">
                <Link to='/contact'>Contact Us</Link>
            </li>
            <li className="px-4  hover:text-[#c18b4d]">
                <Link to='/home'>Terms & Conditions</Link>
            </li>
            <li className="px-4  hover:text-[#c18b4d]">
                <Link to='/home'>Privacy & Policy</Link>
            </li>
            <li className="px-4  hover:text-[#c18b4d]">
                <Link to='/about-us'>Refund Policy</Link>
            </li>
            <li className="px-4  hover:text-[#c18b4d]">
                <Link to='/service'>FAQ</Link>
            </li>

            <li className="px-4  hover:text-[#c18b4d]">
                <Link to='/search'>Tell a Friend</Link>
            </li>
        </>
    return (
        <div className="navbar-end hidden md:w-full md:flex mt-4">
            <ul tabIndex={0} className="text-xl flex w-full justify-center text-white">
                {navItems}
            </ul>
        </div>
    );
};

export default Category;