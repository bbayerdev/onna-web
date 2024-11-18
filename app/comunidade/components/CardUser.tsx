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
import { Skeleton } from '@/components/ui/skeleton';

const CardUser = () => {

    const [dadosUsuario, setDadosUsuario] = useState<{
        email: string;
        nome: string;
    } | null>(null)

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = localStorage.getItem('usuarioData')
        try {
            if (data) {
                const usuario = JSON.parse(data) // verifica e passa os dados do local para essa variavel
                setDadosUsuario(usuario) // leva pro useState
            }
        }
        catch (erro) {

        }
        finally {
            setLoading(false)
        }
    }, [])
    //limpar o localStorage --> localStorage.clear();

    return (
        <div>
            <Card className='bg-gray-950/[.01] flex rounded-3xl'>
                <CardHeader>
                    <Avatar className='size-32 shadow'>
                        <AvatarImage src='/imgs/cachorra.png' alt="@shadcn" />
                        <AvatarFallback className='bg-zinc-300'></AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent className='p-2 mt-7 w-full'>
                    {loading ?
                        (
                            <Skeleton className='h-4 w-3/4 mt-1' />
                        )
                        :
                        (
                            <h1 className='font-bold text-xl'>
                                {dadosUsuario?.nome}
                            </h1>
                        )
                    }
                    {loading ?
                        (
                            <Skeleton className='h-3 w-2/4 mt-3' />
                        )
                        :
                        (
                            <h1>
                                {dadosUsuario?.email}
                            </h1>
                        )
                    }
                    <div className='mt-2 ml-2'>
                        <div className='flex flex-row'>
                            <CountPosts />
                        </div>
                        <div className='flex flex-row'>
                            <CountEntrada />
                        </div>
                    </div>
                    <div className='flex justify-end '>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button className='mr-2 rounded-full' variant="outline" size="icon">
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