'use client'
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Marquee from '@/components/ui/marquee';
import { Baby, Flower2, Heart, HeartIcon, Mic2, Pointer, Search } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import axios from 'axios';
import { Skeleton } from "@/components/ui/skeleton";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import TypingAnimation from "@/components/ui/typing-animation";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"


export function CarrosselSeusPosts() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [nome, setNome] = useState("");
    const [idTipoUsuario, setIdTipoUsuario] = useState<number | null>(null);

    useEffect(() => {
        // Carregar o usuário do localStorage e buscar os posts
        const usuarioData = localStorage.getItem("usuarioData");
        if (usuarioData) {
            const usuario = JSON.parse(usuarioData);
            const idTipoUsuario = usuario.idTipo_Usuario;
            const nome = usuario.nome;
            setNome(nome);
            setIdTipoUsuario(idTipoUsuario);

            // Chama a função getPosts dentro do useEffect após o idTipoUsuario ser setado
            const fetchPosts = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/postagemP/${idTipoUsuario}`);

                    if (response.data.length === 0) {
                        setError(true);
                    } else {
                        // Filtra os posts para remover os com status_Ban igual a 1
                        const filteredPosts = response.data.filter((post: { status_Ban: number }) => post.status_Ban !== 1);
                        setPosts(filteredPosts);
                    }
                } catch (error) {
                    setError(true);
                } finally {
                    setLoading(false);
                }
            };

            if (idTipoUsuario) {
                fetchPosts();
            }
        } else {
            setError(false);
            setLoading(false);
        }
    }, []);

    // Mapeamento do idForum para o nome do fórum
    const ReviewCard = ({
        id,
        img,
        name,
        forumId,
        body,
        hora,
        curtidas,
        data,
    }: {
        id: string;
        img: string;
        name: string;
        forumId: number;  // Agora usamos o forumId
        body: string;
        hora: string;
        curtidas: number;
        data: string
    }) => {
        const [forum, setForum] = useState('');  // Estado para o nome do fórum

        useEffect(() => {
            const forumMap: Record<number, string> = {
                1: '#Gravidez',
                2: '#Maternidade',
                3: '#Desabafos',
            };
            setForum(forumMap[forumId] || '#Autocuidado');  // Define o nome do fórum
        }, [forumId]);  // Executa o useEffect sempre que forumId mudar

        return (
            <figure
                className={cn(
                    "relative cursor-pointer overflow-hidden rounded-3xl border p-4",
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] shadow",
                    'w-full'
                )}
            >
                <div className="flex flex-row items-center gap-4">
                    <img className="rounded-full" width="36" height="36" alt="" src={img} />
                    <div className="flex flex-row w-full justify-between">
                        <div className='flex gap-2'>
                            <figcaption className="font-bold text-xl">
                                {name.split(" ").slice(0, 2).join(" ") || 'Nome do usuário'}
                            </figcaption>
                            {forum && <Badge className='pointer-events-none text-xs mt-1 h-min rounded-2xl'>{forum}</Badge>}  {/* Mostra o fórum */}
                        </div>
                        <div className='flex justify-end text-sm'>
                            <p className='px-2'>{data}</p>
                            <p>•</p>
                            <p className='px-2 font-bold'> {hora}</p>
                        </div>
                    </div>
                </div>
                <blockquote className="mt-4 ml-10 text-base font-bold">{body}</blockquote>
                <div className='flex justify-end'>
                    <div className="flex flex-row justify-center items-center gap-2 mr-2">
                        <p className='ml-1 text-xs text-right font-bold'>{curtidas}</p>
                        <Heart size={18} color="#ef4444" fill='#ef4444' />
                    </div>

                    <Link href={'/comunidade/usuario/posts'}>
                        <Button className='mr-1 hover:bg-blue-100 rounded-full' variant="outline" size="icon">
                            <Search color="#2563eb" className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </figure>
        );
    };

    return (
        <div className="w-full px-12">
            <Link href={'/comunidade/usuario/posts'}>
                <Button variant={'ghost'} className='text-xl font-bold'>
                    Seus últimos posts
                </Button>
            </Link>

            {loading ? (
                <div>
                    <div className="flex h-[500px] w-full flex-row ml-8">
                        <div className="w-full mt-10 gap-5 flex flex-col overflow-hidden relative">
                            <Skeleton className="h-[140px] w-full rounded-xl" />
                            <Skeleton className="h-[140px] w-full rounded-xl" />
                        </div>
                    </div>
                </div>
            ) : error ? (
                <div className="flex h-[500px] w-full flex-row ml-8">
                    <div className="w-full flex flex-col mt-8 gap-5">
                        <Card className="w-full rounded-3xl">
                            <CardHeader>
                                <CardTitle className="text-xl">
                                    <TypingAnimation
                                        className="text-xl text-left font-bold text-black dark:text-white"
                                        text={`${nome.split(" ")[0]}, aqui serão exibidos seus últimos posts.`}
                                        duration={50}
                                    />
                                </CardTitle>
                                <CardDescription className="text-base">
                                    Vamos começar? Compartilhe dúvidas, experiências ou desabafe com a comunidade!                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="w-full rounded-3xl">
                            <CardHeader>
                                <CardTitle className="text-xl">
                                    <TypingAnimation
                                        className="text-xl text-left font-bold text-black dark:text-white"
                                        text={`Quer ver como os posts funcionam primeiro?`}
                                        duration={50}
                                    />
                                </CardTitle>
                                <CardDescription className="text-base">
                                    <div className="flex gap-2 mt-1">
                                        <HoverCard>
                                            <HoverCardTrigger>
                                                <Badge className="rounded-full pointer-events-none bg-blue-400 gap-1 text-blue-500 shadow-none bg-opacity-20">
                                                    <Baby className="size-4" /> Gravidez
                                                </Badge>
                                            </HoverCardTrigger>
                                            <HoverCardContent className="gap-2 flex flex-col">
                                                <div className="flex flex-row gap-2">
                                                    <Baby /> <span className="underline font-bold">#Gravidez</span>
                                                </div>
                                                <div className="px-2">
                                                    É destinado a dúvidas relacionadas a tudo sobre gravidez. Compartilhe sua dúvida ou ajude alguém agora mesmo!
                                                </div>
                                            </HoverCardContent>
                                        </HoverCard>

                                        <HoverCard>
                                            <HoverCardTrigger>
                                                <Badge className="rounded-full pointer-events-none bg-pink-400 gap-1 text-pink-500 shadow-none bg-opacity-20">
                                                    <Heart className="size-4" /> Maternidade
                                                </Badge>
                                            </HoverCardTrigger>
                                            <HoverCardContent className="gap-2 flex flex-col">
                                                <div className="flex flex-row gap-2">
                                                    <HeartIcon /> <span className="underline font-bold">#Maternidade</span>
                                                </div>
                                                <div className="px-2">
                                                    É destinado a discussões e trocas de experiências sobre a maternidade. Compartilhe histórias, dicas e encontre apoio em cada etapa dessa jornada.
                                                </div>
                                            </HoverCardContent>
                                        </HoverCard>

                                        <HoverCard>
                                            <HoverCardTrigger>
                                                <Badge className="rounded-full pointer-events-none bg-purple-400 gap-1 text-purple-500 shadow-none bg-opacity-20">
                                                    <Mic2 className="size-4" /> Desabafos
                                                </Badge>
                                            </HoverCardTrigger>
                                            <HoverCardContent className="gap-2 flex flex-col">
                                                <div className="flex flex-row gap-2">
                                                    <Mic2 /> <span className="underline font-bold">#Desabafos</span>
                                                </div>
                                                <div className="px-2">
                                                    Um espaço seguro para compartilhar sentimentos e desabafar sobre os desafios do dia a dia. Aqui, você pode ser ouvida sem julgamentos.

                                                </div>
                                            </HoverCardContent>
                                        </HoverCard>

                                        <HoverCard>
                                            <HoverCardTrigger>
                                                <Badge className="rounded-full pointer-events-none bg-yellow-400 gap-1 text-yellow-500 shadow-none bg-opacity-20">
                                                    <Flower2 className="size-4" /> Autocuidado
                                                </Badge>  
                                            </HoverCardTrigger>
                                            <HoverCardContent className="gap-2 flex flex-col">
                                                <div className="flex flex-row gap-2">
                                                    <Flower2 /> <span className="underline font-bold">#Autocuidado</span>
                                                </div>
                                                <div className="px-2">
                                                    Dedicado a práticas de bem-estar e saúde mental. Compartilhe dicas e descubra formas de cuidar de si mesma, porque você também é importante!                                                </div>
                                            </HoverCardContent>
                                        </HoverCard>
                                    </div>
                                    <div className="flex gap-1 mt-3">
                                        <Pointer className="size-4 mb-1" />
                                        <TypingAnimation
                                            className="text-sm italic text-zinc-500 font-medium"
                                            text={`Passe o mouse sobre as categorias para saber mais!`}
                                            duration={50}
                                        />
                                    </div>
                                </CardDescription>

                            </CardHeader>
                        </Card>
                    </div>
                </div>
            ) : (
                <div className="flex h-[500px] w-full flex-row ml-8">
                    <div className="w-full mt-10 overflow-hidden relative">
                        <Marquee pauseOnHover vertical reverse className="[--duration:40s]">
                            {posts.map((post) => (
                                <ReviewCard
                                    key={post.idPostagem}
                                    id={post.idPostagem}
                                    img={post.img || '/imgs/cachorra.png'}
                                    name={post.nome || 'Nome do usuário'}
                                    forumId={post.idForum}
                                    body={post.titulo || 'Sem título'}
                                    hora={post.hora || '00:00'}
                                    data={post.data_Postagem}
                                    curtidas={post.reacoes || 0}
                                />
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white"></div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white"></div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CarrosselSeusPosts;
