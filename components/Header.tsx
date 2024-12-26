import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='lg:max-w-[98%] max-w-[95%] m-auto sm:mt-[5rem] mt-[3.5rem]'>
        <h2 className='mb-[1.5rem] uppercase font-semibold text-center text-4xl sm:text-5xl lg:text-[4.7rem] lg:text-nowrap'>Timeless design, redefined spaces.</h2>

        <div className='header-parallax flex justify-between items-end h-[80vh] lg:h-[90vh] w-full m-auto lg:bg-fixed bg-local'>

            <div className='flex flex-col lg:flex-row justify-between items-center p-[1.5rem] lg:gap-0 gap-4'>
              <p className='lg:max-w-[35%] text-white font-semibold lg:text-xl text-2xl text-center lg:text-start'>Our goal is to transform ideas into impactful architectural solutions, enhancing the way people live, work, and connect with their surroundings.</p>

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
