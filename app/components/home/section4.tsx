
import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

const Section4 = () => {
    return (

        <section className='flex flex-col justify-center text-left w-screen'>
            <h1 className='md:text-2xl text-xl font-extrabold text-center'>O que comentam sobre o  <span className='underline'>ONNA</span> ?</h1>

            <div className='flex p-10 px-20 gap-10 mt-20 md:flex-row flex-col '>

                <Alert className='text-left md:text-2xl text-1xl'>
                    <TiStarFullOutline className='h-6 w-6' />
                    <AlertTitle className='mt-1'>Maria Eduarda</AlertTitle>
                    <AlertDescription className='md:text-xl text-1xl font-sans'>
                        Ele é fácil de usar, oferece lembretes personalizados e me ajuda a entender melhor meu ciclo!
                    </AlertDescription>
                </Alert>

                <Alert className='text-left md:text-2xl text-1xl'>
                    <TiStarFullOutline className='h-6 w-6' />
                    <AlertTitle className='mt-1'>Bombom</AlertTitle>
                    <AlertDescription className='text-1xl md:text-xl font-sans'>
                        A comunidade de apoio é incrível e muito acolhedora!
                    </AlertDescription>
                </Alert>

                <Alert className='text-left md:text-2xl text-1xl'>
                    <TiStarFullOutline className='h-6 w-6' />
                    <AlertTitle className='mt-1'>Rodolfa</AlertTitle>
                    <AlertDescription className='text-1xl md:text-xl font-sans'>
                        É como ter uma equipe de especialistas sempre à disposição, o que me faz sentir mais confiante em relação à minha saúde!
                    </AlertDescription>
                </Alert>


            </div>

        </section>
    )
}

export default Section4