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
import { LogOut, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import CountPosts from './countPosts';
import CountEntrada from './countEntrada';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
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

const CardUser = () => {

    const [dadosUsuario, setDadosUsuario] = useState<{
        email: string
        nome: string
        tipo_Usuario: number
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

    console.log(dadosUsuario)

    return (
        <div>
            <Card className='bg-gray-950/[.01] flex rounded-3xl'>
                <CardHeader>
                    <Avatar className='size-32 ml-2 shadow'>
                        <AvatarImage src={`https://api.dicebear.com/9.x/glass/svg?seed=${dadosUsuario?.nome.split(" ").pop()}`} alt="@shadcn" />
                        <AvatarFallback className='bg-zinc-300'></AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent className='p-2 flex flex-col justify-center mt-8 w-full'>
                    {loading ?
                        (
                            <Skeleton className='h-4 w-3/4 mt-1' />
                        )
                        :
                        (
                            <div className='flex items-center justify-between pr-5'>
                                <h1 className='font-bold text-xl'>
                                    {dadosUsuario?.nome}
                                </h1>
                                <div className=''>
                                    {dadosUsuario?.tipo_Usuario ? (
                                        <Badge className=" rounded-full">
                                            <Stethoscope className='size-4 mr-1' />  Profissional
                                        </Badge>

                                    ) : (
                                        null
                                    )}
                                </div>

                            </div>

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
                    <div className='flex justify-end'>

                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button className='mr-2 rounded-full hover:bg-red-100' variant="outline" size="icon">
                                    <LogOut color='#ef4444' />
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle className='text-xl'>{dadosUsuario?.nome}, já vai embora?</AlertDialogTitle>
                                    <AlertDialogDescription className='text-base'>
                                        Você está prestes a sair da sua conta. Esperamos te ver de volta em breve! Deseja continuar?
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Não, quero ficar</AlertDialogCancel>
                                    <AlertDialogAction className='bg-red-500 hover:bg-red-600'>
                                        <Link href={'/'}>
                                            Sair agora
                                        </Link>
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardUser