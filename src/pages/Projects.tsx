'use client'
import Card from '@/components/Card'
import Title from '@/components/Title'
import React from 'react'
import mock_grade from "@/assets/mockup_grade.png"
import mock_nicely from "@/assets/mockup_nicely.png"
import mock_note from "@/assets/mockup_note.png"
import mock_port from "@/assets/mockup_port.png"

const Projects = () => {
  return (
    <section id='projects' className='py-24'>
      <div className='container max-w-7xl'>
        <Title title='Featured Projects' />
        <div className='grid md:grid-cols-2 gap-6 w-full min-w-full'>
          <Card
            title='Conversational Assistant implemented with Graph RAG Hybrid Search &bull; Thesis Project'
            tools={['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'Tailwind CSS', 'FastAPI', 'Neo4j', 'LangChain']}
            description='Thesis project for the Cathedral Museum of the Metropolitan Cathedral of Santa Cruz, Bolivia, 
              which features a conversational assistant that answers questions reltated to the museum&apos;s artworks.'
            img={mock_grade}
          />
          <Card
            title='AskNicely &bull; Customer Feedback Survey'
            tools={['ReactJS', 'Tailwind CSS']}
            description='Landing Page for fake company AskNicely, all user interfaces designed to improve user experience.'
            img={mock_nicely}
            github='https://github.com/AdriQuiz/survey-landing-page'
            demo='https://survey-landing-page-iota.vercel.app/'
          />
          <Card
            title='MoteApp &bull; Notes App'
            tools={['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'Tailwind CSS']}
            description='Notes app that helps manage daily tasks, such as creating, displaying, updating and deleting notes.'
            img={mock_note}
          />
          <Card
            title='Adriana&apos;s Portfolio'
            tools={['NextJS', 'ReactJS','Tailwind CSS', 'Framer Motion']}
            description='The portfolio you&apos;re exploring right now! It&apos;s a modern and smooth design to 
            showcase my skills as a Junior Front-End Developer, which uses framer motion effects and gradients I like.'
            img={mock_port}
            github='https://github.com/AdriQuiz/oficial-portfolio-2025'
          />
        </div>
      </div>
    </section>
  )
}

export default Projects