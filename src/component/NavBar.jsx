import React, { useEffect } from 'react';
import Headerlogo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";
import menu from "../assets/Ham.svg";
import { Cancel } from '@mui/icons-material';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  const menuOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <nav className='flex z-[1] font-Mulish sm:px-5 lg:px-[70px] py-[16px] justify-between items-center w-full sm:h-16 lg:h-[93px] bg-[#FFF6E9] shadow-nav'>
      <div className='flex gap-4'> 
        <img className='sm:block cursor-pointer lg:hidden' onClick={menuOpen} src={menu} alt="menu icon" />
        {open && <div className={`fixed inset-0 bg-[#FFF6E9] z-10 flex flex-col items-center justify-center ${open ? 'animate-slideInLeft' : 'animate-slideOutLeft'}`}>
          <Cancel className='absolute top-5 left-5 cursor-pointer' onClick={menuOpen} />
          <ul className='flex flex-col gap-8 items-center'>
            <li className='text-2xl font-medium text-[#3B383A]'><a href="#">WINE</a></li>
            <li className='text-2xl font-medium text-[#3B383A]'><a href="#">SPIRITS</a></li>
            <li className='text-2xl font-medium text-[#3B383A]'><a href="#">BEERS</a></li>
            <li className='text-2xl font-medium text-[#3B383A]'><a href="#">BARREL PICKS</a></li>
          </ul>
        </div>}
        <img className='w-32 h-[61px] sm:h-14' src={Headerlogo} alt="header logo" />
      </div>
      <div>
        <ul className='sm:hidden lg:flex gap-12 items-center justify-between'>
          <li className='text-lg font-medium text-[#3B383A]'><a href="#">WINE</a></li>
          <li className='text-lg font-medium text-[#3B383A]'><a href="#">SPIRITS</a></li>
          <li className='text-lg font-medium text-[#3B383A]'><a href="#">BEERS</a></li>
          <li className='text-lg font-medium text-[#3B383A]'><a href="#">BARREL PICKS</a></li>
        </ul>
      </div>
      <div className='flex gap-5'>
        <img className='w-6 h-6' src={cart} alt="cart icon" />
        <img className='w-6 h-6' src={profile} alt="profile icon" />
      </div>
    </nav>
  );
};

export default NavBar;
