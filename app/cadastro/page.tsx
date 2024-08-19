import React from 'react'

import Link from 'next/link'
import ImgGatoPrancheta from './components/imgGatoPrancheta'
import Footer from '../components/home/footer'

const page = () => {
  return (
    <main className='antialiased flex flex-row h-screen'>

      <section className='w-1/2 flex flex-col px-24 justify-center'>
        <h1 className='font-bold text-7xl text-red-900'>Cadastro</h1>

        <form className='flex flex-col px-5'>
          <label className='text-2xl'>Nome</label>
          <input
            className='border-2 border-black rounded-md text-2xl font-opensans px-2'
            type="email"
          />

          <br />

          <label className='text-2xl'>Nascimento</label>
          <input
            className='border-2 border-black rounded-md text-2xl font-opensans px-2'
            type="date"
          />

          <br />

          <label className='text-2xl'>Email</label>
          <input
            className='border-2 border-black rounded-md text-2xl font-opensans px-2'
            type="email"
          />

          <br />

          <label className='text-2xl'>Senha</label>
          <input
            className='border-2 border-black rounded-md text-2xl font-opensans px-2'
            type="email"
          />

          <br />

          <label className='text-2xl'>Confirmar Senha</label>
          <input
            className='border-2 border-black rounded-md text-2xl font-opensans px-2'
            type="email"
          />


          <button
            type='submit'
            className='text-3xl border-2 font-bold text-red-900 border-red-900 p-1 mt-10 m-10 rounded-full shadow-lg duration-100 hover:bg-red-100'>
            Cadastrar
          </button>
        </form>
        <p className='text-xl'>Já possui conta? <Link className='hover:underline font-bold' href='/cadastro'>Login</Link></p>
      </section>
      <section className='w-1/2 bg-red-100 flex items-center justify-center '>
        <ImgGatoPrancheta />
      </section>
    </main>
  )
}

export default page