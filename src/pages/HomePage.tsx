"use client"
import Image from 'next/image'
import React from 'react';
import picture from '@/assets/picture.png'
import Button from '@/components/Button';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const HomePage = () => {
  return (
    <section id='home' className='py-24'>
      <div className='container max-w-7xl py-16'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='mb-10 md:mb-0'>
            <div className='max-w-xl text-center md:text-start mb-8'>
              <Fade direction='left' triggerOnce={true}>
                <p className='text-xl mb-4'>Hi, I&apos;m Adriana Quiroz</p>
                <div>
                  <h1 className='inline-block text-5xl mb-4 
                    bg-gradient-to-r from-pink via-purple to-dark-blue 
                    text-transparent bg-clip-text font-bold'>
                    Front-End Developer
                  </h1>
                </div>
              </Fade>
              <Fade direction='left' triggerOnce={true}>
                <p className='font-thin text-wrap'>
                  Junior-level Software Engineer specialized in Front-End, with
                  a strong passion in crafting modern web and software solutions.
                </p>
              </Fade>
            </div>
            <Fade direction='left' triggerOnce={true}>
              <div className='flex gap-4 items-center justify-center md:justify-start'>
                <Button variant='secondary' href='/CV_Adriana_Quiroz_eng.pdf' download={true}>Download CV</Button>
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
            </Fade>
          </div>
          <Fade direction='right' triggerOnce={true}>
            <div>
              <Image src={picture} alt='avatar' width={450} height={450} />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default HomePage