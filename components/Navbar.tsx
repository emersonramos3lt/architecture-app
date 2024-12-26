import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center lg:p-6 p-4'>
       <div className='lg:block hidden'>
        <Link 
                href='/'
                className='mr-8 font-medium hover:underline'>
                    Products
            </Link>

            <Link 
                href='/'
                className='mr-8 font-medium hover:underline'>
                    About
            </Link>

            <Link 
                href='/'
                className='font-medium hover:underline'>
                    News
            </Link>

            
       </div>

       <div className='lg:hidden'>
       <Sheet>
            <SheetTrigger>
                <Image src='/menu-icon.svg' alt='Menu' width={30} height={30}/>
            </SheetTrigger>
                <SheetContent side='right'>
                    <SheetHeader>
                         <SheetTitle className='mb-[3rem]'></SheetTitle>
                        <SheetDescription className='flex flex-col'>
                            <Link
                                href='/'
                                className='mb-[2rem] text-gray-900 text-2xl font-medium hover:underline decoration-4'>
                                Products
                            </Link>

                            <Link
                                href='/'
                                className='mb-[2rem] text-gray-900 text-2xl font-medium hover:underline decoration-4'>
                                About
                            </Link>

                            <Link
                                href='/'
                                className='mb-[2rem] text-gray-900 text-2xl font-medium hover:underline decoration-4'>
                                News
                            </Link>

                            <Link
                                href='/'
                                className='text-gray-900 text-2xl font-medium hover:underline decoration-4'>
                                Contact
                            </Link>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
        </Sheet>
       </div>

       <h1 className='logo text-center text-[1.4rem] font-medium cursor-pointer' title='Home'>PRISMA</h1>


       <div className='flex'>
            <Link 
                href='/'
                className='hidden lg:flex lg:mr-5 lg:ml-[7rem] font-medium hover:underline'>
                    Contact
            </Link>

            <span className='cursor-pointer hover:underline'>
                EN
                <span className='sr-only'>Change language</span>
            </span>
       </div>
    </nav>
  )
}

export default Navbar
