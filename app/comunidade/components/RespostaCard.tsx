import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Flag, Heart } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import axios from 'axios'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type Props = {
    id: number
    idPost: number
    nome: string
    data: string
    hora: string
    mensagem: string
    likes: number
}


const RespostaCard = ({ data, hora, likes, mensagem, nome, id, idPost }: Props) => {

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


    //denuncia ai para baixo
    const [selected, setSelected] = useState<number | null>(null);
    const options = [
        { id: 1, label: 'Abuso verbal' },
        { id: 2, label: 'Discurso de ódio' },
        { id: 3, label: 'Nome Ofensivo' },
        { id: 4, label: 'Postagem inadequada' },
        { id: 5, label: 'Spam de mensagens' },
    ];

    const handleCheckboxChange = (id: number) => {
        setSelected(prev => (prev === id ? null : id)) //sameerda so deixa um ser marcado por vez
    }

    const [body, setBody] = useState('')
    const maxBody = 1000

    const denuncia_Resposta = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/denuncia", {
                descricao: body,
                idTipo_Usuario: dadosUsuario?.idTipo_Usuario,
                idPostagem: idPost,
                idResposta_Postagem: id,
                idTipo_Denuncia: selected
            })

            if (response.status === 200) {
                toast({
                    title: "Denúncia enviada!",
                    description: "Estamos analisando o caso e tomaremos as providências necessárias.",
                    className: 'bg-green-400 border-none',
                    duration: 3000,
                })

                setTimeout(() => {
                    window.location.reload()
                }, 3001);


            }
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            toast({
                title: "Por favor, especifique sua denúncia!",
                className: 'bg-red-500 border-none',
                duration: 3000,
            });
        }
    }




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
                            <Dialog>
                                <DialogTrigger>
                                    <Button className=' hover:bg-zinc-200 rounded-full' variant="secondary" size="icon">
                                        <Flag className="h-5 w-5" />
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Nova denúncia</DialogTitle>
                                        <DialogDescription>
                                            Especifique sua denúncia <span className='text-red-500'>*</span>
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="px-4 gap-1 flex flex-col">
                                        {options.map(option => (
                                            <div key={option.id} className="flex items-center gap-1">
                                                <Checkbox
                                                    checked={selected === option.id} // Sem conflitos de tipo
                                                    onCheckedChange={() => handleCheckboxChange(option.id)}
                                                />
                                                <Label>{option.label}</Label>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <Textarea
                                            maxLength={1000}
                                            onChange={(e) => setBody(e.target.value)}
                                            className='h-[190px]'
                                            placeholder="Detalhe sua denúncia (opcional)." />
                                        <p className="text-right text-xs mr-2">
                                            <span className={body.length >= maxBody ? 'text-red-500' : 'text-black'}>{body.length}/{maxBody}</span>
                                        </p>
                                    </div>
                                    <Button onClick={denuncia_Resposta} variant={'destructive'}>Enviar denúncia</Button>
                                </DialogContent>
                            </Dialog>

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