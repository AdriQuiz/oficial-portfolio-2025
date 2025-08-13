import React from 'react'
import { motion } from 'framer-motion'

export type CardType = {
    title: string,
    company: string,
    date: string,
    tools: string[],
    texts: string[],
    classes?: string
}

const ExperienceCard = (
    { title, company, date, tools, texts, classes }: CardType
) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
                opacity: 1, scale: 1, transition: {
                    duration: 0.8,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 }
                }
            }}
            viewport={{
                once: true
            }}
            className={`w-full lg:w-3/4 border py-6 px-3 md:px-12 rounded-xl ${classes}`}>
            <h2 className='text-2xl text-center mb-4'>
                <span className='bg-gradient-to-r from-pink to-white text-transparent bg-clip-text'>{title}{" "}&bull;{" "}{company}</span>
            </h2>
            <div className='text-center mb-6'>
                <span>{date}</span>
            </div>
            <div className='flex flex-wrap gap-4 justify-center mb-6'>
                {tools.map((item) => (
                    <span className='inline-block border rounded-full 
                        px-4 py-2 hover:-translate-y-1 transition duration-300' key={item}>
                        {item}
                    </span>
                ))}
            </div>
            <ul className='list-disc list-inside marker:text-pink px-5 md:px-16 lg:px-20'>
                {texts.map((item) => (
                    <li key={item} className='font-thin mb-4'>{item}</li>
                ))}
            </ul>
        </motion.div>
    )
}

export default ExperienceCard