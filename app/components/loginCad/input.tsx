
import React, { forwardRef } from 'react'

type Props = {
    type: string
    label: string
    placeholder: string
}

const Input = forwardRef<HTMLInputElement, Props>(
    ({ label, placeholder, type, ...rest }, ref) => {
        return (
            <div>
                <h1 className='px-4 font-bold text-2xl'>{label}</h1>
                <input
                    type={type}
                    className='font-opensans border-2 w-full border-black text-2xl p-1 px-3 rounded-2xl'
                    placeholder={placeholder}
                    ref={ref}
                    {...rest}
                />
            </div>
        )
    }
)

export default Input