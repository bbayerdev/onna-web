'use client'
import Link from 'next/link'
import React from 'react'
import GatoLupa from '../components/loginCad/images/lupa'
import Input from '../components/loginCad/input'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginUserSchema = z.object({
    email: z.string()
        .nonempty('Email obrigatório')
        .email('Email inválido'),
    senha: z.string()
        .nonempty('Senha obrigatória'),
})

type loginUserFormData = z.infer<typeof loginUserSchema>


const Page = () => {

    function loginUser(data: any) {
        console.log(data);
    }

    const { register, handleSubmit, formState: { errors } } = useForm<loginUserFormData>({
        resolver: zodResolver(loginUserSchema)
    })

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

                    <form onSubmit={handleSubmit(loginUser)} className='space-y-8 flex flex-col'>

                        <div>
                            <Input label='Email' type='text' placeholder='bombomreidelas@gmail.com' {...register('email')} />
                            {errors.email && <span className="font-opensans ml-4 p-1 text-red-500">{errors.email.message}</span>}
                        </div>

                        <div>
                            <Input label='Senha' type='password' placeholder='●●●●●●●●●●' {...register('senha')} />
                            {errors.senha && <span className="font-opensans ml-4 p-1 text-red-500">{errors.senha.message}</span>}
                        </div>

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