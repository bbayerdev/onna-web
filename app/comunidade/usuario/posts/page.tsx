'use client'
import React, { useEffect, useState } from 'react'
import PostCardUser from './components/PostCardUser'
import axios from 'axios'


const page = () => {
  const [idTipoUsuario, setIdTipoUsuario] = useState<number | null>(null);
  const [posts, setPosts] = useState<any[]>([]); // Estado para armazenar os posts
  const [loading, setLoading] = useState<boolean>(true); // Estado de carregamento
  const [error, setError] = useState<string>(""); // Estado para mensagens de erro
  useEffect(() => {
    // Carregar o usuário do localStorage e buscar os posts
    const usuarioData = localStorage.getItem("usuarioData");
    if (usuarioData) {
      const usuario = JSON.parse(usuarioData);
      const idTipoUsuario = usuario.idTipo_Usuario;
      setIdTipoUsuario(idTipoUsuario);

      // Chama a função getPosts dentro do useEffect após o idTipoUsuario ser setado
      const fetchPosts = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/postagemP/${idTipoUsuario}`);
          if (response.data.length === 0) {
            setError("Você ainda não possui posts.");
          } else {
            setPosts(response.data);
          }
        } catch (error) {
          setError("Erro ao carregar os posts");
        } finally {
          setLoading(false);
        }
      };

      if (idTipoUsuario) {
        fetchPosts();  // Chama a função apenas quando idTipoUsuario estiver disponível
      }
    } else {
      setError("Dados de usuário não encontrados.");
      setLoading(false);
    }
  }, []); // O efeito é executado apenas uma vez, quando o componente é montado
  return (
    <main>
      <h1 className='text-xl font-bold'>Seus Posts</h1>
      <section className="mt-10 gap-5 flex flex-col">
        post {idTipoUsuario}
        
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

export default page