import React from 'react'
import Header from '../components/home/header'
import Footer from '../components/home/footer'
import SectionMetas from '../components/sobre/sectionMetas'
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

        <SectionMetas />

        <section className='flex flex-col justify-center m-auto w-3/4'>
          <h1 className='text-7xl font-bold text-red-900'>Conheça nosso mascote</h1>
          <div className='flex flex-row items-center m-auto mt-12'>
            <div className='w-full'>
              <Mascote />
            </div>
            <div className='space-y-10'>
              <h1 className='font-bold text-4xl'>Nosso adorável mascote felino!</h1>
              <p className='font-opensans text-2xl'>Este simpático gato é o símbolo de conforto e companheirismo aqui no ONNA</p>
              <p className='font-opensans text-2xl'>Sua presença amigável é uma lembrança de que nossas usuárias nunca estão sozinhas!</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default Sobre