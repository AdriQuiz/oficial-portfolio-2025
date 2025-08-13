'use client'
import Button from '@/components/Button';
import { navLinks } from '@/constants'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from "framer-motion";
import {disablePageScroll, enablePageScroll} from '@fluejs/noscroll';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        enablePageScroll();
        setIsOpen(false);
    }

    return (
        <nav className='w-full py-5 lg:py-5 fixed top-0 z-50'>
            <div className='max-w-7xl container'>
                <div className='border border-white/30 rounded-[27px] md:rounded-full px-3 py-3 lg:py-2 backdrop-blur'>
                    <div className='flex items-center justify-between'>
                        <div className='cursor-pointer'>
                            <h2 className='inline-block text-2xl ml-2 
                                bg-gradient-to-r from-pink to-white text-transparent bg-clip-text'>
                                    Adriana
                            </h2>
                        </div>
                        <div className='hidden gap-8 text-lg md:flex'>
                            {navLinks.map((link) => (
                                <Link href={link.href} className='hover:text-pink transition-colors duration-300' key={link.id}>{link.label}</Link>
                            ))}
                        </div>
                        <div className='flex justify-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="feather feather-menu md:hidden mr-2 md:mr-0" onClick={() => setIsOpen(!isOpen)}>
                                <line x1="3" y1="6" x2="21" y2="6" className={twMerge('origin-right transition', isOpen && '-rotate-45 -translate-y-1')}></line>
                                <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition", isOpen && "opacity-0")}></line>
                                <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-right transition", isOpen && "rotate-45 translate-y-1")}></line>
                            </svg>
                            <Button variant='primary' href='#' className='hidden lg:inline-flex items-center'>Hire me</Button>
                        </div>
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                className='overflow-hidden'
                            >
                                <div className='overflow-hidden'>
                                    <div className='flex flex-col gap-4 py-4 items-center'>
                                        {navLinks.map((link) => (
                                            <Link href={link.href} key={link.id}>{link.label}</Link>
                                        ))}
                                        <Button variant='primary'>Hire me</Button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    )
}

export default Navbar