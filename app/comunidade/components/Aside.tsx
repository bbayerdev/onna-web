'use client'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { Package2, Home, TrendingUp, Baby, MicVocal, Flower2, Settings } from 'lucide-react'
import Link from "next/link"
import React, { useState } from 'react'

type Props = {
    exibir: number,
    atualizar: (index: number) => void
}

const Aside = ({ exibir, atualizar }: Props) => {
    //efeito aba ativa:
    const [ativo, setAtivo] = useState<string | null>('home');
    const ativar = (id: string) => { setAtivo(id) } // Atualiza o estado com o ID do tooltip clicado

    return (
        <aside className="fixed justify-between inset-y-0 left-0 z-30 hidden w-14 flex-col border-r bg-background sm:flex md:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="#"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                </Link>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button onClick={() => atualizar(1)}>
                                <Link
                                    href="#"
                                    onClick={() => ativar('home')} // manda o id do to
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${ativo === 'home' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                                >
                                    <Home className="h-5 w-5" />
                                    <span className="sr-only">Home</span>
                                </Link>
                            </button>
                        </TooltipTrigger>
                        <TooltipContent className="font-bold" side="right">Página inicial</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button onClick={() => atualizar(2)}>
                                <Link
                                    href="#"
                                    onClick={() => ativar('popular')} // manda o id do to
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${ativo === 'popular' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                                >
                                    <TrendingUp className="h-5 w-5" />
                                    <span className="sr-only">Popular</span>
                                </Link>
                            </button>
                        </TooltipTrigger>
                        <TooltipContent className="font-bold" side="right">Popular</TooltipContent>
                    </Tooltip>
                    <Separator />
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button onClick={() => atualizar(3)}>
                                <Link
                                    href="#"
                                    onClick={() => ativar('gravidez')} // manda o id do to
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${ativo === 'gravidez' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}                                >
                                    <Baby className="h-5 w-5" />
                                    <span className="sr-only">Gravidez</span>
                                </Link>
                            </button>
                        </TooltipTrigger>
                        <TooltipContent className="font-bold" side="right">Gravidez</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button onClick={() => atualizar(4)}>
                                <Link
                                    href="#"
                                    onClick={() => ativar('desabafos')} // manda o id do to
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${ativo === 'desabafos' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}                                >
                                    <MicVocal className="h-5 w-5" />
                                    <span className="sr-only">Desabafos</span>
                                </Link>
                            </button>
                        </TooltipTrigger>
                        <TooltipContent className="font-bold" side="right">Desabafos</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button onClick={() => atualizar(5)}>
                                <Link
                                    href="#"
                                    onClick={() => ativar('autocuidado')} // manda o id do to
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${ativo === 'autocuidado' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}                                >
                                    <Flower2 className="h-5 w-5" />
                                    <span className="sr-only">Autocuidado</span>
                                </Link>
                            </button>
                        </TooltipTrigger>
                        <TooltipContent className="font-bold" side="right">Autocuidado</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
            <nav className="flex flex-col items-center px-2 sm:py-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button onClick={() => atualizar(6)}>
                                <Link
                                    href="#"
                                    onClick={() => ativar('config')} // manda o id do to
                                    className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${ativo === 'config' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}
                                >
                                    <Settings className="h-5 w-5" />
                                    <span className="sr-only">Configurações</span>
                                </Link>
                            </button>
                        </TooltipTrigger>
                        <TooltipContent className="font-bold" side="right">Configurações</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </nav>
        </aside>
    )
}

export default Aside