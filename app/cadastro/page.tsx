'use client'
import Link from 'next/link'
import React from 'react'
import GatoPrancheta from '../components/loginCad/images/prancheta'
import Input from '../components/loginCad/input'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const cadastroUserShema = z.object({
    nome: z.string()
        .nonempty('Nome obrigatório')
        .min(6),
    nasc: z.string()
        .nonempty('Data de nascimento obrigatório'),
    email: z.string()
        .nonempty('Email obrigatório')
        .email(),
    senha: z.string()
        .nonempty('Senha obrigatória')
        .min(12)
        .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
        .regex(/[\W_]/, 'A senha deve conter pelo menos um caractere especial'),
    confirmacaoSenha: z.string()
        .nonempty('Confirmação de senha obrigatória')
})

type loginUserFormData = z.infer<typeof cadastroUserShema>

const Page = () => {

    function cadastroUser(data: any) {
        console.log(data);
    }

    const { register, handleSubmit, formState: { errors } } = useForm<loginUserFormData>({
        resolver: zodResolver(cadastroUserShema)
    })


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
                    <h1 className='text-6xl font-bold text-red-900'>Cadastro</h1>

                    <form onSubmit={handleSubmit(cadastroUser)} className='space-y-5 flex flex-col'>

                        <div>
                            <Input label='Nome' type='text' placeholder='Marcia Xavier' {...register('nome')} />
                            {errors.nome && <span className="font-opensans ml-4 p-1 text-red-500">{errors.nome.message}</span>}
                        </div>
                        <div>
                            <Input label='Nascimento' type='date' placeholder='ex: 12/07/2001'  {...register('nasc')} />
                            {errors.nasc && <span className="font-opensans ml-4 p-1 text-red-500">{errors.nasc.message}</span>}
                        </div>
                        <div>
                            <Input label='Email' type='email' placeholder='odeioalunos@gmail.com'  {...register('email')} />
                            {errors.email && <span className="font-opensans ml-4 p-1 text-red-500">{errors.email.message}</span>}
                        </div>
                        <div>
                            <Input label='Senha' type='password' placeholder='●●●●●●●●●●'  {...register('senha')} />
                            {errors.senha && <span className="font-opensans ml-4 p-1 text-red-500">{errors.senha.message}</span>}
                        </div>
                        <div>
                            <Input label='Senha (validação)' type='password' placeholder='●●●●●●●●●●'  {...register('confirmacaoSenha')} />
                            {errors.confirmacaoSenha && <span className="font-opensans ml-4 p-1 text-red-500">{errors.confirmacaoSenha.message}</span>}
                        </div>

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