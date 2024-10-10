import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'lucide-react'

const esqSenha = () => {
    return (
        <main>
            <section className='w-screen h-screen md:bg-white flex justify-center'>
                                              
                    <div className='w-0 h-0 md:w-2/5 md:h-full md:bg-red-50'></div>
                    <div className='w-full h-full md:w-3/5 justify-center flex '>
                        
                        <div className='w-4/6 md:w-1/2'>
                            <div className='w-12/12 h-20 border-2 mt-4 md:mt-0 md:invisible'></div>
                                <h1 className='justify-center flex text-xl mt-14 font-bold md:text-4xl text-red-900 md:mt-20'>Esqueceu a sua senha?</h1>
                                <p className='mx-6 text-xs mt-8 md:text-base'>Esqueceu sua senha? tudo bem, iremos te ajudar a recuperar.</p>
                                <p className='mx-6 text-xs mt-2 md:text-base'>Digite o seu e-mail e receba o código de acesso!</p>
                                <p className='mx-6 text-xs mt-10 md:text-base md:ml-10'>E-mail:</p>
                                <input className='w-10/12 border-2 ml-6 md:text-base md:mx-10'>
                                </input>
                            
                            <div className='justify-center flex'>
                            <Button className="text-sm mt-5 md:text-base">Entrar</Button>
                            </div>
                        </div>
                    </div>
                      
                
            </section>

        </main>
    )
}

export default esqSenha