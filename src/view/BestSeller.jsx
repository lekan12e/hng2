import React from 'react'
import { bestSeller } from '../constants/data'

const BestSeller = () => {
  return (
    <section id='' className='bg-[#FFF6E9] flex flex-col lg:gap-5 sm:gap-2 py-8 sm:px-5 lg:px-[70px]'>
        <div className='text-start'>
            <h1 className='font-Mulish font-extralight lg:tracking-normal sm:tracking-[4px] text-xs text-[#1A1A1A]'>BEST SELLERS</h1>
        </div>
        <div className='flex sm:flex-col lg:flex-row gap-6 justify-between'>
            {bestSeller.map((item) => (
                <div key={item.id} className='flex flex-col w-[full]'>
                    <img className='w-[full] h-[430px]' src={item.img} alt="" />
                    <h1 className='font-Mulish mt-5 text-black font-bold text-base'>{item.name}</h1>
                    <div className='flex justify-between items-center'>
                        <div className='flex mt-4 gap-2'>
                            <p className='font-Mulish text-[#3B383A] font-light text-base'>{item.price}</p>
                            <p className='font-Mulish line-through text-[#3B383A] font-light text-base'>{item.priceChange}</p>
                        </div>
                        <a className='uppercase text-[#698474] font-medium text-base underline font-Mulish' href="#">Add to cart</a>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default BestSeller