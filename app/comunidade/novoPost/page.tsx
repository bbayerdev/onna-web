'use client'
import React, { useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import PreCardPost from "./components/PreCardPost"
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"
import api from '../../../api/api';
import { useRouter } from 'next/navigation';

const frameworks = [
    { id: 1, value: "#Gravidez", label: "Gravidez" },
    { id: 2, value: "#Maternidade", label: "Maternidade" },
    { id: 3, value: "#Desabafos", label: "Desabafos" },
    { id: 4, value: "#Autocuidado", label: "Autocuidado" },
];

//tipagem zodddd
const newPostSchema = z.object({
    titulo: z.string().nonempty('Título do post obrigatório')
});
//inteligencia do ts:
type newPostData = z.infer<typeof newPostSchema>;

export function NovoPost() {
    //faz parte do command
    const [open, setOpen] = React.useState(false)
    const [forumEscolhido, setforumEscolhido] = React.useState("")
    //tipagem dados:
    const [titulo, setTitulo] = useState('')
    const maxTitilo = 50
    const [body, setBody] = useState('')
    const maxBody = 3000


    //imagem
    const [nomeArquivo, setNomeArquivo] = useState<string>(""); // tipagem explícita
    const [filePath, setFilePath] = useState<string>("");
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setNomeArquivo(file.name);
            setFilePath(URL.createObjectURL(file));
        }
    }

    // config do useForm com validação Zod
    const { register, handleSubmit, formState: { errors } } = useForm<newPostData>({
        resolver: zodResolver(newPostSchema),
    });

    //puxando dados do user no localStorage
    const [dadosUsuario, setDadosUsuario] = useState<{
        idTipo_Usuario: number,
    } | null>(null)
    useEffect(() => {
        //ao carregar a pagina
        const data = localStorage.getItem('usuarioData')
        if (data) {
            const usuario = JSON.parse(data) // verifica e passa os dados do local para essa variavel
            setDadosUsuario(usuario) // leva pro useState
        }
    }, [])
    //limpar o localStorage --> localStorage.clear();

    // função para enviar o post para a API
    const onSubmit = async (data: newPostData) => {
        try {
            const response = await api.post("/api/postagem", {
                titulo: data.titulo,
                subtitulo: body,
                imagem: filePath, // Opcional
                idTipo_Usuario: dadosUsuario?.idTipo_Usuario,
                idForum: frameworks.find(f => f.value === forumEscolhido)?.id,
            });

            if (response.status === 200) {
                toast({
                    title: "Post criado com sucesso!",
                    className: 'bg-green-400',
                    duration: 1500,
                });
                // redireciona para a comunidade/seusPosts
                setTimeout(() => {
                    router.push("/comunidade/usuario/posts");
                }, 1500);
            }
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            toast({
                title: "Escolha o fórum onde deseja direcionar seu post!",
                className: 'bg-red-400',
                duration: 3000,
            });
        }
    };

    const router = useRouter(); // hook para redirecionamento
    return (
        <main>
            <header className="w-full text-2xl mt-5 font-bold">Criar post</header>
            <section className="flex flex-row mt-10 pl-5 gap-20 h-screen">
                <div className="w-2/5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Label className="text-base" htmlFor="Título">Título post <span className="text-red-500">*</span></Label>
                        <Input
                            {...register("titulo")}
                            type="text"
                            placeholder="De um título para seu post."
                            maxLength={50}
                            id="Titulo"
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                        {errors.titulo && <span className="text-red-500 text-sm">{errors.titulo.message}</span>}
                        <p className="text-right text-xs mr-2">
                            <span className={titulo.length >= maxTitilo ? 'text-red-500' : 'text-black'}>{titulo.length}/{maxTitilo}</span>
                        </p>

                        <Label className="text-base" htmlFor="message">Texto post</Label>
                        <Textarea
                            className="h-[250px]"
                            placeholder="Escreva o conteúdo do seu post aqui."
                            id="Body"
                            maxLength={3000}
                            onChange={(e) => setBody(e.target.value)}
                        />
                        <p className="text-right text-xs mr-2">
                            <span className={body.length >= maxBody ? 'text-red-500' : 'text-black'}>{body.length}/{maxBody}</span>
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
                        <Button type="submit" className='w-full text-base mt-10 hover:bg-green-400 shadow' variant={'outline'}>
                            Postar <Rocket className='size-4 ml-2' />
                        </Button>
                    </form>
                </div>
                <Separator orientation="vertical" />
                <div className="w-1/2">
                    <h1 className="w-full text-xl font-bold">Pré-visualização do post</h1>
                    <div className="mt-8">
                        <PreCardPost
                            titulo={titulo}
                            body={body}
                            forum={forumEscolhido}
                            imagem={nomeArquivo}
                        />
                    </div>
                </div>
            </section>
            <Toaster />
        </main>
    )
}
export default NovoPost