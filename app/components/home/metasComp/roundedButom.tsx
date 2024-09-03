import React from "react"

type Props = {
    num: string
    atualizar: () => void
    ativo: boolean
}

export default function RoundedButom({ num, atualizar, ativo }: Props) {

    return (
        <button onClick={atualizar}
            className=
            {`md:text-3xl text-2xl rounded-full border-[1px] border-black px-3 hover:bg-red-200
             ${ativo ? 'bg-red-200' : 'bg-red-100'}
            `}>
            {num}
        </button>
    )
}