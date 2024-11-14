import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { CalendarDays, NotebookPen, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import CountPosts from './countPosts';
import CountEntrada from './countEntrada';

const CardUser = () => {

    const [dadosUsuario, setDadosUsuario] = useState<{
        email: string;
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
    }, [])
    //limpar o localStorage --> localStorage.clear();

    return (
        <div>
            <Card className='bg-gray-950/[.01] flex'>
                <CardHeader>
                    <Avatar className='size-32 shadow'>
                        <AvatarImage src='/imgs/cachorra.png' alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent className='p-2 mt-7 w-full'>
                    <h1 className='font-bold text-xl'>
                        {dadosUsuario?.nome || 'Luiz Ricardo'}
                    </h1>
                    <h1>
                        {dadosUsuario?.email || 'bombomreidelas@gmail.com'}
                    </h1>
                    <div className='mt-2 ml-2'>
                        <div className='flex flex-row'>
                          <CountPosts/>
                        </div>
                        <div className='flex flex-row'>
                           <CountEntrada/>
                        </div>
                    </div>
                    <div className='flex justify-end '>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button className='mr-1' variant="outline" size="icon">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side='right' className='ml-2'>
                                    <p>Editar perfil</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardUser