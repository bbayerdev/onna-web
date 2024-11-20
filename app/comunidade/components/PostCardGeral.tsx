'use client'
import { Clock, CornerDownRight, EllipsisVertical, Heart, MessageCircle, Send, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { Toaster } from "@/components/ui/toaster"
import { toast } from "@/hooks/use-toast";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import React from "react";
import { Input } from "@/components/ui/input";
import { Separator } from '@radix-ui/react-separator';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link';
import SkeletonResposta from '../usuario/posts/components/SkeletonResposta';
import RespostaCard from './RespostaCard';

//tipagem resposta zodddd
const newResposta = z.object({
    mensagem: z.string().nonempty('Digite sua resposta')
});
//inteligencia do ts:
type newRespostaData = z.infer<typeof newResposta>;

const PostCardGeral =
    ({
        id,
        idForum,
        nome,
        titulo,
        subtitulo,
        reacoes,
        hora,
        data,
    }: {
        id: number;
        idForum: number;
        nome: string
        titulo: string;
        subtitulo: string;
        reacoes: number
        hora: string
        data: string
    }) => {
        const [forum, setForum] = useState('')
        useEffect(() => {
            const forumMap: Record<number, string> = {
                2: '#Gravidez',
                4: '#Maternidade',
                1: '#Desabafos',
            }
            setForum(forumMap[idForum] || '#Autocuidado')
        }, [])
        //puxa o nome do user do local storage
        const [dadosUsuario, setDadosUsuario] = useState<{
            nome: string;
            idTipo_Usuario: number
        } | null>(null)
        useEffect(() => {
            const data = localStorage.getItem('usuarioData')
            if (data) {
                const usuario = JSON.parse(data)
                setDadosUsuario(usuario)
            }
        }, [])

        const [error, setError] = useState<boolean>(false)

        //aqui para baixo tudo sobre enviar resposta
        const [mensagem, setMensagem] = useState('')
        const [maxMensagem, setMax] = useState(400)
        const [isOpen, setIsOpen] = React.useState(false)

        // config do useForm com validação Zod
        const { register, reset, handleSubmit, formState: { errors } } = useForm<newRespostaData>({
            resolver: zodResolver(newResposta),
        });

        //async nova resposta
        async function criarResposta(data: newRespostaData) {
            try {
                const response = await axios.post('http://localhost:3000/api/respostaPostagem', {
                    idPostagem: id,
                    idTipo_Usuario: dadosUsuario?.idTipo_Usuario,
                    mensagem: data.mensagem
                })

                if (response.status === 200) {
                    toast({
                        title: "Resposta enviada com sucesso!.",
                        className: 'bg-green-400',
                        duration: 2000,
                    })

                    reset()//limpa o input 
                    setMensagem('')
                }
            } catch (error) {
                setError(true);
            }
        }

        //daqui pra baixo exibicao respostas
        const [resposta, setResposta] = useState<any[]>([])
        const [loadingResposta, setLoadingResposta] = useState<boolean>(true)
        const [quantidadeRespostas, setQuantidadeRespostas] = useState<number>(0);
        //async exibicao das respostas
        const fetchRespostas = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/respostaPostagem/${id}`)
                setResposta(response.data)
                setQuantidadeRespostas(response.data.length)
            }
            catch (errorResposta) {
            }
            finally {
                setLoadingResposta(false)
            }
        }
        //puxa a async sempre que uma resposta nova for criada
        useEffect(() => {
            fetchRespostas()
            const intervalId = setInterval(fetchRespostas, 1000) // a cada 1 seg
            return () => clearInterval(intervalId) // zera quando renderizar
        }, [id])

        return (
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex w-full flex-col space-y-2">

                <figure className=" relative cursor-pointer overflow-hidden rounded-3xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] shadow w-full">
                    <div className="flex flex-row items-center gap-4">
                        <img className="rounded-full size-12" alt="" src='/imgs/cachorra.png' />
                        <div className="flex flex-row w-full">
                            <div className='w-full flex gap-2'>
                                <figcaption className="font-bold text-xl">
                                    {nome.split(" ").slice(0, 2).join(" ") || 'nao logado'}
                                </figcaption>
                                <div className='w-1/3'>
                                    <Badge className='pointer-events-none rounded-2xl mt-1'>{forum}</Badge>
                                </div>
                            </div>
                            <div className='flex justify-end w-full text-sm'>
                                <p className='px-2'>{data}</p>
                                <p>•</p>
                                <p className='px-2 font-bold'> {hora}</p>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <Button className=' hover:bg-zinc-200 rounded-full' variant="secondary" size="icon">
                                            <EllipsisVertical className="h-5 w-5" />
                                        </Button></DropdownMenuTrigger>
                                    <DropdownMenuContent side='right'>
                                        <DropdownMenuItem className='text-base'> Denunciar Resposta</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                    <blockquote className="px-10 mt-5 flex flex-col gap-2 justify-center">
                        <h1 className='text-xl mt-2 font-semibold'>{titulo}</h1>
                        <p className='mt-2 text-justify'>{subtitulo}</p>
                    </blockquote>
                    <div className='flex justify-between mt-5'>
                        <div>
                            <CollapsibleTrigger asChild>
                                <Button variant="outline" className="ml-2 rounded-xl">
                                    <CornerDownRight /> Respostas
                                </Button>
                            </CollapsibleTrigger>
                        </div>
                        <div className='flex gap-2 justify-center items-center mr-4'>
                            <p className='text-sm text-right font-bold'> {quantidadeRespostas} </p>

                            <MessageCircle className="h-4 w-4 " />

                            <p className='text-sm text-right font-bold'> {reacoes} </p>
                            <Button variant={'outline'} size={'icon'} className='rounded-full hover:bg-red-100'>
                                <Heart color="#ef4444" fill='#ef4444' className="h-4 w-4 " />
                            </Button>
                        </div>
                    </div>

                </figure>
                <CollapsibleContent className="space-y-2 flex flex-row gap-3">
                    <aside className='ml-8'>  <Separator className='h-5/6 w-[2px] bg-zinc-200 rounded-lg' orientation="vertical" /> </aside>
                    <section className='w-full gap-3 flex flex-col'>
                        <form onSubmit={handleSubmit(criarResposta)} className="flex w-2/3 space-x-2">
                            <div className="relative flex-1">
                                <Input
                                    {...register("mensagem", {
                                        onChange: (e) => setMensagem(e.target.value)
                                    })}
                                    maxLength={400}
                                    placeholder={errors.mensagem?.message || "Digite sua resposta"}
                                    className={`rounded-xl ${errors.mensagem ? "placeholder-red-500 text-red-500 border-red-500" : ""}`}
                                />
                                <p className="text-right text-xs mr-2">
                                    <span className={mensagem.length >= maxMensagem ? 'text-red-500' : 'text-black'}>{mensagem.length}/{maxMensagem}</span>
                                </p>
                            </div>
                            <Button type="submit" size={"icon"} variant={"outline"} className="hover:bg-green-400 rounded-full">
                                <Send className="size-4" />
                            </Button>
                        </form>

                        {resposta.length === 0 ? (

                            <figure className="relative flex gap-3 items-center overflow-hidden  rounded-3xl border p-6 border-gray-950/[.1] shadow w-4/5">
                                <Clock className='size-8' /> <span className='font-bold'>{dadosUsuario?.nome?.split(' ')[0]}, <span className='font-medium'>parece que ainda não temos respostas neste post.</span> </span>
                            </figure>

                        ) : loadingResposta ? (

                            <SkeletonResposta />

                        ) : (
                            resposta.map((resposta) => {
                                return (
                                    <RespostaCard
                                        nome={resposta.nome}
                                        data={resposta.data_Resposta}
                                        hora={resposta.hora}
                                        likes={resposta.reacoes}
                                        mensagem={resposta.mensagem}
                                    />
                                )
                            })
                        )}
                    </section>

                </CollapsibleContent>
                <Toaster />
            </Collapsible>
        );
    };
export default PostCardGeral