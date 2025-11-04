import Button from '@/components/module/Button/Button'
import CenterWrapper from '@/components/module/CenterWrapper/CenterWrapper'
import SearchInputCity from '@/components/module/SearchInputCity/SearchInputCity'
import TitlePage from '@/components/module/TitlePage/TitlePage'
import AgentsMain from '@/components/templates/Agents/AgentsMain/AgentsMain'
import React from 'react'

const Agents: React.FC = () => {
    return (
        <div className='container max-[768px]:px-4 md:px-0 md:w-[90%]'>
            <TitlePage title='مشاورین املاک' />
            <SearchInputCity />

            <AgentsMain />

            <CenterWrapper>
                <Button className='w-58 h-12 mb-14 lg:mb-26 mt-7 sm:mt-14'>مشاهده بیشتر</Button>
            </CenterWrapper>
        </div>
    )
}

export default Agents
