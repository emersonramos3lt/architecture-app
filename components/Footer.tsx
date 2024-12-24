import React from 'react'
import Form from 'next/form'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mt-[8rem] bg-footerBg p-4 py-8'>

        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:mb-[10rem] mb-[5rem] flex flex-col gap-4'>
            <div className='text-white text-[0.9rem]'>

                <div className='mb-[1.2rem]'>
                    <p className='text-zinc-400 mb-[0.8rem]'>Enquire</p>
                    <p className='cursor-pointer hover:underline'>info@prismaexample.com</p>
                    <p className='cursor-pointer hover:underline'>+1234 5678 910</p>
                </div>

                <div>
                    <p className='text-zinc-400 mb-[0.8rem]'>Press</p>
                    <p className='cursor-pointer hover:underline'>press@prismaexample.com</p>
                </div>
            </div>

            <div className='text-white text-[0.9rem]'>
                <p className='text-zinc-400 mb-[0.8rem]'>Links</p>

                <p  className='cursor-pointer hover:underline'>Products</p>
                <p  className='cursor-pointer hover:underline'>About</p>
                <p  className='cursor-pointer hover:underline'>News</p>
                <p  className='cursor-pointer hover:underline'>Contact</p>
            </div>

            <div className='text-white text-[0.9rem]'>
                <p className='text-zinc-400 mb-[0.8rem]'>Social</p>

                <p  className='cursor-pointer hover:underline'>YouTube</p>
                <p  className='cursor-pointer hover:underline'>Instagram</p>
                <p  className='cursor-pointer hover:underline'>Facebook</p>
                <p  className='cursor-pointer hover:underline'>Twitter</p>
            </div>

            <div className='text-white text-[0.9rem]'>
                <p className='text-zinc-400 mb-[0.8rem]'>Legal</p>

                <p  className='cursor-pointer hover:underline'>Privacy Policy</p>
                <p  className='cursor-pointer hover:underline'>Cookie Policy</p>
                <p  className='cursor-pointer hover:underline'>Terms of Use</p>
            </div>
        </div>

        <div>
            <div className='flex flex-col lg:grid grid-cols-2 gap-[5rem] lg:gap-[10rem] items-center'>

                 <div className='flex flex-col lg:flex-row gap-8 lg:items-end items-center justify-center order-last lg:order-none'>
                    <span className=' lg:text-9xl text-7xl font-medium text-white'>PRISMA</span>
                    <span className='text-zinc-400 '>©2025</span>
                    <Link href='https://github.com/emersonramos3lt' className='text-white font-semibold hover:underline underline-offset-2' target='_blank'>
                        Made by Emerson
                    </Link>
                </div>

                <div>
                    <p className='text-white mb-4 text-[0.9rem] font-semibold'>Sign up to receive the latest updates on new projects<br /> and exclusive offers</p>
                    <Form action='#' className='flex'>
                        <input name='email' type='email' placeholder='Enter your email address' required className='bg-zinc-700 text-white p-2 lg:w-[350px] w-[80%] mr-2'/>
                        <input type="submit" value='Sign up' className='text-white border border-white p-2 px-4 lg:px-6 font-medium cursor-pointer transition-colors hover:bg-white hover:text-footerBg' />
                    </Form>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
