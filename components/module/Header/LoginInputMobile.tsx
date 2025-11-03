'use client'
import React, { useEffect, useRef } from 'react'

const LoginInputMobile: React.FC = () => {
    const input = useRef<HTMLInputElement>(null)

    useEffect(() => {
        input.current?.focus()
    })

    return (
        <div className="flex gap-5 *:text-center mb-4 w-full justify-between">
            <input type="text" className="h-12 rounded-lg border border-gray-7 w-[49.6px] outline-0  focus:border-info-input focus:shadow-input text-gray-10 text-2xl" ref={input} />
            <input type="text" className="h-12 rounded-lg border border-gray-7 w-[49.6px] outline-0  focus:border-info-input focus:shadow-input text-gray-10 text-2xl" ref={input} />
            <input type="text" className="h-12 rounded-lg border border-gray-7 w-[49.6px] outline-0  focus:border-info-input focus:shadow-input text-gray-10 text-2xl" ref={input} />
            <input type="text" className="h-12 rounded-lg border border-gray-7 w-[49.6px] outline-0  focus:border-info-input focus:shadow-input text-gray-10 text-2xl" ref={input} />
            <input type="text" className="h-12 rounded-lg border border-gray-7 w-[49.6px] outline-0  focus:border-info-input focus:shadow-input text-gray-10 text-2xl" ref={input} />
        </div>
    )
}

export default LoginInputMobile
