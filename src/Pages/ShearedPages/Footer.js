import React from 'react';
import AnimationLogo from '../../Assit/AnimationLogo';
import Category from '../../Assit/Carousel/Category';
import Social from '../../Assit/Social';

const Footer = () => {
  return (
    <footer className='relative'>
      <div className="bg-[url('https://i.ibb.co/XVh9V1t/footer.png')] bg-[#212126] " >
        <div className='pt-40 flex w-full justify-center items-center'>
          <div>
            <button className='bg-gray-800 px-4 py-1  text-white hover:text-black hover:bg-white border rounded-[50px]'>HELP & SUPPORT</button>
          </div>
          <>
            <AnimationLogo/>
          </>
          <div>
            <button className='bg-gray-800 px-4 py-1  text-white hover:text-black hover:bg-white border rounded-[50px]'>HELP & SUPPORT</button>
          </div>
        </div>
        <div className='justify-center flex'>
          <Social/>
          
        </div>
        <>
        <Category/>
        </>
        <p className='py-10 text-[#c18b4d]'>COPYRIGHT ©2015- 2023 BORBIBI.COM . ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;