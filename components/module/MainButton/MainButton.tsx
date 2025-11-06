import { ComponentProps } from "react"

type Props = ComponentProps<'button'> & {
    variant?: 'solid' | 'outline',
    route?: string
}


const MainButton: React.FC<Props> = ({ className, children, variant = 'solid' }: Props) => {
    return (
        <button className={`${variant === 'outline' ? 'border border-primary text-primary' : 'bg-primary text-white'} flex items-center justify-center text-sm cursor-pointer rounded-lg ${className}`}>{children}</button>
    )
}


export default MainButton