
import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import Header from '../components/home/header';
import Footer from '../components/home/footer';
import WordPullUp from '@/components/magicui/word-pull-up';
import GradualSpacing from '@/components/magicui/gradual-spacing';


const Ajuda = () => {
    return (
        <main>
            <Header />
            <section className='py-20 flex flex-col justify-center w-3/4 m-auto space-y-10'>
                <WordPullUp
                    className='font-extrabold text-red-900 text-5xl text-left'
                    words="Precisa de ajuda?"
                />
                <div className='flex'>
                    <GradualSpacing
                        className="text-3xl font-bold tracking-[-0.1em] text-left"
                        text="Deixa conosco!"
                    />
                </div>
                <p className='font-opensans text-xl'>Para maior facilidade em momentos de dúvidas ou problemas com sua conta ou comunidade, utilizamos um chat-bot, onde é possível ter ajuda 24 horas por dia.</p>
                <p className='font-opensans text-xl'>Para utilizar é simples, clique no ícone no canto direito da tela e descubra agora!</p>
                <p className='font-bold text-xl'>Caso o problema ou a dúvida persistir recomendamos nos contatar dos seguintes modos:</p>

                <div className='flex flex-row gap-2 pl-5'>
                    <a href="https://www.instagram.com/onnaapp/"><FaInstagram size={30} /></a><p className='font-opensans text-lg font-bold'> @OnnaApp</p>
                </div>
                <div className='flex flex-row gap-2  pl-5'>
                    <a href="https://accounts.google.com/AddSession?hl=pt-BR&continue=https://mail.google.com/mail&service=mail"><MdOutlineMailOutline size={30} /> </a> <p className='font-opensans text-lg font-bold'>OnnaWebsite@gmail.com</p>
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Ajuda