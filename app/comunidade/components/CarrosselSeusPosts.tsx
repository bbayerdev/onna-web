'use client'
import { cn } from "@/lib/utils";
import Marquee from '@/components/ui/marquee';
import { Heart, Pencil, Trash2 } from 'lucide-react';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CarrosselSeusPosts() {

    const reviews = [
        {
            name: "Luiz Ricardo",
            forum: "#Gravidez",
            body: "Descobri que estou grávida... Que mistura de emoções!",
            img: '/imgs/cachorra.png',
            link: "/gravidez/",
            hora: "3h",
            curtidas: 1350
        },
        {
            name: "Luiz Ricardo",
            forum: "#Desabafos",
            body: "Não sei mais como lidar com a rotina e meus filhos.",
            img: '/imgs/cachorra.png',
            link: "/desabafos/",
            hora: "5h",
            curtidas: 890
        },
        {
            name: "Luiz Ricardo",
            forum: "#Autocuidado",
            body: "Guia: Priorize seu bem-estar durante a gestação.",
            img: '/imgs/cachorra.png',
            link: "/autocuidado/",
            hora: "8h",
            curtidas: 740
        },
        {
            name: "Luiz Ricardo",
            forum: "#Maternidade",
            body: "A maternidade me transformou de tantas formas.",
            img: '/imgs/cachorra.png',
            link: "/maternidade/",
            hora: "1h",
            curtidas: 420
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
                    "relative cursor-pointer overflow-hidden rounded-xl border p-4",
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] shadow",
                    'w-full'
                )}
            >
                <div className="flex flex-row items-center gap-4">
                    <img className="rounded-full" width="36" height="36" alt="" src={img} />
                    <div className="flex flex-row w-full">
                        <div className='w-3/4 flex gap-2'>
                            <figcaption className="font-bold">
                                {name}
                            </figcaption>
                            <p className="text-sm text-zinc-700 ">{forum}</p>
                        </div>
                        <div className='flex justify-end w-full'>
                            <p className='text-xs px-2'> {hora}</p>
                            <Heart size={16} fill='#00000' />
                            <p className='ml-1 text-xs text-right'>{curtidas}</p>
                        </div>
                    </div>
                </div>
                <blockquote className="mt-4 ml-10 text-sm">
                    {body}
                </blockquote>
                <div className=' flex justify-end'>
                    <Button className='mr-1' variant="outline" size="icon">
                        <Pencil className="h-4 w-4" />
                    </Button>
                    <Button className='mr-1 hover:bg-red-100' variant="outline" size="icon">
                        <Trash2 color="#ef4444" className="h-4 w-4 " />
                    </Button>
                </div>

            </figure>
        );
    };

    return (
        <div className="w-full px-12">
            <Link href={'/comunidade/user/posts'}>
                <Button variant={'ghost'} className='text-xl'>Seus últimos posts</Button>
            </Link>
            <div className="flex h-[500px] w-full flex-row ml-8">
                <div className="w-full mt-10 overflow-hidden relative ">
                    <Marquee pauseOnHover vertical reverse className="[--duration:40s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.forum} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white"></div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white"></div>
                </div>
            </div>
        </div>

    )
}
export default CarrosselSeusPosts