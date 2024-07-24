'use client'
import Header from './components/home/header';
import Footer from './components/home/footer';
import Quadrinho from './components/home/images/quadrinho';
import Main from './components/home/main';
import { useState } from 'react';

export default function Home() {

  const [exibir, setExibir] = useState(0)

  const atualizar = (index: number) => {
    setExibir(index)
  }

  const renderizar = () => {
    switch (exibir) {
      case 1:
        return <Main />
      default:
        return null
    }
  }

  const rolarParaMain = () => {
    const elemento = document.getElementById('main-section');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className='antialiased'>
      <Header />

      <section className='flex flex-row justify-center py-12 max-md:p-10 max-xl:px-20 gap-32 max-lg:gap-20'>
        <div className='text-left mt-24 space-y-7 w-max max-w-lg'>
          <h1 className='font-bold text-red-900 text-7xl max-[900px]:text-6xl'>Bem-vinda ao ONNA</h1>
          <p className={`font-opensans text-2xl max-[900px]:text-xl`}>
            Sua Plataforma de Saúde Feminina e Comunidade de Apoio!
          </p>
          <p className={`font-opensans text-2xl max-[900px]:text-xl`}>
            Cuidado personalizado para todas as fases da saúde feminina!
          </p>


          <button onClick={() => atualizar(1)} className='max-md:text-2xl transition duration-500 hover:bg-red-100 hover:scale-105 shadow-xl font-bold text-3xl text-red-900 border-red-900 border-[3px] rounded-full px-12 py-1'>
            <a href="#anchor">Explore</a>
          </button>


        </div>
        <Quadrinho />
      </section>


      <div className='mt-32' id='anchor'>
        {renderizar()}
      </div>


      <Footer />
    </main>
  );
}
