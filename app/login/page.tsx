'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from 'react'
import ImgGatoLupa from './components/imgato'
import Link from 'next/link'

const loginUserSchema = z.object({
    email: z.string()
        .nonempty('Email obrigatório'),
    senha: z.string()
        .nonempty('Senha obrigatória')
})

type loginUserSchema = z.infer<typeof loginUserSchema>



const page = () => {

    const [output, setOutput] = useState('')

    const { register, handleSubmit, formState: { errors } } = useForm<loginUserSchema>({
        resolver: zodResolver(loginUserSchema)
    })

    function loginUser(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    return (
        <main className='antialiased flex flex-row h-screen'>
            <section className='w-1/2 bg-red-100 flex items-center justify-center '>
                <ImgGatoLupa />
            </section>
            <section className='w-1/2 flex flex-col px-24 justify-center'>
                <h1 className='font-bold text-7xl text-red-900'>Login</h1>
                <p className='font-opensans text-2xl py-4'>Comece sua jornada para uma saúde feminina mais informada e capacitada!</p>

                <form onSubmit={handleSubmit(loginUser)} className='flex flex-col p-5'>
                    <label className='text-2xl'>Email</label>
                    <input
                        className='border-2 border-black rounded-md text-3xl font-opensans px-2'
                        type="email"
                        {...register('email')}
                    />
                    {errors.email && <span className="text-red-500 font-opensans">{errors.email.message}</span>}

                    <br />

                    <label className='text-2xl'>Senha</label>
                    <input
                        className='border-2 border-black rounded-md text-3xl font-opensans px-2'
                        type="password"
                        {...register('senha')}
                    />
                    {errors.senha && <span className="text-red-500 font-opensans">{errors.senha.message}</span>}

                    <a href="#" className='text-xl text-right mt-2 hover:underline'>Esqueceu sua senha?</a>
                    <button
                        type='submit'
                        className='text-3xl border-2 font-bold text-red-900 border-red-900 p-1 mt-10 m-10 rounded-full shadow-lg duration-100 hover:bg-red-100'>
                        Entrar
                    </button>
                </form>
                <p className='text-xl'>Não possui conta? <Link className='hover:underline font-bold' href='/cadastro'>Cadastre-se</Link></p>
            </section>
        </main>
    )
}

export default page