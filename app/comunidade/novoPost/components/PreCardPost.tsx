import React, { useEffect, useState } from 'react'
import { cn } from "@/lib/utils";
import { Image, Heart, MessageCircle, CornerDownRight, Stethoscope, Baby, Flower2, Mic2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';

//com tipagemmmm (ilove ts)
const PreCardPost = ({
    forum,
    imagem,
    titulo,
    body,
}: {
    forum: string;
    imagem: string;
    titulo: string;
    body: string;
}) => {
    //curtidinhaaa
    const [like, setLike] = useState(0)
    const liked = () => {
        setLike(like + 1)
    }
    // data em dia/mes/ano
    const agora = new Date();
    const dataAtual = agora.toISOString().split('T')[0].split('-').reverse().join('/');
    // hora em 21:52 PM"
    let horas = agora.getHours();
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const periodo = horas >= 12 ? 'PM' : 'AM';
    const horaFormatada = `${horas}:${minutos} ${periodo}`;

    //puxando dados do user no localStorage
    const [dadosUsuario, setDadosUsuario] = useState<{
        idTipo_Usuario: number,
        nome: string
        tipo_Usuario: number


    } | null>(null)
    useEffect(() => {
        //ao carregar a pagina
        const data = localStorage.getItem('usuarioData')
        if (data) {
            const usuario = JSON.parse(data) // verifica e passa os dados do local para essa variavel
            setDadosUsuario(usuario) // leva pro useState
        }
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
            <div className="flex flex-row items-center gap-4 w-full">
                <img className="rounded-full" width="42" height="42" alt="" src={`https://api.dicebear.com/9.x/glass/svg?seed=${dadosUsuario?.nome.split(" ").pop()}`} />
                <div className="flex flex-row w-full justify-between">
                    <div className='flex'>
                        <figcaption className="font-bold text-xl flex items-center gap-2">
                            {dadosUsuario?.nome.split(" ").slice(0, 2).join(" ") || 'nao logado'}
                            <div className='flex gap-1'>
                                {dadosUsuario?.tipo_Usuario ? (
                                    <Badge className=" rounded-full">
                                        <Stethoscope className='size-4 mr-1' />  Profissional
                                    </Badge>

                                ) : (
                                    null
                                )}
                            </div>
                            <div className='flex'>
                                {forum === '#Gravidez' ? (
                                    <Badge className="rounded-full bg-blue-200 gap-1 text-blue-500 shadow-none bg-opacity-20">
                                        <Baby className="size-4" /> Gravidez
                                    </Badge>
                                ) : forum === '#Maternidade' ? (
                                    <Badge className="rounded-full pointer-events-none bg-pink-400 gap-1 text-pink-500 shadow-none bg-opacity-20">
                                        <Heart className="size-4" /> Maternidade
                                    </Badge>
                                ) : forum === '#Desabafos' ? (
                                    <Badge className="rounded-full pointer-events-none bg-purple-400 gap-1 text-purple-500 shadow-none bg-opacity-20">
                                        <Mic2 className="size-4" /> Desabafos
                                    </Badge>
                                ) : forum === '#Autocuidado' ? (
                                    <Badge className="rounded-full pointer-events-none bg-yellow-400 gap-1 text-yellow-500 shadow-none bg-opacity-20">
                                        <Flower2 className="size-4" /> Autocuidado
                                    </Badge>
                                ) : (null)}
                            </div>
                        </figcaption>
                    </div>
                    <div className='flex text-sm'>
                        <p className='px-2 '> {dataAtual}</p>
                        <p>•</p>
                        <p className='px-2 font-bold'>{horaFormatada}</p>
                    </div>
                </div>
            </div>
            <blockquote className="mt-4 ml-10 w-4/5">
                <h1 className='text-xl font-semibold'>{titulo || 'Título do post.'}</h1>
                <p className='mt-2 text-justify'>{body}</p>
                {imagem && (
                    <div className='border h-52 mt-5 w-full justify-center flex items-center rounded-xl'>
                        <Image className='size-10' color='#71717a' />
                    </div>
                )}
            </blockquote>
            <div className='flex justify-between mt-5'>
                <Button variant="outline" className="ml-2 rounded-xl">
                    <CornerDownRight /> Respostas
                </Button>
                <div className='flex justify-center items-center'>
                    <p className='mr-2 text-sm text-right font-bold'>{like}</p>
                    <Button onClick={liked} className='mr-2 hover:bg-red-100 rounded-full' variant="outline" size="icon" >
                        <Heart color="#ef4444" fill='#ef4444' className="h-5 w-5 " />
                    </Button>
                </div>
            </div>
        </figure>
    );
};
export default PreCardPost