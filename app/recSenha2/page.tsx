import React from 'react'
import { Button } from "@/components/ui/button"
import { Link } from 'lucide-react'

const esqSenha2 = () => {
    return (
        <main>
            <section className='w-screen h-screen md:bg-white flex justify-center'>
                <div className='w-11/12 h-5/6 mt-9 bg-white border-[1px] flex row'>
                    <div className='w-0 h-0 md:w-2/5 md:h-full md:bg-red-50'></div>
                    <div className='w-full h-full md:w-3/5'>
                        <div className='w-12/12 h-20 border-2 mt-4 md:mt-0 md:invisible flex'></div>
                        <h1 className='justify-center flex text-xl mt-14 font-bold md:text-4xl text-red-900'>Recuperando a sua senha!</h1>
                        <p className='mx-6 text-xs mt-8 md:text-base flex justify-center md:ml-14'>Digite no campo abaixo o código que te enviamos por E-mail.</p>
                        <div className='flex col h-14 space-x-4 justify-center mt-8'>
                            <input className='w-14 border-2  md:text-base text-center'>
                            </input>
                            <input className='w-14 border-2  md:text-base text-center'>
                            </input>
                            <input className='w-14 border-2  md:text-base text-center'>
                            </input>
                            <input className='w-14 border-2  md:text-base text-center'>
                            </input>
                       </div>
                        
                            <div className='justify-center flex'>
                                <Button className="text-sm mt-5 md:text-base">Enviar</Button>
                            </div>
                            <p  className='mx-6 text-xs mt-8 md:text-base flex justify-center'> Gostaria de reenviar o código?</p>
                    </div>
                      
                </div>
            </section>

        </main>
    )
}

export default esqSenha2