'use client'
import { Badge } from "@/components/ui/badge"
import PostCardGeral from "../components/PostCardGeral"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Baby, CircleHelp, Link, PencilLine } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"
import SkeletonCard from "../usuario/posts/components/SkeletonCard"

export function Gravidez() {
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
                    const response = await axios.get(`http://localhost:3000/api/postagemF/1`);
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
                        #Gravidez
                    </Badge>
                </div>
                <div className="mt-1">
                    <HoverCard>
                        <HoverCardTrigger>
                            <CircleHelp className="size-4 cursor-pointer" color='#52525b' />
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
                                        idForum={1}
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

            </section>
        </main>
    )
}
export default Gravidez