'use client'
import { cn } from "@/lib/utils";
import { Heart, MessageCircle, Trash2 } from 'lucide-react';
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
    idForum: number;
    titulo: string;
    subtitulo: string;
    reacoes: number
    hora: string
    data: string
}) => {

    const [forum, setForum] = useState('')
    useEffect(() => {
        const forumMap: Record<number, string> = {
            1: '#Gravidez',
            2: '#Maternidade',
            3: '#Desabafos',
        }
        setForum(forumMap[idForum] || '#Autocuidado')
    }, [])

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
                            {dadosUsuario?.nome.split(" ").slice(0, 2).join(" ") || 'nao logado'}
                        </figcaption>
                        <div className='w-1/3'>
                            <p className="text-xl text-zinc-700 ">{forum}</p>
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
                <div className='flex gap-2 justify-center items-center'>
                    <p className='text-sm text-right font-bold'> {reacoes} </p>
                    <Heart color="#ef4444" fill='#ef4444' className="h-4 w-4 " />
                    <div className='flex gap-1 mr-2 '>
                        <Button className='mr-1 hover:bg-red-100' variant="outline" size="icon">
                            <Trash2 className="h-5 w-5" color="#ef4444" />
                        </Button>
                    </div>
                </div>
            </div>
        </figure>
    );
};
export default PostCardUser