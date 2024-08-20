'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import ImgGatoPrancheta from './components/imgGatoPrancheta'
import api from '../../api/api'

const Page = () => {

  async function postTipo_Usuario(event: React.FormEvent) {
    event.preventDefault();
    try {
      const res = await api.post("/api/auth/signUp", {
        email: email.current?.value,
        senha: senha.current?.value,
        nome: nome.current?.value,
        status_Ban: false,
        dataNasc: "2001-08-21T00:00:00Z",
        avatar: 3,
        tipo_Usuario: true
      })
    } catch (error) {
      console.log("ERRO: " + error)
    }
  }

  const nome = useRef<HTMLInputElement>(null)
  const nascimento = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const senha = useRef<HTMLInputElement>(null)

  return (
    <main className='antialiased flex flex-row h-screen'>
      <section className='w-1/2 flex flex-col px-24 justify-center'>
        <h1 className='font-bold text-7xl text-red-900'>Cadastro</h1>

        <form onSubmit={postTipo_Usuario} className='flex flex-col px-5'>
          <label className='text-2xl'>Nome</label>
          <input
            className='border-2 border-black rounded-md text-2xl font-opensans px-2'
            type="text"
            ref={nome}
          />

          <br />

          <label className='text-2xl'>Nascimento</label>
          <input
            className='border-2 border-black rounded-md text-2xl font-opensans px-2'
            type="date"
            ref={nascimento}
          />

          <br />

          <label className='text-2xl'>Email</label>
          <input
            className='border-2 border-black rounded-md text-2xl font-opensans px-2'
            type="email"
            ref={email}
          />

          <br />

          <label className='text-2xl'>Senha</label>
          <input
            className='border-2 border-black rounded-md text-2xl font-opensans px-2'
            type="password"
            ref={senha}
          />

          <br />

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

export default Page