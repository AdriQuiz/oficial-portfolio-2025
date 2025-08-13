import React from 'react'
import { FaStarOfLife } from 'react-icons/fa'

const Title = ({ title }: { title: string }) => {
    return (
        <div className='flex items-center gap-3 justify-center mb-8'>
            <FaStarOfLife className='text-pink size-6' />
            <h1 className='text-4xl font-bold'>{title}</h1>
        </div>
    )
}

export default Title