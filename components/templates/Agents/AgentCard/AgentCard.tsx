import Button from '@/components/module/Button/Button'
import AgentCardType from '@/types/agent-card'
import Image from 'next/image'
import React from 'react'

const AgentCard: React.FC<AgentCardType> = ({ id, image, fullName, company, rate }) => {
    return (
        <div className='w-full lg:w-72 rounded-2xl border border-gray-4 sm:pb-6 sm:px-6 sm:pt-4 py-3 px-7 flex flex-col text-center items-center h-82'>

            <Image src={image} alt={fullName} width={140} height={140} className='rounded-full w-21.5 h-21.5 md:w-35 md:h-35 object-cover mb-1 mt-4' />

            <p className='text-gray-12 text-sm sm:text-xl font-bold-shabnam mb-1 sm:mb-2'>
                {fullName}
            </p>
            <p className='text-gray-9 text-xs mb-1 sm:mb-2'>
                امتیاز ۴ از ۵
            </p>
            <p className='text-gray-9 text-xs mb-1 sm:mb-2'>
                {company}
            </p>

            <Button variant='outline' className='w-38 h-10 mt-auto lg:m-0'>نمایش پروفایل</Button>
        </div>
    )
}

export default AgentCard
