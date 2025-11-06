import Link from 'next/link'
import React, { ComponentProps } from 'react'

type Props = ComponentProps<'a'> & {
    variant?: 'solid' | 'outline',
    route?: string
}

const Button: React.FC<Props> = ({ className, children, variant = 'solid', route = '/' }: Props) => {
    return (
        <Link href={route} className={`${variant === 'outline' ? 'border border-primary text-primary' : 'bg-primary text-white'} flex items-center justify-center text-sm cursor-pointer rounded-lg ${className}`}>{children}</Link>
    )
}

export default Button
