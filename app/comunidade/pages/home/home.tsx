
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import Marquee from '@/components/ui/marquee';
import Link from 'next/link';



function Home() {
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
      link: "/gravidez"
    },
    {
      name: "Amanda",
      forum: "#Desabafos",
      body: "Estou muito estressada com meus dois filhos.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "Dr. Fernando",
      forum: "#Autocuidado",
      body: "Guia: como ter relações sexuais seguras.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      forum: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      forum: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      forum: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);

  const ReviewCard = ({
    img,
    name,
    forum,
    body,
  }: {
    img: string;
    name: string;
    forum: string;
    body: string;
  }) => {
    return (
        <figure
          className={cn(
            "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
            // light styles
            "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
            // dark styles
            "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <img className="rounded-full" width="32" height="32" alt="" src={img} />
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {name}
              </figcaption>
              <p className="text-xs font-medium dark:text-white/40">{forum}</p>
            </div>
          </div>
          <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
  };

  return (
    <main className="">
      <div className='p-6'>
        <h1 className='text-xl'>Novos Posts</h1>
      </div>
      <div>
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.forum} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white"></div>
      </div>

    </main>
  );
}

export default Home;
