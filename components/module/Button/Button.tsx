import React, { ComponentProps } from 'react'

type Props = ComponentProps<'button'> & {
    variant?: 'solid' | 'outline'
}

const Button: React.FC<Props> = ({ className, children, variant = 'solid' }: Props) => {
    return (
        <button className={`${variant === 'outline' ? 'border border-primary text-primary' : 'bg-primary text-white'} text-sm cursor-pointer rounded-lg ${className}`}>{children}</button>
    )
}

export default Button
