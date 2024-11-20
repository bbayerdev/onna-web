'use client'
import { Badge } from "@/components/ui/badge"
import PostCardGeral from "../components/PostCardGeral"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Baby, BadgeCheck, CircleHelp, Heart } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import SkeletonCard from "../usuario/posts/components/SkeletonCard"

export function Autocuidado() {
    const [idTipoUsuario, setIdTipoUsuario] = useState<number | null>(null);
    const [nomeUser, setNome] = useState('')
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        // Carregar o usuário do localStorage e buscar os posts
        const usuarioData = localStorage.getItem("usuarioData");
        if (usuarioData) {
            const usuario = JSON.parse(usuarioData);
            const idTipoUsuario = usuario.idTipo_Usuario;
            const nome = usuario.nome
            setNome(nome)
            setIdTipoUsuario(idTipoUsuario);

            // Chama a função getPosts dentro do useEffect após o idTipoUsuario ser setado
            const fetchPosts = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/api/postagemF/3`);
                    if (response.data.length === 0) {
                        setError(true);

                    } else {
                        // filtra os posts para remover os com ban igual a 1
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
                fetchPosts();  // Chama a função apenas quando idTipoUsuario estiver disponível
            }
        } else {
            setError(false);
            setLoading(false);
        }
    }, []); // O efeito é executado apenas uma vez, quando o componente é montado

    return (
        <main>
            <header className="flex gap-2 items-center">
                <h1 className="text-xl font-bold">Posts do fórum</h1>
                <div>
                    <Badge className="rounded-2xl cursor-default hover:bg-stone-950">
                        #Autocuidado
                    </Badge>
                </div>
                <div className="mt-1">
                    <HoverCard>
                        <HoverCardTrigger>
                            <CircleHelp className="size-4 cursor-pointer" color='#52525b' />
                        </HoverCardTrigger>
                        <HoverCardContent className="gap-2 flex flex-col">
                            <div className="flex flex-row gap-2">
                                <Heart /> <span className="underline font-bold">#Autocuidado</span>
                            </div>
                            <div className="px-2">
                                Dedicado a práticas de bem-estar e saúde mental. Compartilhe dicas e descubra formas de cuidar de si mesma, porque você também é importante!
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            </header>

            <section className="mt-10 gap-10 flex justify-center items-center flex-col">

                {loading ? (

                    <section className=" gap-10 flex flex-col w-full">
                        <SkeletonCard />
                        <SkeletonCard />
                        <SkeletonCard />
                    </section>
                )
                    :
                    (
                        posts.map((post) => {
                            return (
                                <section className='flex w-11/12 justify-center '>
                                    <PostCardGeral
                                        id={post.idPostagem}
                                        idForum={3}
                                        nome={post.nome}
                                        titulo={post.titulo}
                                        subtitulo={post.subtitulo}
                                        reacoes={post.reacoes}
                                        hora={post.data_Postagem}
                                        data={post.hora}
                                    />
                                </section>
                            );
                        })
                    )}
                <div className="flex justify-center items-center mt-20">
                    <BadgeCheck className="inline-block w-5 h-5 mr-1" />
                    <p className="text-base italic">Isso é tudo por agora! Volte mais tarde para ver mais.</p>
                </div>
            </section>
        </main>
    )
}
export default Autocuidado