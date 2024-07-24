import React from 'react'
import InstaIco from './images/instaIco'
import TtIco from './images/ttIco'
import GitIco from './images/gitIco'
import LinkIco from './images/linkIco'

const Footer = () => {
  return (
    <footer className='bg-zinc-900 flex flex-col mt-32 text-zinc-300 p-24 py-32 justify-center items-center'>
    <div className='flex flex-row'>
      <div className='space-y-5 py-8 w-3/4'>
        <h1 className='text-3xl font-bold text-white'>Logo</h1>
        <p className='font-opensans text-xl'>Conheça mais sobre nós do onna.</p>
        <button className='bg-white text-black text-2xl p-1 px-10 rounded-full font-bold hover:bg-black hover:text-white'>
          Sobre
        </button>
      </div>

      <div className='flex flex-col'>
        <div className='flex flex-row gap-10'>
          <div>
            <h1 className='text-2xl font-bold mb-4 text-white'>Termos de serviço:</h1>
            <button className='bg-transparent border-[1px] text-2xl p-1 px-10 rounded-full font-bold hover:bg-white hover:text-black'>
              Termos
            </button>
          </div>
          <div>
            <h1 className='text-2xl font-bold mb-4  text-white'>Redes sociais:</h1>
            <div className='space-x-2 flex '>
              <a href='#' className='p-2'><InstaIco /></a>
              <a href='#' className='p-2'><TtIco /></a>
              <a href='#' className='p-2'><GitIco /></a>
              <a href='#' className='p-2'><LinkIco /></a>
            </div>
          </div>
        </div>
        <div>
          <p className='text-xl mt-5'>O ONNA é um espaço dedicado às mulheres para compartilharem experiências pessoais, obterem apoio e encontrarem informações sobre saúde menstrual e bem-estar. Junte-se à nossa comunidade e faça parte dessa jornada.</p>
          <br />
          <div className='flex flex-row gap-10'>
            <a className='font-bold text-lg hover:underline text-white ' href="#">Politica de Privacidade</a>
            <a className='font-bold text-lg hover:underline text-white ' href="#">Termos de serviço</a>
          </div>
        </div>
      </div>
    </div>
    <div className='w-11/12 h-px bg-white mt-32'/>
    <h1 className='font-opensans mt-2 text-sm'>&copy; 2024 ONNA. Todos os direitos reservados.</h1>
  </footer>
  )
}

export default Footer