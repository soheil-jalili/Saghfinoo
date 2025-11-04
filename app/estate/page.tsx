import Button from '@/components/module/Button/Button'
import CenterWrapper from '@/components/module/CenterWrapper/CenterWrapper'
import SearchInputCity from '@/components/module/SearchInputCity/SearchInputCity'
import TitlePage from '@/components/module/TitlePage/TitlePage'
import EstateMain from '@/components/templates/Estate/Estate/Estate'
import React from 'react'

const Estate: React.FC = () => {
    return (
        <div className='container max-[768px]:px-4 md:px-0 md:w-[90%]'>
            <TitlePage title='املاک و مستغلات' />
            <SearchInputCity />
            <EstateMain />
            <CenterWrapper>
                <Button className='w-58 h-12 mt-10 lg:mt-14 mb-14 lg:mb-26'>مشاهده بیشتر</Button>
            </CenterWrapper>
        </div>
    )
}

export default Estate
