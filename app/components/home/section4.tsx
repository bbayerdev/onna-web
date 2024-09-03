
import React from 'react'
import CardAval from './cardAval'

const Section4 = () => {
    return (

        <section className='flex flex-col justify-center text-center'>
            <h1 className='md:text-5xl text-3xl font-bold'>O que comentam sobre o  <span className='underline'>ONNA</span> ?</h1>

            <div className='md:flex-row flex-col flex mt-32 justify-center items-center object-center content-center gap-16'>
                <CardAval
                    nome='Luiz Ricardo Jr'
                    avaliacao='Ele é fácil de usar, oferece lembretes personalizados e me ajuda a entender melhor meu ciclo!'
                    nota='4,8'
                />

                <CardAval
                    nome='Maria Eduarda'
                    avaliacao='A comunidade de apoio é incrível e muito acolhedora! '
                    nota='4.0'
                />

                <CardAval
                    nome='Frida Kahlo'
                    avaliacao='É como ter uma equipe de especialistas sempre à disposição, o que me faz sentir mais confiante em relação à minha saúde!'
                    nota='5.0'
                />
            </div>
        </section>
    )
}

export default Section4