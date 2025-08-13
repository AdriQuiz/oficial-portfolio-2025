import Title from '@/components/Title'
import { backStack, databases, frontStack } from '@/constants'
import React from 'react'

const Skills = () => {
    return (
        <section id='skills' className='py-24'>
            <div className='container max-w-7xl'>
                <Title title='Skills' />
                <p className='font-thin text-center mb-7'>
                    This list contains all the technologies I typically use to build
                    efficient software and web solutions!
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
                    <div id='frontend' className='w-full'>
                        <div className='text-center'>
                            <span className='inline-block text-xl mb-8 
                                bg-gradient-to-r from-pink to-white bg-clip-text text-transparent'>
                                Front-End Development
                            </span>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3 bg-dark-grey py-3 rounded-xl w-full'>
                            {frontStack.map((item) => (
                                <div key={item.id} className='py-5 
                                    flex flex-col items-center'>
                                    {item.icon}
                                    <h4 className='mt-2'>{item.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id='backend' className='w-full'>
                        <div className='text-center'>
                            <span className='inline-block text-xl mb-8 
                                bg-gradient-to-r from-pink to-white bg-clip-text text-transparent'>
                                Back-End Development
                            </span>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3 bg-dark-grey py-3 rounded-xl w-full'>
                            {backStack.map((item) => (
                                <div key={item.id} className='py-5 
                                    flex flex-col items-center'>
                                    {item.icon}
                                    <h4 className='mt-2'>{item.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id='database' className='w-full'>
                        <div className='text-center'>
                            <span className='inline-block text-xl mb-8 
                                bg-gradient-to-r from-pink to-white bg-clip-text text-transparent'>
                                Databases
                            </span>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-3 bg-dark-grey py-3 rounded-xl w-full'>
                            {databases.map((item) => (
                                <div key={item.id} className='py-5 
                                    flex flex-col items-center'>
                                    {item.icon}
                                    <h4 className='mt-2'>{item.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills