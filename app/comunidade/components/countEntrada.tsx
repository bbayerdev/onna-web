import { CalendarDays, NotebookPen } from 'lucide-react'
import React, { useEffect, useState } from 'react'

//funcao que formata a data
const formatarData = (data: string) => {
    const [dia, mes, ano] = data.split('/').map(Number); // Divide a data e converte para números
    const dataObj = new Date(ano, mes - 1, dia); // Cria o objeto Date (mes - 1 pois começa em 0)

    // Lista de meses para exibir o nome por extenso
    const meses = [
        "janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    const mesNome = meses[dataObj.getMonth()]; // Obtém o nome do mês
    return `entrou em ${mesNome} de ${ano}`; // Formato "entrou em [mês] de [ano]"
};

const CountEntrada = () => {
    const [data, setData] = useState('')

    useEffect(() => {
        const usuarioData = localStorage.getItem('usuarioData')
        console.log(usuarioData)
        if (usuarioData) {
            const usuario = JSON.parse(usuarioData)
            const dataCadastro = (usuario.data_Cadastro)
            setData(formatarData(dataCadastro))
        }

    }, [])

    return (
        <div className='flex'>
            <CalendarDays color='#71717a' className='mt-1' size={15} />
            <p className='text-zinc-700 text-xs mt-1 ml-1'>
                {data}
            </p>
        </div>
    )
}

export default CountEntrada