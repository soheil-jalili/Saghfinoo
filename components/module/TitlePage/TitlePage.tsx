import React, { ComponentProps } from 'react'

type Props = ComponentProps<'h3'> & {
    title: string
}
const TitlePage: React.FC<Props> = ({ title, className }) => {
    return (
        <h3 className={`text-gray-11 font-bold-shabnam! text-sm sm:text-[32px] mt-8 md:mt-[91px] mb-4 sm:mb-8 ${className === null ? className : ''}`}>{title}</h3>
    )
}

export default TitlePage
