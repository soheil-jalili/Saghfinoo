import React from 'react'
import AgentCard from '../AgentCard/AgentCard'

const Agent: React.FC = () => {
    return (
        <div className='grid grid-cols-[repeat(3,392px)] items-center gap-y-4 gap-x-6 flex-wrap'>
            {
                Array.from({ length: 52 }).map((item) => {
                    return <AgentCard id='1' icon='/assets/images/' ad_enable={2000} agent='مشاور املاک توسی' location='تهران، نیاوران، سه راه یاسر' rate='4/9' commentNumber={15} />
                })
            }
        </div>

    )
}

export default Agent
