import React from 'react'

type Props = {
    titulo: string
    meta: string
}

const CardMetas = ({ titulo, meta }: Props) => {
    return (

        <div className='w-full h-full border-2 rounded-xl border-black p-8'>
            <h1 className='font-bold text-4xl'>{titulo}</h1>
            <p className='font-opensans text-2xl mt-5'>{meta}</p>
        </div>

    )
}

export default CardMetas