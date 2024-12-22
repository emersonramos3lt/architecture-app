import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollWrapper from './ScrollWrapper'

const Article = () => {
  return (
    <ScrollWrapper>
    <section className='mt-[10rem] max-w-[80%] m-auto'>
       <div className='flex justify-between mb-8'>
        <h1 className='font-semibold text-gray-600'>Latest News</h1>
        <span className='cursor-pointer hover:underline'>See All</span>
      </div>

      <div className='lg:grid grid-cols-3 justify-center gap-8 w-[100%] m-auto flex flex-col'>
      <div>
            <span className='text-[0.8rem] font-medium'>01.01.2025</span>
            <Image src='/article1.jpg' alt='Article image' width={800} height={800} className='w-full h-[300px] object-cover object-center mb-[2rem] cursor-pointer'/>
            <span className='text-gray-500 font-medium'>NEWS</span>
            <h1 className='text-2xl font-medium mt-[2rem] mb-[2rem] cursor-pointer'>The Art of Sustainable Architecture: Building for the Future</h1>
            <Link href='/' className='underline text-[0.9rem]'>View Article</Link>   
        </div>
        <div>
            <span className='text-[0.8rem] font-medium'>01.01.2025</span>
             <Image src='/article2.jpg' alt='Article image' width={800} height={800} className='w-full h-[300px] object-cover object-center mb-[2rem] cursor-pointer'/>
            <span className='text-gray-500 font-medium'>NEWS</span>
            <h1 className='text-2xl font-medium mt-[2rem] mb-[2rem] cursor-pointer'>Timeless Design Principles in Modern Spaces</h1>
            <Link href='/' className='underline text-[0.9rem]'>View Article</Link>
        </div>
        <div>
            <span className='text-[0.8rem] font-medium'>01.01.2025</span>
             <Image src='/article3.jpg' alt='Article image' width={800} height={800} className='w-full h-[300px] object-cover object-center mb-[2rem] cursor-pointer'/>
            <span className='text-gray-500 font-medium'>NEWS</span>
            <h1 className='text-2xl font-medium mt-[2rem] mb-[2rem] cursor-pointer'>Blurring Boundaries: The Rise of Indoor-Outdoor Living</h1>
            <Link href='/' className='underline text-[0.9rem]'>View Article</Link>
        </div>
      </div>
    </section>
    </ScrollWrapper>
  )
}

export default Article