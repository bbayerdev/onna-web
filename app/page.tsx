'use client'
import { Button } from '@/components/ui/button';
import Footer from './components/home/footer';
import Header from './components/home/header';
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

      <div className='w-5/6 h-20 flex md:hidden border-2 mt-2 ml-10 items-center justify-center place-items-center content-center'></div>
      <section className='flex flex-row justify-center py-12 max-md:p-10 max-xl:px-20 gap-32 max-lg:gap-20'>

        <div className='text-left mt-6 md:mt-24 space-y-7 w-max max-w-lg'>
          <h1 className='font-bold text-red-900 text-5xl'>Bem-vinda ao ONNA</h1>
          <p className='text-2xl'>
            Sua Plataforma de Saúde Feminina e Comunidade de Apoio!
          </p>
          <p className={`font-opensans md:text-2xl text-1xl`}>
            Cuidado personalizado para todas as fases da saúde feminina!
          </p>
          <Button onClick={() => atualizar(1)} className='text-2xl bg-black w-1/2'>
            <a href="#anchor" className='w-full'>Explore</a>
          </Button>
        </div>
        <div className='hidden md:flex'>
          <Quadrinho />
        </div>
      </section>

      <div className='mt-32' id='anchor'>
        {renderizar()}
      </div>

      <Footer />
    </main>
  );
}
