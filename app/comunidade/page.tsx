'use client'
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

export function page() {
    return (
        <main className="flex min-h-screen w-full flex-col">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex md:flex">
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
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Home className="h-5 w-5" />
                                    <span className="sr-only">Home</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="font-bold" side="right">Página inicial</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <TrendingUp className="h-5 w-5" />
                                    <span className="sr-only">Popular</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="font-bold" side="right">Popular</TooltipContent>
                        </Tooltip>
                        <Separator />
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Baby className="h-5 w-5" />
                                    <span className="sr-only">Gravidez</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="font-bold" side="right">Gravidez</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <MicVocal className="h-5 w-5" />
                                    <span className="sr-only">Desabafos</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="font-bold" side="right">Desabafos</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Flower2 className="h-5 w-5" />
                                    <span className="sr-only">Autocuidado</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="font-bold" side="right">Autocuidado</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                >
                                    <Settings className="h-5 w-5" />
                                    <span className="sr-only">Settings</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="font-bold" side="right">Configurações</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
            <header className="p-2 sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
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
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-foreground"
                            >
                                <Home className="h-5 w-5" />
                                Página Inicial
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <TrendingUp className="h-5 w-5" />
                                Popular
                            </Link>
                            <Separator />
                            <h1>Fóruns</h1>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <Baby className="h-5 w-5" />
                                Gravidez
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <MicVocal className="h-5 w-5" />
                                Desabafos
                            </Link>
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <Flower2 className="h-5 w-5" />
                                Autocuidado
                            </Link>
                            <Separator />
                            <Link
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                            >
                                <Settings className="h-5 w-5" />
                                Configurações
                            </Link>
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
            <Separator />
        </main>
    )
}
export default page