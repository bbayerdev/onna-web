import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { Separator } from "@/components/ui/separator"
import { Home, Flower2, Baby, Package2, Settings, MicVocal, TrendingUp, Menu, Search, UserRound, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Props = {
    exibir: number,
    atualizar: (index: number) => void
}

function Header({ atualizar, exibir }: Props) {
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
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    type="search"
                    placeholder="Pesquisar..."
                    className="w-full rounded-lg bg-background pl-8 sm:w-[336px] lg:w-[336px]"
                />
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
                        <DropdownMenuItem>Post</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Seus Posts</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TooltipProvider>

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
                                    <UserRound />
                                </Button>
                            </DropdownMenuTrigger>
                        </TooltipTrigger>
                        <TooltipContent className="font-bold" side="bottom">Usuário</TooltipContent>
                    </Tooltip>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Usuário</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Meus dados</DropdownMenuItem>
                        <DropdownMenuItem><Link href='/ajuda'>Ajuda</Link></DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">Sair</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </TooltipProvider>
        </header>
    )
}

export default Header