import Image from 'next/image';
import React from 'react';
import Button from './Button';
import ScrollWrapper from './ScrollWrapper';

const About = () => {
  return (
    <section className='mt-[10rem] max-w-[80%] m-auto'>

      <ScrollWrapper>
      <div className='lg:grid lg:grid-cols-2 lg:gap-4 flex flex-col'>
        <div>
          <h1 className='text-xl font-semibold text-gray-700 mb-5'>About Prisma</h1>
          <p className='line-height text-xl lg:text-4xl lg:leading-[3rem] font-medium mb-8 lg:mb-0'>Prisma Architecture is dedicated to crafting innovative and sustainable designs that seamlessly blend beauty, functionality, and purpose.</p>
        </div>

        <div>
          <Image 
              src='/about.jpg'
              alt='About image'
              width={1500}
              height={1500}
              className='lg:w-[500px] lg:h-[500px] m-auto w-[350px] h-[350px] object-cover'
          />
        </div>
      </div>
      </ScrollWrapper>

        <ScrollWrapper>
       <div className='mt-[10rem]'>
        <h1 className='text-xl font-semibold text-gray-700 mb-5 text-center'>Our Heritage</h1>
        <p className='line-height text-xl lg:text-4xl font-medium text-center'>Founded on the principles of innovation and excellence, Prisma Architecture began as a small studio with a bold vision: to redefine modern spaces.</p>
       
       <div className='flex justify-center mb-[4rem] mt-[2rem]'>
        <Button 
            type='button' 
            title='Read more' 
            variant='btnVariant2' />
       </div>

        <Image 
              src='/about2.jpg'
              alt='About image'
              width={1500}
              height={1500}
              className='w-full h-[500px] lg:h-[800px] object-cover'
        />
       </div>
       </ScrollWrapper>
    </section>
  )
}

export default About