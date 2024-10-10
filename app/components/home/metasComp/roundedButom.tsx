import React from "react"
import { Button } from '@/components/ui/button';

type Props = {
    num: string
    atualizar: () => void
    ativo: boolean
}

export default function RoundedButom({ num, atualizar, ativo }: Props) {

    return (
        <Button size={"icon"} onClick={atualizar} variant={"ghost"}
            className=
            {`md:text-xl text-2xl rounded-full border-[1px] px-3
             ${ativo ? 'bg-zinc-100' : 'bg-red-zinc-50'}
            `}>
            {num}
        </Button>
    )
}