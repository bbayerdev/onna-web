
import React from 'react'
import Quadrinho2 from './images/quadrinho2'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import WordPullUp from "@/components/magicui/word-pull-up";

const Section2 = () => {
    return (
        <section className='flex flex-col md:flex-row justify-center max-md:p-10 max-xl:px-20 gap-32 max-lg:gap-20'>
            <div className='max-w-sm w-full  border-black mt-10 md:mt-24'>
                <Quadrinho2 />
            </div>
            <div className='text-left mt-0 md:mt-24 space-y-7 w-max max-w-lg'>
                <h1 className='font-bold text-xl md:text-2xl'>Em que acreditamos?</h1>
                <WordPullUp
                    className='font-bold text-red-900 text-5xl text-left'
                    words="Bem vinda ao ONNA"
                />
                <p className='text-2xl py-6 pb-10'>
                    Oferecer uma plataforma acessível e inclusiva com recursos confiáveis para apoiar a saúde e bem-estar das mulheres!
                </p>
                <Link href='/sobre'>
                    <Button variant={'secondary'} className='text-2xl hover:bg-zinc-200 duration-200'>
                        Conheça nossa equipe
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default Section2