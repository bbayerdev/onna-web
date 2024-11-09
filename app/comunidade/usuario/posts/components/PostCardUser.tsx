'use client'
import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Pencil, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const PostCardUser = ({
    idForum,
    titulo,
    subtitulo,
    reacoes,
    hora,
    data,
}: {
    idForum: string;
    titulo: string;
    subtitulo: string;
    reacoes: number
    hora: string
    data: string
}) => {

    //puxa o nome do user do local storage
    const [dadosUsuario, setDadosUsuario] = useState<{
        nome: string;
    } | null>(null)
    useEffect(() => {
        //ao carregar o card, recupera os dados do localStorage
        const data = localStorage.getItem('usuarioData')
        //limpar o localStorage --> localStorage.clear();
        if (data) {
            const usuario = JSON.parse(data) // verifica e passa os dados do local para essa variavel
            setDadosUsuario(usuario) // leva pro useState
        }
        const nome = dadosUsuario?.nome
    }, [])
    //limpar o localStorage --> localStorage.clear();

    return (
        <figure
            className={cn(
                "relative cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] shadow",
                'w-full'
            )}
        >
            <div className="flex flex-row items-center gap-4">
                <img className="rounded-full size-12" alt="" src='/imgs/cachorra.png' />
                <div className="flex flex-row w-full">
                    <div className='w-full flex gap-2'>
                        <figcaption className="font-bold text-xl">
                            {dadosUsuario?.nome}
                        </figcaption>
                        <div className='w-1/3'>
                            <p className="text-xl text-zinc-700 ">{idForum}</p>
                        </div>

                    </div>
                    <div className='flex justify-end w-full text-sm'>
                        <p className='px-2'>{data}</p>
                        <p>•</p>
                        <p className='px-2 font-bold'> {hora}</p>
                    </div>
                </div>
            </div>
            <blockquote className="px-10 mt-5 flex flex-col gap-2 justify-center">

                <h1 className='text-xl mt-2 font-semibold'>{titulo}</h1>
                <p className='mt-2 text-justify'>{subtitulo}</p>

            </blockquote>
            <div className='flex justify-end mt-5'>
                <div className='flex justify-center items-center'>
                    <div className='flex gap-1 mr-2 '>
                        <p className='ml-1 text-sm text-right font-bold'>0</p>
                        <MessageCircle size={20} />
                    </div>
                    <p className='mr-1 text-sm text-right font-bold'> {reacoes} </p>
                    <Button className='mr-1 hover:bg-red-100' variant="outline" size="icon">
                        <Heart color="#ef4444" fill='#ef4444' className="h-5 w-5 " />
                    </Button>
                </div>
            </div>
        </figure>
    );
};
export default PostCardUser