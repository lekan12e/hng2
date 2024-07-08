import React from 'react'
import Headerlogo from "../assets/logo.svg"
import cart from "../assets/cart.svg"
import profile from "../assets/profile.svg"

const NavBar = () => {
  return (
    <nav className='flex z-[1] font-Mulish px-[70px] py[16px] justify-between items-center w-full h-[93px] bg-[#FFF6E9] shadow-nav'>
        <div><img className='w-32 h-[61px]' src={Headerlogo} /></div>
        <div>
            <ul className='flex gap-12 items-center justify-between'>
                <li className='text-lg font-medium text-[#3B383A]'><a href="">WINE</a></li>
                <li className='text-lg font-medium text-[#3B383A]'><a href="">SPRIT</a></li>
                <li className='text-lg font-medium text-[#3B383A]'><a href="">BEERS</a></li>
                <li className='text-lg font-medium text-[#3B383A]'><a href="">BARREL PICKS</a></li>
            </ul>
        </div>
        <div className='flex gap-5'>
            <img className='w-6 h-6' src={cart} alt="" />
            <img className='w-6 h-6' src={profile} alt="" />
        </div>
    </nav>
  )
}

export default NavBar