'use client'
import ExperienceCard from '@/components/ExperienceCard'
import Title from '@/components/Title'
import React from 'react'

const Experience = () => {
    return (
        <section id='experience' className='py-24'>
            <div className='container max-w-7xl'>
                <Title title='Experience' />
                <div className='flex flex-col items-center'>
                    <ExperienceCard
                        title='Front-End Developer - Intern'
                        company='trabajito'
                        date='Mar 2024 - Oct 2024'
                        classes='mb-12'
                        tools={['Laravel', 'PHP', 'jQuery', 'Bootstrap', 'MySQL']}
                        texts={[
                            'Actively participated in the redesign of user interfaces, implementing approximately 60% of the views based on PSD files, ensuring visual accuracy and usability.',
                            'Identified and implemented backend logic for a LIFO test functionality, along with the design of a user friendly interface.',
                            'Developed advanced job search filters, enabling the combination of multiple search criteria.',
                            'Worked within the SCRUM methodology framework.'
                        ]}
                    />
                    <ExperienceCard
                        title='Junior Software Developer'
                        company='SolverTIC SRL'
                        date='Jul 2023 - Dec 2023'
                        tools={['Flutter', 'Firebase']}
                        texts={[
                            'Developed software focused on Mobile App and Business Web platforms.',
                            'Implemented user interfaces and other frontend tasks for a Real Estate module, including the consumption of services within the application.',
                            'Developed advanced job search filters, enabling the combination of multiple search criteria.',
                            'Worked within the SCRUM methodology framework.'
                        ]}
                    />
                </div>
            </div>
        </section>
    )
}

export default Experience