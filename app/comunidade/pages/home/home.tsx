import { log } from 'console';
import { useEffect, useState } from 'react';

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

    return (
        <div>
            {usuarioId ? (
                <h1>ID do Usuário: {usuarioId}</h1>
            ) : (
                <h1>Nenhum usuário logado</h1>
            )}
            <h2>Bom dia {userNome}</h2>
        </div>
    );
}

export default Home;
