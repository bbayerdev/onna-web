
import React from 'react'

type Props = { 
    nome: string
    avaliacao: string
    nota: string
}

const CardAval = ({nome, avaliacao, nota}: Props) => {
    return (
        <div className='bg-red-100 flex flex-col w-1/4 justify-between border-2 border-black rounded-lg p-5 text-left'>
            <h1 className='font-bold text-3xl'>{nome}.</h1>
            <p className={`font-opensans text-xl p-3`}>{avaliacao}</p>
            <h1 className='font-bold text-xl text-end'>{nota}^</h1>
        </div>
    )
}

export default CardAval