import React from 'react'
import Image from 'next/image'
import Mascote from './components/imgs/mascote'
import Header from '../components/home/header'
import SectionMetas from './components/sectionMetas'
import Footer from '../components/home/footer'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import WordPullUp from '@/components/magicui/word-pull-up'


const Sobre = () => {
  //imagens do carrossel
  const images = [
    '/integrantes/img1.png',
    '/integrantes/img2.png',
    '/integrantes/img3.png',
    '/integrantes/img4.png',
    '/integrantes/img5.png',
    '/integrantes/img6.png',
    '/integrantes/img7.png',
  ];

  return (
    <div className='antialiased'>
      <Header/>
      

      <main className='space-y-52'>
        <section className='flex flex-col w-3/4 justify-center space-y-12 m-auto mt-10 py-10'>
          <WordPullUp
            className='font-bold text-red-900 text-5xl text-left'
            words="Quem nós somos?"
          />
          <p className='font-opensans text-xl'>Somos uma equipe de apaixonados por descobertas e avanços!  Estamos comprometidos em garantir que cada aspecto da experiência ONNA seja cuidadosamente desenvolvido e atualizado para atender às necessidades em constante evolução de nossa comunidade global.</p>
        </section>

        <section className='flex flex-col w-3/4 justify-center space-y-12 m-auto mt-20'>
          <WordPullUp
            className='font-bold text-red-900 text-5xl text-left'
            words="Nossa equipe"
          />
          <p className='font-opensans text-xl'>Conheça nossos integrantes e suas contribuições para o projeto.</p>

          <div className='flex justify-center p-10'>
            <Carousel opts={{ align: 'start' }} className="w-full">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            width={500}
                            height={500}
                            className="object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

          </div>

        </section>

        <SectionMetas />

        <section className='flex flex-col justify-center m-auto w-3/4'>
          <h1 className='text-5xl font-bold text-red-900'>Conheça nosso mascote</h1>
          <div className='flex flex-row items-center m-auto mt-12'>
            <div className='w-full'>
              <Mascote />
            </div>
            <div className='space-y-10'>
              <h1 className='font-bold text-2xl'>Nosso adorável mascote felino!</h1>
              <p className='font-opensans text-xl'>Este simpático gato é o símbolo de conforto e companheirismo aqui no ONNA</p>
              <p className='font-opensans text-xl'>Sua presença amigável é uma lembrança de que nossas usuárias nunca estão sozinhas!</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default Sobre