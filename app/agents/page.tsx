import Button from '@/components/module/Button/Button'
import CenterWrapper from '@/components/module/CenterWrapper/CenterWrapper'
import SearchInputCity from '@/components/module/SearchInputCity/SearchInputCity'
import TitlePage from '@/components/module/TitlePage/TitlePage'
import Agent from '@/components/templates/agents/Agent/Agent'
import React from 'react'

const Agents: React.FC = () => {
    return (
        <div className='container'>
            <TitlePage title='مشاورین املاک' />
            <SearchInputCity />
            <Agent />
            <CenterWrapper>
                <Button className='w-58 h-12'>مشاهده بیشتر</Button>
            </CenterWrapper>
        </div>
    )
}

export default Agents
