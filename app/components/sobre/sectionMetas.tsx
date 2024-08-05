
import React from 'react'
import CardMetas from './cardMetas'

const SectionMetas = () => {
    return (
        <section className='flex flex-col w-4/5 justify-center space-y-12 m-auto mt-24'>
            <h1 className='text-7xl text-red-900 font-bold text-center'>Metas</h1>

            <div className='w-full h-[320px] border-black flex flex-row space-x-12 justify-center'>
                <CardMetas
                    titulo='Aumentar o engajamento do usuário'
                    meta='Aumentar o número de usuárias ativas em nossa plataforma'
                />

                <CardMetas
                    titulo='Melhorar a acessibilidade'
                    meta='Plataforma mais acessível e fácil de usar para mulheres de todas as origens e níveis de experiência'
                />

                <CardMetas
                    titulo='Atualizar regularmente os conteúdos'
                    meta='Garantindo que nossas usuárias tenham acesso a conteúdos precisos e úteis em sua jornada de cuidados com a saúde'
                />
            </div>

        </section>
    )
}

export default SectionMetas