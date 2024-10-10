'use client'
import React, { useState } from 'react'
import RoundedButom from './metasComp/roundedButom'
import Meta1 from './metasComp/meta1'
import Meta2 from './metasComp/meta2'
import Meta3 from './metasComp/meta3'

const Section3 = () => {
    //variavel meta --> muda seu valor atravez do setMeta
    const [meta, setMeta] = useState(0)

    //funcao que recebe um index e esse index vira o numero da meta 
    //caso o index for 3, retorna o component Meta3 e assim por diante
    const atualizarMeta = (index: number) => {
        setMeta(index)
    }

    //switch explica por si só
    const renderizarMeta = () => {
        switch (meta) {
            case 1:
                return <Meta2 />
            case 2:
                return <Meta3 />
            case 3:
            default:
                return <Meta1 />
        }
    }

    return (
        <section className='flex flex-row justify-center ml-48 md:ml-0 max-md:p-10 md:max-xl:px-20 gap-32 max-lg:gap-20'>
            <div className='text-left mt-24 space-y-7 w-max max-w-lg'>
                <h1 className='font-bold md:text-2xl text-xl '>O que oferecemos?</h1>

                {renderizarMeta()}

                <div className='gap-3 flex flex-row'>
                    <RoundedButom num='1' ativo={meta === 0} atualizar={() => atualizarMeta(0)} />
                    <RoundedButom num='2' ativo={meta === 1} atualizar={() => atualizarMeta(1)} />
                    <RoundedButom num='3' ativo={meta === 2} atualizar={() => atualizarMeta(2)} />
                </div>

            </div>
            <div className='max-w-sm w-full border-[1px] mt-24 rounded-lg hidden md:flex'>
            </div>
        </section>

    )
}

export default Section3