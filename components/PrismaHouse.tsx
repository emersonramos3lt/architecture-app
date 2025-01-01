import Image from 'next/image'
import React from 'react'
import ScrollWrapper from './ScrollWrapper'

const PrismaHouse = () => {
  return (
    
    <ScrollWrapper>
    <section className='mt-[10rem] max-w-[90%] m-auto'>
        <h1 className='text-gray-700 text-center font-semibold mb-4 text-xl'>Prisma House</h1>
        <h2 className='text-center font-medium text-2xl sm:text-4xl mb-14'>At the core of our essence is Prisma Hub, a thoughtfully designed space that embodies our commitment.</h2>

        <Image 
            src='/house.jpg'
            alt='House photo'
            width={2000}
            height={2000}
            className='w-full lg:h-[500px] object-cover'
        />
    </section>
    </ScrollWrapper>
  )
}

export default PrismaHouse
