import React, { ComponentProps } from 'react'

type Props = ComponentProps<'button'> & {

}

const Button: React.FC<Props> = ({ className, children }: Props) => {
    return (
        <button className={`text-white bg-primary text-sm cursor-pointer rounded-lg ${className}`}>{children}</button>
    )
}

export default Button
