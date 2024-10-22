'use client'
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import Marquee from '@/components/ui/marquee';
import { Heart } from 'lucide-react';



export function CarrosselNewPosts() {

    const [usuarioId, setUsuarioId] = useState<string | null>(null);
    const [userNome, setUserNome] = useState<string | null>(null)
    useEffect(() => {
        // Recupera os dados do usuário do localStorage
        const usuarioData = localStorage.getItem("usuarioData");

        if (usuarioData) {
            const usuario = JSON.parse(usuarioData);
            setUsuarioId(usuario.idTipo_Usuario); // Armazena apenas o ID
            setUserNome(usuario.nome)
        }
    }, []);

    const reviews = [
        {
            name: "Luiz Ricardo",
            forum: "#Gravidez",
            body: "Acho que virei pai... Ds vai ter um neto.",
            img: '/imgs/cachorra.png',
            link: "/gravidez/",
            hora: "3h",
            curtidas: 1192
        },
        {
            name: "Amanda",
            forum: "#Desabafos",
            body: "Estou muito estressada com meus dois filhos.",
            img: "https://avatar.vercel.sh/jill",
            link: "/gravidez/",
            hora: "11h",
            curtidas: 682
        },
        {
            name: "Dr. Fernando",
            forum: "#Autocuidado",
            body: "Guia: como ter relações sexuais seguras.",
            img: "https://avatar.vercel.sh/john",
            link: "/gravidez/",
            hora: "18h",
            curtidas: 232
        },
        {
            name: "Jane",
            forum: "@jane",
            body: "Estou tão animada para essa nova fase da minha vida! ",
            img: "https://avatar.vercel.sh/jane",
            link: "/gravidez/",
            hora: "1h",
            curtidas: 145
        },
        {
            name: "Jenny",
            forum: "@jenny",
            body: "Não consigo esperar para conhecer meu bebê!",
            img: "https://avatar.vercel.sh/jenny",
            link: "/gravidez/",
            hora: "3min",
            curtidas: 487
        },
        {
            name: "James",
            forum: "@james",
            body: "Cada movimento do meu filho é uma alegria imensa.",
            img: "https://avatar.vercel.sh/james",
            link: "/gravidez/",
            hora: "25min",
            curtidas: 312
        },
        
    ];

    const firstRow = reviews.slice(0, reviews.length / 1);

    const ReviewCard = ({
        img,
        name,
        forum,
        body,
        hora,
        curtidas,
    }: {
        img: string;
        name: string;
        forum: string;
        body: string;
        hora: string;
        curtidas: number;
    }) => {
        return (
            <figure
                className={cn(
                    "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                    // light styles
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] shadow",
                    // dark styles
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                )}
            >
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-row w-full">
                        <div className='w-3/4'>
                            <figcaption className="text-sm font-medium dark:text-white">
                                {name}
                            </figcaption>
                            <p className="text-xs font-medium dark:text-white/40">{forum}</p>
                        </div>
                        <div className='flex ml-14'>
                            <p className='text-xs mt-1'> {hora}</p>
                        </div>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm">{body}</blockquote>
                <div className=' flex justify-end'>
                    <Heart size={16} fill='#00000' />
                    <p className='ml-1 text-xs text-right'>{curtidas}</p>
                </div>

            </figure>
        );
    };

    return (
        <div>
            <Marquee pauseOnHover className="[--duration:30s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.forum} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
        </div>
    )
}
export default CarrosselNewPosts