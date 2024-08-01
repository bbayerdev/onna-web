import React from 'react'
import Header from '../components/home/header'
import CardMetas from '../components/sobre/cardMetas'
import Footer from '../components/home/footer'
import Mascote from '../components/sobre/imgs/mascote'

const Sobre = () => {
  return (
    <div className='antialiased'>
      <Header />

      <main className='space-y-52'>
        <section className='flex flex-col w-3/4 justify-center space-y-12 m-auto mt-24'>
          <h1 className='text-7xl text-red-900 font-bold'>Quem somos nós</h1>
          <p className='font-opensans text-2xl'>Somos uma equipe de apaixonados por descobertas e avanços!  Estamos comprometidos em garantir que cada aspecto da experiência ONNA seja cuidadosamente desenvolvido e atualizado para atender às necessidades em constante evolução de nossa comunidade global.</p>
          <div className='w-full h-64 border-2 rounded-2xl border-black'>
          </div>
        </section>

        <section className='flex flex-col w-3/4 justify-center space-y-12 m-auto mt-24'>
          <h1 className='text-7xl text-red-900 font-bold'>Equipe</h1>
          <p className='font-opensans text-2xl'>Conheça nossos integrantes e suas contribuições para o projeto.</p>
          <div className='w-full h-[400px] border-black flex flex-row space-x-12 justify-center'>
            <div className='w-1/4 h-full border-2 rounded-3xl border-black'></div>
            <div className='w-1/4 h-full border-2 rounded-3xl border-black'></div>
            <div className='w-1/4 h-full border-2 rounded-3xl border-black'></div>
          </div>
        </section>

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

      </main>
      <Footer />
    </div>
  )
}

export default Sobre