import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'lucide-react'

const esqSenha3 = () => {
    return (
        <main>
            <section className='w-screen h-screen md:bg-red-50 place-items-center grid'>      
                    <div className='w-10/12 h-5/6 border bg-white flex col'>
                        <div className='w-7/12 border flex-col'>
                            <h1 className='mt-32 ml-32 text-4xl font-bold text-red-900'>Nova Senha!</h1>
                            <p className='ml-32 text-xs mt-8 md:text-base'>Crie uma nova senha para acesso ao site.</p>
                            <p className='ml-32 text-xs mt-16 md:text-base'>Senha:</p>
                            <input className='ml-32 md:text-base border-2 w-4/6 mt-3'>
                                </input>
                             <p className='ml-32 text-xs mt-16 md:text-base'>Confirmar senha:</p>   

                             <input className='ml-32 md:text-base border-2 w-4/6 mt-3'>
                             </input>
                             <div className='justify-center flex'>
                            <Button className="text-sm mt-5 md:text-base">Atualizar</Button>
                            </div>

                        </div>
                        <div className='w-5/12'></div>

                    </div>
            </section>

        </main>
    )
}

export default esqSenha3