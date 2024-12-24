import Image from 'next/image'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import ScrollWrapper from './ScrollWrapper'

const Projects = () => {
  return (  

    <ScrollWrapper>
      <section className='max-w-[90%] m-auto mt-[10rem]'>
      
      <div className='flex justify-between mb-8'>
        <h1 className='font-semibold text-gray-600'>Our Projects</h1>
        <span className='cursor-pointer hover:underline'>See all</span>
      </div>

      <Carousel>
  <CarouselContent>
    <CarouselItem className='lg:grid grid-cols-2 flex flex-col'>

      <Image src='/project1.jpg' alt='Project 1' width={800} height={800} className='w-[350px] h-[350px] object-cover m-auto'/>

     <div className='mt-5 lg:mt-0'>
      <h1 className='text-4xl font-medium'>Aurora Tower</h1>
      <p className='font-medium'>A sleek residential skyscraper combining modern elegance with eco-friendly design, offering panoramic city views.</p><br />
      <span className='italic'>New York, USA</span>
     </div>

    </CarouselItem>
    
    <CarouselItem className='lg:grid grid-cols-2 flex flex-col'>
      
      <Image src='/project2.jpg' alt='Project 1' width={800} height={800} className='w-[350px] h-[350px] object-cover m-auto'/>

     <div className='mt-5 lg:mt-0'>
      <h1 className='text-4xl font-medium'>Haven Pavilion</h1>
      <p className='font-medium'>A serene cultural center blending traditional Japanese aesthetics with contemporary minimalism.</p><br />
      <span className='italic'>Kyoto, Japan</span>
     </div>

    </CarouselItem>

    <CarouselItem className='lg:grid grid-cols-2 flex flex-col'>
      
      <Image src='/project3.jpg' alt='Project 1' width={800} height={800} className='w-[350px] h-[350px] object-cover m-auto'/>

     <div className='mt-5 lg:mt-0'>
      <h1 className='text-4xl font-medium'>Solara Estate</h1>
      <p className='font-medium'>A luxury villa integrating natural materials and open spaces for a seamless indoor-outdoor living experience.</p><br />
      <span className='italic'>Barcelona, Spain</span>
     </div>

    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious  className='hidden lg:flex'/>
  <CarouselNext  className='hidden lg:flex'/>
</Carousel>
    </section>
    </ScrollWrapper>
  )
}

export default Projects
