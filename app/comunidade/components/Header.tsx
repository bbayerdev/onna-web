import React, { useEffect, useState } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { Separator } from "@/components/ui/separator"
import { Home, Flower2, Baby, Package2, Settings, MicVocal, TrendingUp, Menu, Search, UserRound, Plus } from "lucide-react"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

type Props = {
    exibir: number,
    atualizar: (index: number) => void
}



function Header({ atualizar, exibir }: Props) {

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

    return (
        <header className="bg-white p-2 sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0  sm:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        <Link
                            href="#"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                            <span className="sr-only">Logo</span>
                        </Link>
                        <button onClick={() => atualizar(1)}>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <Home className="h-5 w-5" />
                                Página Inicial
                            </Link>
                        </button>
                        <button onClick={() => atualizar(2)}>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <TrendingUp className="h-5 w-5" />
                                Popular
                            </Link>
                        </button>
                        <Separator />
                        <h1>Fóruns</h1>
                        <button onClick={() => atualizar(3)}>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <Baby className="h-5 w-5" />
                                Gravidez
                            </Link>
                        </button>
                        <button onClick={() => atualizar(4)}>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <MicVocal className="h-5 w-5" />
                                Desabafos
                            </Link>
                        </button>
                        <button onClick={() => atualizar(5)}>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <Flower2 className="h-5 w-5" />
                                Autocuidado
                            </Link>
                        </button>
                        <Separator />
                        <button onClick={() => atualizar(6)}>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <Settings className="h-5 w-5" />
                                Configurações
                            </Link>
                        </button>
                    </nav>
                </SheetContent>
            </Sheet>

            <div className="relative ml-auto flex-1 sm:grow-0">

            </div>

            <TooltipProvider>
                <DropdownMenu>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="overflow-hidden rounded-full"
                                >
                                    <Plus />
                                </Button>
                            </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent className="font-bold" side="bottom">Criar</TooltipContent>
                    </Tooltip>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Criar</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link href={'/comunidade/novoPost'}> <DropdownMenuItem> Post </DropdownMenuItem> </Link>
                        <DropdownMenuSeparator />
                        <Link href={'/comunidade/usuario/posts'}> <DropdownMenuItem> Seus Posts </DropdownMenuItem> </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TooltipProvider>

            <Avatar>
                <AvatarImage src={`https://api.dicebear.com/9.x/glass/svg?seed=${dadosUsuario?.nome.split(" ").pop()}`} />
                <AvatarFallback className='bg-zinc-300'></AvatarFallback>
            </Avatar>
        </header>
    )
}

export default Header