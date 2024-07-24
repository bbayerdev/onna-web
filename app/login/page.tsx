
import Link from 'next/link'
import React from 'react'
import GatoLupa from '../components/loginCad/images/lupa'
import Input from '../components/loginCad/input'

const Page = () => {
    return (
        <main className='flex flex-row'>
            <section className='flex justify-center items-center h-screen w-1/2 bg-red-200'>
                <div className='p-10'>
                    <GatoLupa />
                </div>
            </section>

            <section className='flex flex-col justify-center items-center h-screen w-1/2'>

                <Link className='absolute top-0 right-0 mt-10 mr-14 text-2xl font-bold hover:underline' href='/'>Inicio</Link>

                <div className='w-9/12 space-y-12 '>
                    <h1 className='text-7xl font-bold text-red-900'>Login</h1>

                    <form className='space-y-8 flex flex-col'>
                        <Input label='Email' tipo='text' placeholder='bombomreidelas@gmail.com' />
                        <Input label='Senha' tipo='password' placeholder='●●●●●●●●●●' />

                        <div className='flex justify-end px-2 pb-2 p-2'>
                            <button className='text-xl hover:text-bold hover:underline'>Esqueceu a senha?</button>
                        </div>
                        <div className='flex justify-center'>
                            <button className='max-md:text-2xl w-1/2 transition duration-500 hover:bg-red-100 hover:scale-105 shadow-xl font-bold text-4xl text-red-900 border-red-900 border-[3px] rounded-full px-12 py-1'>Entrar</button>
                        </div>
                    </form>

                    <h1 className='mt-5 text-xl'>Não posui uma conta? <Link className='font-bold hover:underline' href='/cadastro'>Cadastre-se</Link></h1>
                </div>

            </section>
        </main>
    )
}

export default Page