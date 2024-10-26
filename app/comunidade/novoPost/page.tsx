'use client'
import React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import CardPost from "../components/CardPost"
import { Textarea } from "@/components/ui/textarea"
import {
    Command,
    CommandGroup,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Check, ChevronsUpDown, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const frameworks = [
    {
        value: "#Gravidez",
        label: "Gravidez",
    },
    {
        value: "#Maternidade",
        label: "Maternidade",
    },
    {
        value: "#Desabafos",
        label: "Desabafos",
    },
    {
        value: "#Autocuidado",
        label: "Autocuidado",
    },
]

export function NovoPost() {
    //faz parte do command
    const [open, setOpen] = React.useState(false)
    //tipagem dados:
    const [titulo, setTitulo] = useState('')
    const maxTitilo = 50
    const [body, setBody] = useState('')
    const maxBody = 3000
    const [forumEscolhido, setforumEscolhido] = React.useState("")

    //imagem
    const [nomeArquivo, setNomeArquivo] = useState<string>(""); // tipagem explícita
    const [filePath, setFilePath] = useState<string>("");
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setNomeArquivo(file.name);
            setFilePath(URL.createObjectURL(file));
        }
    };

    return (
        <main>
            <header className="w-full text-2xl mt-5 font-bold">Criar post</header>
            <section className="flex flex-row mt-10 pl-5 gap-20 h-screen">
                <div className="w-2/5">
                    <form action="">
                        <Label className="text-base" htmlFor="Título">Título post <span className="text-red-500">*</span></Label>
                        <Input
                            className={titulo.length > maxTitilo ? 'text-red-500' : 'text-black'}
                            type="text"
                            placeholder="De um título para seu post."
                            id="Titulo"
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                        <p className="text-right text-xs mr-2">
                            <span className={titulo.length > maxTitilo ? 'text-red-500' : 'text-black'}>{titulo.length}/{maxTitilo}</span>
                        </p>

                        <Label className="text-base" htmlFor="message">Texto post</Label>
                        <Textarea
                            className="h-[250px]"
                            placeholder="Escreva o conteúdo do seu post aqui."
                            id="Body"
                            onChange={(e) => setBody(e.target.value)}
                        />
                        <p className="text-right text-xs mr-2">
                            <span className={body.length > maxBody ? 'text-red-500' : 'text-black'}>{body.length}/{maxBody}</span>
                        </p>

                        <div className="flex">
                            <div>
                                <Label className="text-base" htmlFor="Fórum">Fórum <span className="text-red-500">*</span></Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={open}
                                            className="w-[200px] justify-between"
                                        >
                                            {forumEscolhido
                                                ? frameworks.find((framework) => framework.value === forumEscolhido)?.label
                                                : "Selecione um fórum"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[200px] p-0">
                                        <Command>
                                            <CommandList>
                                                <CommandGroup>
                                                    {frameworks.map((framework) => (
                                                        <CommandItem
                                                            key={framework.value}
                                                            value={framework.value}
                                                            onSelect={(currentValue) => {
                                                                setforumEscolhido(currentValue === forumEscolhido ? "" : currentValue)
                                                                setOpen(false)
                                                            }}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    forumEscolhido === framework.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                            {framework.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div>
                                <Label className="text-base" htmlFor="Imagem">Imagem (opcional)</Label>
                                <Input id="picture" type="file" onChange={handleFileChange} />
                            </div>
                        </div>
                        <Button className='w-full text-base mt-10 hover:bg-green-400 shadow' variant={'outline'}>
                            Postar <Rocket className='size-4 ml-2' />
                        </Button>
                    </form>
                </div>
                <Separator orientation="vertical" />
                <div className="w-1/2">
                    <h1 className="w-full text-xl font-bold">Pré-visualização do post</h1>
                    <div className="mt-8">
                        <CardPost
                            name="Luiz Ricardo"
                            titulo={titulo}
                            body={body}
                            forum={forumEscolhido}
                            curtidas={0}
                            respostas={0}
                            imagem={nomeArquivo}
                        />
                    </div>
                </div>
            </section>
        </main>
    )
}
export default NovoPost