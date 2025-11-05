import React, { PropsWithChildren } from 'react'
type BoxContainerType = PropsWithChildren<{
    className?: string
}>
const BoxContainer: React.FC<BoxContainerType> = ({ children, className = '' }: BoxContainerType) => {
    return (
        <div className={`bg-gray-3 rounded-lg p-1 mb-6 max-w-28 ${className}`}>
            {children}
        </div>
    )
}

export default BoxContainer
