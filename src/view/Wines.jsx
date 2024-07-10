import React from 'react';
import { Wine } from '../constants/data';

const Wines = () => {
  return (
    <section id='wine' className='bg-sectionbg sm:px-5 lg:px-section-x py-section-y'>
      <h1 className='font-Mulish '>WINE</h1>
      <div className='grid grid-cols-2 sm:w-full sm:grid-cols-1 lg:grid-cols-3 justify-between gap-6'>
        {Wine.map((item, index) => (
          <div key={index} className='flex flex-col sm:w-[full] lg:w-[395px]'>
            <img className='w-[full] h-[430px] object-cover' src={item.img} alt="" />
            <h1 className='font-Mulish mt-5 text-black font-bold sm:text-sm sm:font-normal text-base'>{item.name}</h1>
            <div className='flex justify-between items-center'>
              <div className='flex mt-4 gap-2'>
                <p className='font-Mulish text-[#3B383A] font-normal text-base'>{item.price}</p>
                <p className='font-Mulish line-through text-[#3B383A] opacity-50 font-light text-base'>{item.priceChange}</p>
              </div>
              <a className='uppercase text-[#698474] font-medium text-base underline font-Mulish' href="#">Add to cart</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Wines;
