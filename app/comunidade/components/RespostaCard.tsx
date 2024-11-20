import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { EllipsisVertical, Heart, TriangleAlert } from 'lucide-react'

type Props = {
    nome: string
    data: string
    hora: string
    mensagem: string
    likes: number
}

const RespostaCard = ({ data, hora, likes, mensagem, nome }: Props) => {
    return (
        <figure className="relative overflow-hidden rounded-3xl border p-4 border-gray-950/[.1]  shadow w-4/5">
            <div className="flex flex-row items-center gap-4">
                <img className="rounded-full size-8" alt="" src="https://avatar.vercel.sh/jill" />
                <div className="flex flex-row w-full">
                    <div className='w-full flex gap-2'>
                        <figcaption className="font-bold text-base flex gap-2">
                            {nome}
                        </figcaption>
                    </div>
                    <div className='flex justify-end w-full text-sm'>
                        <div className='flex flex-row'>
                            <div className='flex'>
                                <p className='px-2 text-sm'>{hora}</p>
                                <p>•</p>
                                <p className='px-2 font-bold'>{data}</p>
                            </div>

                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button className=' hover:bg-zinc-200 rounded-full' variant="ghost" size="icon">
                                        <EllipsisVertical className="h-5 w-5" />
                                    </Button></DropdownMenuTrigger>
                                <DropdownMenuContent side='right'>
                                    <DropdownMenuItem className='text-base'> Denunciar Resposta</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>
                    </div>
                </div>
            </div>
            <blockquote className="px-10 flex flex-row gap-2 justify-between">
                <h1 className=' font-semibold'>
                    {mensagem}
                </h1>
            </blockquote>
            <footer className='justify-end flex '>
                <div className='flex gap-1 px-2 justify-center items-center'>
                    <p className='text-sm text-right font-bold'> {likes} </p>
                    <Button variant={'outline'} size={'icon'} className='rounded-full'> <Heart color="#ef4444" fill='#ef4444' className="h-4 w-4 " /> </Button>
                </div>
            </footer>
        </figure>
    )
}

export default RespostaCard