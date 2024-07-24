
import Link from 'next/link'
import React from 'react'
import GatoPrancheta from '../components/loginCad/images/prancheta'
import Input from '../components/loginCad/input'

const Page = () => {
    return (
        <main className='flex flex-row-reverse'>
            <section className='flex justify-center items-center h-screen w-1/2 bg-red-200'>
                <div className='p-10'>
                    <GatoPrancheta />
                </div>
            </section>

            <section className='flex flex-col justify-center items-center h-screen w-1/2'>

                <Link className='absolute top-0 right-0 mt-10 mr-14 text-2xl font-bold hover:underline' href='/'>Inicio</Link>

                <div className='w-9/12 space-y-6 '>
                    <h1 className='text-7xl font-bold text-red-900'>Cadastro</h1>
                    <form className='space-y-5 flex flex-col'>
                        <Input label='Nome' tipo='text' placeholder='Marcia Xavier' />
                        <Input label='Nascimento' tipo='date' placeholder='ex: 12/07/2001' />
                        <Input label='Email' tipo='text' placeholder='Berenice' />
                        <Input label='Senha' tipo='password' placeholder='●●●●●●●●●●' />
                        <Input label='Senha (validação)' tipo='password' placeholder='●●●●●●●●●●' />

                        <div className='flex justify-center p-2'>
                            <button className='max-md:text-2xl w-1/2 transition duration-500 hover:bg-red-100 hover:scale-105 shadow-xl font-bold text-4xl text-red-900 border-red-900 border-[3px] rounded-full px-12 py-1'>Entrar</button>
                        </div>
                    </form>

                    <h1 className='mt-5 text-xl'>Já possui conta? <Link className='font-bold hover:underline' href='/login'>Login</Link></h1>
                </div>

            </section>
        </main>
    )
}

export default Page