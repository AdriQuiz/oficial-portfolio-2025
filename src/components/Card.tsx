import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

export type CardType = {
    title: string,
    tools: string[],
    description: string,
    img?: StaticImageData,
    github?: string,
    demo?: string
}

const Card = (
    { title, tools, description, img, github, demo }: CardType
) => {
    return (
        <div className='bg-dark-grey rounded-xl w-full 
            hover:shadow-[0_0_15px_#F7374F] hover:-translate-y-1 transition duration-300'>
            {img && (
                <Image src={img} alt='stack image' className='rounded-tl-xl rounded-tr-xl object-cover' />
            )}
            <div className='py-5 px-8'>
                <h2 className='text-xl mb-4 font-bold'>
                    {title}
                </h2>
                <div className='flex flex-wrap mb-6 gap-2'>
                    {tools.map((item) => (
                        <p className='border rounded-full px-3 py-1' key={item}>{item}</p>
                    ))}
                </div>
                <p className='font-thin'>{description}</p>
            </div>
            <div className='flex gap-4 px-8 mb-5 md:mb-0'>
                {github && (
                    <Link href={github} target='_blank' rel="noopener noreferrer"
                        className='flex items-center gap-2 w-fit px-4 py-2 rounded-full
                        bg-gradient-to-r from-pink via-purple to-dark-blue'>
                        Github
                        <MdArrowOutward />
                    </Link>
                )}
                {demo && (
                    <Link href={demo} target='_blank' rel="noopener noreferrer"
                        className='flex items-center gap-2 w-fit px-4 py-2 rounded-full
                        bg-gradient-to-r from-pink via-purple to-dark-blue'>
                        Demo
                        <MdArrowOutward />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Card