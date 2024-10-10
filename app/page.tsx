'use client'
import { Button } from '@/components/ui/button';
import Footer from './components/home/footer';
import Header from './components/home/header';
import Quadrinho from './components/home/images/quadrinho';
import Main from './components/home/main';
import { useState } from 'react';
import WordPullUp from "@/components/magicui/word-pull-up";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BlurIn from "@/components/magicui/blur-in";
import { motion } from 'framer-motion';

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
        <div className='text-left mt-6 md:mt-16 space-y-7 w-max max-w-lg'>
          <WordPullUp
            className='font-bold text-red-900 text-xl md:text-3xl text-left'
            words="Seja bem vinda!"
          />

          <div className='flex'>
            <GradualSpacing
              className="md:text-5xl text-3xl font-extrabold tracking-[-0.1em] text-left"
              text="Conheça o ONNA"
            />
          </div>

          <BlurIn
            word="Sua Plataforma de Saúde Feminina e Comunidade de Apoio!"
            className='md:text-xl text-base font-opensans'
            duration={0.5}
          />

          <BlurIn
            word="Cuidado personalizado para todas as fases da saúde feminina!"
            className='md:text-xl text-base font-opensans'
            duration={0.5}
          />

          <motion.button
            onClick={() => atualizar(1)}
            className='md:text-xl text-base bg-black w-1/3 rounded-md flex py-1 font-opensans'
            initial={{ opacity: 0, filter: 'blur(10px)' }} // Começa com blur e opacidade 0
            animate={{ opacity: 1, filter: 'blur(0px)' }} // Anima para sem blur e opacidade 1
            transition={{ duration: 0.7 }} // Ajuste a duração conforme necessário
          >
            <a href="#anchor" className='w-full text-white'>Explore</a>
          </motion.button>

        </div>
        <div className='hidden md:flex'>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }} // Estado inicial com blur
            animate={{ opacity: 1, filter: 'blur(0px)' }} // Estado final sem blur
            transition={{ duration: 0.5 }} // Ajuste a duração conforme necessário
          >
            <Quadrinho />
          </motion.div>
        </div>
      </section>
      <div id='anchor'/>
      <div className='mt-32' >
        {renderizar()}
      </div>

      <Footer />
    </main>
  );
}
