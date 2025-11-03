'use client'
import React, { useEffect, useRef } from 'react'


const LoginInput: React.FC = () => {
    const input = useRef<HTMLInputElement>(null)

    useEffect(() => {
        input.current?.focus()
    })

    return (
        <div className="flex gap-5 mb-4 *:rounded-lg *:outline-0 *:text-center *:text-[28px] *:text-gray-11">
            <input
                type="text"
                className="appearance-none w-[91.2px] h-12 border border-gray-7 focus:shadow-input"
                ref={input}
            />


            <input
                type="text"
                className="appearance-none w-[91.2px] h-12 border border-gray-7 focus:shadow-input"
                ref={input}
            />


            <input
                type="text"
                className="appearance-none w-[91.2px] h-12 border border-gray-7 focus:shadow-input"
                ref={input}
            />


            <input
                type="text"
                className="appearance-none w-[91.2px] h-12 border border-gray-7 focus:shadow-input"
                ref={input}
            />


            <input
                type="text"
                className="appearance-none w-[91.2px] h-12 border border-gray-7 focus:shadow-input"
                ref={input}
            />

        </div>

    )
}

export default LoginInput
