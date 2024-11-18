'use client'
import { CornerDownRight, Ellipsis, EllipsisVertical, Heart, Send, SendHorizontal, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Toaster } from "@/components/ui/toaster"
import { useRouter } from "next/navigation";
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
import RespostaCard from './RespostaCard';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

//tipagem resposta zodddd
const newResposta = z.object({
    mensagem: z.string().nonempty('Digite sua resposta')
});
//inteligencia do ts:
type newRespostaData = z.infer<typeof newResposta>;

const PostCardUser =
    ({
        id,
        ban,
        idForum,
        titulo,
        subtitulo,
        reacoes,
        hora,
        data,
    }: {
        id: number;
        ban: number;
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
        const [error, setError] = useState<boolean>(false); // Estado para mensagens de erro
        //async excluir
        async function excluirPost(id: number) {
            try {
                const response = await axios.put('http://localhost:3000/api/postagemE', {
                    idPostagem: id
                });

                if (response.status === 200) {
                    toast({
                        title: "Post excluído com sucesso.",
                        className: 'bg-red-500',
                        duration: 2000,
                    });

                    setTimeout(() => {
                        window.location.reload();
                    }, 200)
                }
            } catch (error) {
                setError(true);
            }
        }

        //aqui para baixo tudo sobre enviar resposta
        const [resposta, setResposta] = useState('')
        const maxResposta = 100
        const [isOpen, setIsOpen] = React.useState(false)

        // config do useForm com validação Zod
        const { register, handleSubmit, formState: { errors } } = useForm<newRespostaData>({
            resolver: zodResolver(newResposta),
        });
        const onSubmit = (data: newRespostaData) => {
            console.log("Resposta enviada:", data);
        };

        return (
            <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex w-full flex-col space-y-2">

                <figure className="relative cursor-pointer overflow-hidden rounded-3xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] shadow w-full">
                    <div className="flex flex-row items-center gap-4">
                        <img className="rounded-full size-12" alt="" src='/imgs/cachorra.png' />
                        <div className="flex flex-row w-full">
                            <div className='w-full flex gap-2'>
                                <figcaption className="font-bold text-xl">
                                    {dadosUsuario?.nome.split(" ").slice(0, 2).join(" ") || 'nao logado'}
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

                        <div className='flex gap-2 justify-center items-center'>
                            <p className='text-sm text-right font-bold'> {reacoes} </p>
                            <Heart color="#ef4444" fill='#ef4444' className="h-4 w-4 " />
                            <div className='flex gap-1 mr-2 '>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button className='mr-1 hover:bg-red-100 rounded-full' variant="outline" size="icon">
                                            <Trash2 className="h-5 w-5" color="#ef4444" />
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle className="text-2xl">Excluir este post?</AlertDialogTitle>
                                            <AlertDialogDescription className="text-base">
                                                O post será removido e não poderá ser recuperado.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => excluirPost(id)} className="bg-red-500 hover:bg-red-600"> Confirmar </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    </div>
                    <Toaster />
                </figure>

                <CollapsibleContent className="space-y-2 flex flex-row gap-3">
                    <aside className='ml-8'>  <Separator className='h-5/6 w-[2px] bg-zinc-200 rounded-lg' orientation="vertical" /> </aside>
                    <section className='w-full gap-3 flex flex-col'>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex w-2/3 space-x-2">
                            <div className="relative flex-1">
                                <Input
                                    {...register("mensagem", {
                                        onChange: (e) => setResposta(e.target.value)
                                    })}
                                    maxLength={100}
                                    placeholder={errors.mensagem?.message || "Digite sua resposta"}
                                    className={`rounded-xl ${errors.mensagem ? "placeholder-red-500 text-red-500 border-red-500" : ""}`}
                                />
                                <p className="text-right text-xs mr-2">
                                    <span className={resposta.length >= maxResposta ? 'text-red-500' : 'text-black'}>{resposta.length}/{maxResposta}</span>
                                </p>
                            </div>
                            <Button type="submit" size={"icon"} variant={"outline"} className="hover:bg-green-300 rounded-full">
                                <Send className="size-4" />
                            </Button>
                        </form>

                        <RespostaCard
                            nome='Arthur Martiniano'
                            data='17/11/2024'
                            hora='19:11'
                            likes={12}
                            mensagem='calaboca jumento'
                        />

                        <RespostaCard
                            nome='Bayer '
                            data='17/11/2024'
                            hora='19:11'
                            likes={12}
                            mensagem='salve xines'
                        />


                    </section>

                </CollapsibleContent>
            </Collapsible>
        );
    };
export default PostCardUser