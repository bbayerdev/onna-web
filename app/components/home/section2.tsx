
import React from 'react'
import Quadrinho2 from './images/quadrinho2'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import WordPullUp from "@/components/magicui/word-pull-up";
import BlurIn from '@/components/magicui/blur-in';
import { motion } from 'framer-motion';

const Section2 = () => {
    return (
        <section className='flex flex-col md:flex-row justify-center max-md:p-10 max-xl:px-20 gap-32 max-lg:gap-20'>
            <div className='max-w-sm w-full  border-black mt-10 md:mt-24'>
                <motion.div
                    initial={{ opacity: 0, filter: 'blur(10px)' }} // Estado inicial com blur
                    animate={{ opacity: 1, filter: 'blur(0px)' }} // Estado final sem blur
                    transition={{ duration: 0.5 }} // Ajuste a duração conforme necessário
                >
                    <Quadrinho2 />
                </motion.div>
            </div>
            <div className='text-left mt-0 md:mt-24 space-y-7 w-max max-w-lg'>
                <h1 className='font-bold text-xl md:text-2xl mr-52'>Em que acreditamos?</h1>
                <WordPullUp
                    className='font-extrabold text-red-900 md:text-5xl  text-3xl text-left mr-80'
                    words="Bem-vinda ao ONNA"
                />
                <BlurIn
                    word=" Oferecer uma plataforma acessível e inclusiva com recursos confiáveis para apoiar a saúde e bem-estar das mulheres!"
                    className='text-base mr-64  py-6 pb-10'
                    duration={0.5}
                />
                <Link href='/sobre'>
                    <Button variant={'secondary'} className='md:text-xl text-base hover:bg-zinc-200 duration-200'>
                        Conheça nossa equipe
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default Section2