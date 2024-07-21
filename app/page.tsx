
import { opens } from '../app/layout'
import Header from './components/header';
import Logo from './components/logo';
import Quadrinho from './components/quadrinho';

export default function Home() {
  return (
    <main className='antialiased'>
      <Header />
      <section className='flex flex-row justify-center py-16 px-12 gap-32'>
        <div className='text-left mt-24 space-y-7 w-max max-w-lg'>
          <h1 className='font-bold text-red-900 text-7xl'>Bem-vinda ao ONNA</h1>
          <p className={`font-opensans text-2xl`}>
            Sua Plataforma de Saúde Feminina e Comunidade de Apoio!
          </p>
          <p className={`font-opensans text-2xl`}>
            Cuidado personalizado para todas as fases da saúde feminina!
          </p>
          <button className='transition duration-500 hover:bg-red-100 hover:scale-105 shadow-xl font-bold text-3xl text-red-900 border-red-900 border-[3px] rounded-full px-12 py-1'>
            Explore
          </button>
        </div>
        <Quadrinho />
      </section>
    </main>
  );
}
