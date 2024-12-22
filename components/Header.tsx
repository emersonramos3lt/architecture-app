"use client"

import React from 'react'
import Button from './Button'
import { RevealWrapper } from 'next-reveal'

const Header = () => {
  return (

    <header className='max-w-[95%] m-auto mt-[3rem]'>
        <h2 className='mb-[1.5rem] uppercase font-semibold text-center text-4xl sm:text-5xl lg:text-7xl'>Timeless design, redefined spaces.</h2>

        <div className='header-parallax flex justify-between items-end h-[50vh] lg:h-[90vh] w-full m-auto lg:bg-fixed bg-local'>

            <div className='flex flex-col lg:flex-row justify-between items-center p-[1.5rem] lg:gap-0 gap-4'>
              <p className='lg:max-w-[35%] text-white font-semibold lg:text-xl text-xs'>Our goal is to transform ideas into impactful architectural solutions, enhancing the way people live, work, and connect with their surroundings.</p>

              <Button
              type='button'
              title='Explore our projects'
              variant='btnVariant1'>
              </Button>
            </div>

        </div>

        
    </header>
  )
}

export default Header