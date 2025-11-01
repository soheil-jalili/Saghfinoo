import React from 'react'
import { GoClock } from 'react-icons/go'


type AcceptCodeTimerType = {
    fontSize: 'text-sm' | 'text-[10px]'
}

const AcceptCodeTimer: React.FC<AcceptCodeTimerType> = ({ fontSize }) => {
    return (
        <div className="flex gap-1">
            <GoClock color="#CBCBCB" />
            <p className={`mb-11 text-gray-6 cursor-pointer ${fontSize}`}>
                <span className="text-primary cursor-auto">1:59</span> تا دریافت مجدد کد
            </p>
        </div>
    )
}

export default AcceptCodeTimer
