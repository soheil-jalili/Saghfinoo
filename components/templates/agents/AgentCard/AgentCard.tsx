import AgentCardType from '@/types/agent-card'
import Link from 'next/link'
import React from 'react'

const AgentCard: React.FC<AgentCardType> = ({ icon, agent, location, rate, ad_enable, commentNumber }) => {
    return (
        <div className='flex flex-col items-center justify-center border border-gray-1 shadow-md rounded-2xl py-8'>
            <p>مشاور املاک توسی</p>
            <p>تهران، نیاوران، سه راه یاسر</p>
            <p>میزان رضایتمندی: ۴/۹ از ۵</p>
            <p>آگهی‌های فعال: بیش از ۲۰۰۰ </p>
            <Link href={'/'}>مشاهده نظرات کاربران (۱۵ نظر)</Link>
        </div>
    )
}

export default AgentCard
