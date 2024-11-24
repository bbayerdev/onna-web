'use client'
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import Marquee from '@/components/ui/marquee';
import { Heart } from 'lucide-react';
import axios from 'axios';
import { Skeleton } from '@/components/ui/skeleton';

export function CarrosselNewPosts() {

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
                    const response = await axios.get(`http://localhost:3000/api/postagemPOP`);

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



    const ReviewCard = ({
        img,
        name,
        forumId,
        body,
        hora,
        curtidas,
    }: {
        img: string;
        name: string;
        forumId: number;
        body: string;
        hora: string;
        curtidas: number;
    }) => {

        const [forum, setForum] = useState('');  // Estado para o nome do fórum

        useEffect(() => {
            const forumMap: Record<number, string> = {
                2: '#Gravidez',
                4: '#Maternidade',
                1: '#Desabafos',
            };
            setForum(forumMap[forumId] || '#Autocuidado');  // Define o nome do fórum
        }, [forumId]);  // Executa o useEffect sempre que forumId mudar

        return (
            <figure
                className={cn(
                    "relative w-72 cursor-pointer overflow-hidden rounded-3xl border p-4",
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] shadow"
                )}
            >
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="32" height="32" alt="" src={`https://api.dicebear.com/9.x/glass/svg?seed=${name.split(" ").pop()}`} />
                    <div className="flex flex-row w-full">
                        <div className="w-full">
                            <figcaption className="text-sm w-full">{name}</figcaption>
                            <p className="text-xs text-zinc-700">{forum}</p>
                        </div>
                        <div className="flex">
                            <p className="text-xs font-bold mt-1">{hora}</p>
                        </div>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm p-2">
                    {body.length > 50 ? body.slice(0, 50) + "..." : body}
                </blockquote>
                <div className="absolute bottom-2 right-4 flex items-center">
                    <Heart size={16} color="#ef4444" fill="#ef4444" />
                    <p className="ml-1 text-xs">{curtidas}</p>
                </div>
            </figure>
        );
    };

    return (
        <div>
            {loading ? (
                <div>
                    <div className="flex w-full flex-row">
                        <div className="w-full mt-2 flex gap-5">
                            <Skeleton className="h-[130px] w-80 rounded-3xl" />
                            <Skeleton className="h-[130px] w-80 rounded-3xl" />
                            <Skeleton className="h-[130px] w-80 rounded-3xl" />
                            <Skeleton className="h-[130px] w-80 rounded-3xl" />
                            <Skeleton className="h-[130px] w-80 rounded-3xl" />
                        </div>
                    </div>
                </div>
            ) : (<Marquee pauseOnHover className="[--duration:180s]">
                {posts.map((post) => (
                    <ReviewCard
                        key={post.idPostagem}
                        forumId={post.idForum}
                        img={post.img || '/imgs/cachorra.png'}
                        name={post.nome || 'Nome do usuário'}
                        body={post.titulo}
                        hora={post.data_Postagem || '00:00'}
                        curtidas={post.reacoes || 0}
                    />
                ))}
            </Marquee>)}

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
        </div>
    )
}
export default CarrosselNewPosts