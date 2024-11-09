'use client'
import React, { useEffect, useState } from 'react'
import PostCardUser from './components/PostCardUser'
import axios from "axios"; // Importando o axios

const Page = () => {
  const [posts, setPosts] = useState<any[]>([]); // Estado para armazenar os posts
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
  const [error, setError] = useState<string>(""); // Estado para mensagens de erro

  useEffect(() => {
    const usuarioData = localStorage.getItem("usuarioData");
    if (usuarioData) {
        const usuario = JSON.parse(usuarioData);
        const idTipoUsuario = usuario.idTipo_Usuario;

        // Define a URL base da API dependendo do ambiente (local ou produção)
        const baseURL = process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000'
            : ''; // ajuste para a URL do ambiente de produção, se aplicável

        const fetchPosts = async () => {
            try {
                // A URL agora está enviando o idTipo_Usuario na query string
                const res = await axios.get(`${baseURL}/api/postagem?idTipo_Usuario=${idTipoUsuario}`);
                if (res.data.length === 0) {
                    setError("Você ainda não possui posts.");
                } else {
                    setPosts(res.data);
                }
            } catch (error) {
                console.error("Erro ao buscar posts:", error);
                setError("Erro ao carregar os posts");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }
}, []);

  return (
    <main className="px-5 py-10">
      <h1 className='text-xl font-bold'>Seus posts</h1>
      <section className="mt-10 gap-5 flex flex-col">
        {loading ? (
          <p>Carregando...</p> // Mensagem de carregamento
        ) : error ? (
          <p className="text-red-500">{error}</p> // Se houver um erro
        ) : (
          posts.map((post) => {
            
            return (
              <PostCardUser
                key={post.id} // Certifique-se de que o post tenha um id único
                idForum={post.idForum}
                titulo={post.titulo}
                subtitulo={post.subtitulo}
                reacoes={post.reacoes}
                hora={post["Hora da postagem"]}
                data={post["Data da postagem"]}
              />
            );
          })
        )}
      </section>
    </main>
  )
}

export default Page;
