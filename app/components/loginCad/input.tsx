
import React from 'react'

type Props = {
    tipo: string
    label: string
    placeholder: string
}

const Input = ({label, placeholder, tipo }: Props) => {
    return (
        <div>
            <h1 className='px-4 font-bold text-2xl'>{label}</h1>
            <input
                type={tipo}
                className='font-opensans border-2 w-full border-black text-2xl p-1 px-3 rounded-2xl'
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input