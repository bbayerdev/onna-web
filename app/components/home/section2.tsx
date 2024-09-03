
import React from 'react'
import Quadrinho2 from './images/quadrinho2'

const Section2 = () => {
    return (
        <section className='flex flex-col md:flex-row justify-center max-md:p-10 max-xl:px-20 gap-32 max-lg:gap-20'>
        <div className='max-w-sm w-full  border-black mt-10 md:mt-24'>
            <Quadrinho2/>
        </div>
        <div className='text-left mt-0 md:mt-24 space-y-7 w-max max-w-lg'>
            <h1 className='font-bold text-xl md:text-3xl'>Em que acreditamos?</h1>
            <h1 className='font-bold text-red-900 text-4xl md:text-7xl'>Nosso compromisso</h1>
            <p className={`font-opensans text-1xl mr-40 md:text-2xl`}>
                Oferecer uma plataforma acessível e inclusiva com recursos confiáveis para apoiar a saúde e bem-estar das mulheres!
            </p>
            <button className='text-xl transition duration-500 hover:bg-slate-200 hover:scale-105 shadow-xl font-bold md:text-3xl  border-black border-[3px] rounded-full px-10 py-1'>
                Conheça nossa equipe
            </button>
        </div>
    </section>
)
}

export default Section2