import React, { useState } from 'react'
import { cn } from "@/lib/utils";
import Marquee from '@/components/ui/marquee';
import { Image, Heart, MessageCircle } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

//com tipagemmmm (ilove ts)
const CardPost = ({
    name,
    forum,
    imagem,
    titulo,
    body,
    curtidas,
    respostas,
}: {
    name: string;
    forum: string;
    imagem: string;
    titulo: string;
    respostas: number;
    body: string;
    curtidas: number;
}) => {
    //curtidinhaaa
    const [like, setLike] = useState(curtidas)
    const liked = () =>{
        setLike(like + 1)
    }
    //pegando a fata atual com saida com barra "2024/10/25"
    const dataAtual = new Date().toISOString().split('T')[0].replace(/-/g, '/')
    const agora = new Date();
    // hora em 21:52 PM"
    let horas = agora.getHours();
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const periodo = horas >= 12 ? 'PM' : 'AM';
    const horaFormatada = `${horas}:${minutos} ${periodo}`;

    return (
        <figure
            className={cn(
                "relative cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] shadow",
                'w-full'
            )}
        >
            <div className="flex flex-row items-center gap-4">
                <img className="rounded-full" width="42" height="42" alt="" src='/imgs/cachorra.png' />
                <div className="flex flex-row w-full">
                    <div className='w-full flex gap-2'>
                        <figcaption className="font-bold text-xl">
                            {name}
                        </figcaption>
                        <p className="text-xl ml-1 text-zinc-700 ">{forum}</p>
                    </div>
                    <div className='flex justify-end w-full text-sm'>
                        <p className='px-2'>{horaFormatada}</p>
                        <p>•</p>
                        <p className='px-2 font-bold'> {dataAtual}</p>
                    </div>
                </div>
            </div>
            <blockquote className="mt-4 ml-10 w-4/5 text-justify">
                <h1 className='text-xl font-semibold'>{titulo || 'Título'}</h1>
                <p className='mt-2'>{body || 'Texto do post...'}</p>

                {imagem && (
                    <div className='border h-52 mt-5 w-full justify-center flex items-center rounded-xl'>
                        <Image className='size-10' color='#71717a' />
                    </div>
                )}
            </blockquote>
            <div className='flex justify-between mt-5'>

                <Button variant="outline">
                    Responder
                </Button>

                <div className='flex justify-center items-center'>
                    <div className='flex gap-1 mr-2'>
                        <p className='ml-1 text-sm text-right font-bold'>{respostas}</p>
                        <MessageCircle size={20} />
                    </div>

                    <p className='mr-1 text-sm text-right font-bold'>{like}</p>
                    <Button onClick={liked} className='mr-1 hover:bg-red-100' variant="outline" size="icon">
                        <Heart color="#ef4444" fill='#ef4444' className="h-5 w-5 " />
                    </Button>
                </div>
            </div>
        </figure>
    );
};
export default CardPost