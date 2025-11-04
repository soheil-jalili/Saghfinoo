import EstateCardType from '@/types/estate-card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EstateCard: React.FC<EstateCardType> = ({ icon, agent, location, rate, ad_enable, commentNumber }) => {
    return (
        <div className='flex flex-col items-center justify-center border border-gray-1 shadow-md rounded-2xl py-4 sm:py-8 h-auto lg:h-[336px] text-center'>

            <Image alt={agent} width={96} height={66} src={icon} className='mb-4' />

            <Link href={'/'} className='font-bold-shabnam! text-gray-12 text-xs sm:text-xl mb-2 cursor-pointer'>{agent}</Link>

            <p className='text-gray-11 text-xs sm:text-lg'>{location}</p>


            <div className='flex flex-col gap-2 mt-2'>
                <p className='text-xs sm:text-base text-gray-9'>میزان رضایتمندی: {rate} از ۵</p>
                <p className='text-gray-9 text-xs sm:text-base'>آگهی‌های فعال: بیش از {ad_enable} </p>
                <Link href={'/'} className='text-gray-9 text-xs sm:text-sm font-bold-shabnam! '>مشاهده نظرات کاربران ({commentNumber} نظر)</Link>
            </div>
        </div>
    )
}

export default EstateCard
