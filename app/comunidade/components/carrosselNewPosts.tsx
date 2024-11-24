'use client'

import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import axios from "axios";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";


export function CarrosselNewsPosts() {
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
                "relative w-72 overflow-hidden cursor-pointer rounded-3xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] shadow"
            )}
        >
            <div className="flex flex-row justify-between items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={`https://ui-avatars.com/api/?name=${name}&background=random`} />
                <div className="flex flex-row w-full">
                    <div className="w-full">
                        <figcaption className="text-sm w-full">{name}</figcaption>
                        <p className="text-xs text-zinc-700">{forum}</p>
                    </div>
                    <div className="flex">
                        <p className="text-xs mt-1">{hora}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full">
                <blockquote className="mt-2 text-sm flex">{body}</blockquote>
        
                <div className="flex items-center">
                    <p className="ml-1 text-xs">{curtidas}</p>
                    <Heart size={16} color="#ef4444" fill="#ef4444" />
                </div>
            </div>
        </figure>
        
        );
    };

    return (
        <div>
            <Marquee pauseOnHover className="[--duration:180s]">
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
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
        </div>
    )
}
export default CarrosselNewsPosts