'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Baby, CalendarDays, Droplets, Heart, Ribbon, Search, Sprout } from 'lucide-react'

type ArtigoData = {
  titulo: string
  resumo: string
  fonte: string
  data_Publicacao: string
  idArtigo: number
}

const PostDetails = () => {
  const { id } = useParams()//pega o id passado na url
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [artigo, setArtigo] = useState<ArtigoData | null>(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/artigoS/${id}`);
          const artigo = response.data[0] //pega o primeiro item do array que a api manda

          if (artigo) {
            setArtigo({
              titulo: artigo.titulo,
              resumo: artigo.resumo,
              fonte: artigo.fonte,
              data_Publicacao: artigo.data_Publicacao || '',
              idArtigo: artigo.idGenero
            });
          } else {
            setError(true); // Marca como erro se nenhum artigo for encontrado
          }
        } catch (err) {

        } finally {
          setLoading(false);
        }
      }
      fetchPost();
    }
  }, [id]);

  if (loading) return <div>Carregando...</div>;

  return (
    <main className="p-8">
      <div className='flex '>
        <div className='flex gap-4 justify-center items-center'>
          {
            artigo?.idArtigo === 1 ? (
              <div className="bg-red-200 rounded-lg p-1 h-min">
                <Droplets className="size-8" color="#ef4444" />
              </div>
            ) : artigo?.idArtigo === 2 ? (
              <div className="bg-blue-50 rounded-lg p-1">
                <Baby className="size-8" color="#60a5fa" />
              </div>
            ) : artigo?.idArtigo === 3 ? (
              <div className="bg-green-100 rounded-lg p-1">
                <Sprout className="size-8" color="#4ade80" />
              </div>
            ) : artigo?.idArtigo === 4 ? (
              <div className="bg-indigo-100 rounded-lg p-1">
                <Heart className="size-8" color="#8b5cf6" />
              </div>
            ) : (
              <div className="bg-yellow-50 rounded-lg p-1">
                <Ribbon className="size-8" color="#fde047" />
              </div>
            )
          }
          <h1 className="text-2xl font-bold">{artigo?.titulo}</h1>
        </div>
      </div>

      <div className="flex mt-8 ">
        <p className="text-zinc-700 text- mt-1 ml-1 italic">
          Publicado em  {artigo?.data_Publicacao}
        </p>
      </div>

      <article className="text-lg p-12 items-center flex justify-center text-justify">{artigo?.resumo}</article>

      <footer className="mt-10 text-gray-500 justify-end flex px-12">
        Fonte: <a href={artigo?.fonte} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{artigo?.fonte}</a>
      </footer>
    </main>
  );
};

export default PostDetails;
