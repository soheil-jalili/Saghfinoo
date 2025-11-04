import React from 'react'
import EstateCard from '../EstateCard/EstateCard'

const Estates: React.FC = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[repeat(3,392px)] items-center gap-y-2 sm:gap-y-4  gap-x-4 sm:gap-x-6 flex-wrap'>
            {
                Array.from({ length: 52 }).map((item, index) => {
                    return <EstateCard key={index} id={index.toString()} icon={`/assets/images/realestates/realestates-logo${index % 2 === 0 ? '1' : '2'}.png`} ad_enable={2000} agent='مشاور املاک توسی' location='تهران، نیاوران، سه راه یاسر' rate='4/9' commentNumber={15} />
                })
            }
        </div>

    )
}

export default Estates
