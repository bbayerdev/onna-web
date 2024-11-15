'use client'
import React, { useEffect, useState } from 'react'
import PostCardUser from './components/PostCardUser'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { PencilLine } from 'lucide-react'
import Link from 'next/link'
import SkeletonCard from './components/SkeletonCard'
import CountPosts from '../../components/countPosts'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

const page = () => {
  const [idTipoUsuario, setIdTipoUsuario] = useState<number | null>(null);
  const [nomeUser, setNome] = useState('')
  const [posts, setPosts] = useState<any[]>([]); // Estado para armazenar os posts
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
  const [error, setError] = useState<boolean>(false); // Estado para mensagens de erro

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
          const response = await axios.get(`http://localhost:3000/api/postagemP/${idTipoUsuario}`);
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
      <div className='flex flex-row gap-4'>
        <h1 className='text-xl font-bold'>Seus Posts</h1>
        <div className='mt-1 flex flex-row gap-4'>
          {loading ? (<Skeleton className='w-14' />) : (<CountPosts />)}
          {error ? null : (<Link href={'/comunidade/novoPost'}> <Badge variant="secondary" className='hover:bg-zinc-200 rounded-2xl'>Criar novo post</Badge> </Link>)}
        </div>
      </div>

      {loading ? (

        <section className="mt-10 gap-10 flex flex-col">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </section>

      )
        : error ?
          (
            <section className="mt-10 gap-5 flex justify-center items-center flex-col">
              <div className='flex flex-col items-center mt-20'>
                <div className='p-20 flex flex-col justify-center items-center bg-zinc-100 rounded-2xl border-gray-950/[.1] bg-gray-950/[.01] shadow'>
                  <p className='text-2xl'> <span className='font-bold'>{nomeUser.split(" ")[0]}</span>, você ainda não criou nenhum post!</p>
                  <Link href={'/comunidade/novoPost'}>
                    <Button className='mt-10  gap-2 h-12 text-md hover:bg-green-400' variant={'outline'}>
                      Escreva seu primeiro post agora! <PencilLine className='size-4' />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>
          ) : (
            posts.map((post) => {
              return (
                <section className="mt-10 gap-5 flex justify-center items-center flex-col">
                  <section className='flex w-11/12 justify-center'>
                    <PostCardUser
                      id={post.idPostagem} // Certifique-se de que o post tenha um id único
                      ban={post.status_Ban}
                      idForum={post.idForum}
                      titulo={post.titulo}
                      subtitulo={post.subtitulo}
                      reacoes={post.reacoes}
                      hora={post.hora}
                      data={post.data_Postagem}
                    />
                  </section>
                </section>
              );
            })
          )}
    </main>
  )
}

export default page