import axios from 'axios';
import { NotebookPen } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const CountPosts = () => {

    const [idTipoUsuario, setIdTipoUsuario] = useState<number | null>(null);
    const [valor, setValor] = useState(0)

    useEffect(() => {
        const usuarioData = localStorage.getItem('usuarioData')
        if(usuarioData){
            const usuario = JSON.parse(usuarioData)
            setIdTipoUsuario(usuario.idTipo_Usuario)
        }  

        //consumindo apii
        const contagemPost = async () =>{
            try{
                const response = await axios.get(`http://localhost:3000/api/postagemC/${idTipoUsuario}`)
                console.log(response.data[0]['count(idPostagem)'])
                const contagem = response.data[0]['count(idPostagem)']
                setValor(contagem)
            }
            catch(error){
                console.log('deu merda na contagem')
            }
        }

         // Chama a função de contagem de posts
         contagemPost();
    }, [idTipoUsuario])
    

    return (
        <div className='flex'>
            <NotebookPen color='#71717a' className='mt-1' size={15} />
            <p className={'text-zinc-700 mt-1 ml-1 text-xs'}>
                {valor} posts
            </p>
        </div>
    )
}

export default CountPosts