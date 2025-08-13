import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='py-24'>
            <div className='container max-w-7xl'>
                <div className='flex items-center justify-between'>
                    <small>&copy; 2025 | Designed & Coded by Adriana Quiroz. All rights reserved.</small>
                    <div className='flex gap-3'>
                        <Link href="https://www.linkedin.com/in/adriana-christina-quiroz-correa-7b34082a1/"
                            className='border rounded-full h-[40px] w-[40px] 
                            flex items-center justify-center' target='_blank' rel='noopener noreferrer'>
                            <FaLinkedinIn />
                        </Link>
                        <Link href="https://github.com/AdriQuiz"
                            className='border rounded-full h-[40px] w-[40px] 
                            flex items-center justify-center' target='_blank' rel='noopener noreferrer'>
                            <FaGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer