'use client'
import React, { useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Baby, Droplets, Heart, Ribbon, Search, Sprout } from 'lucide-react'
import CardArtigo from './components/CardArtigo'


const page = () => {

  const [id, setId] = useState(1)

  return (
    <main>
      <section className='flex flex-row gap-4'>
        <div className='flex gap-4 mt-1'>
          <h1 className='text-xl font-bold'>Artigos</h1> <h1 className='text-xl'>•</h1>
        </div>
        <div>
          <ToggleGroup type="single" defaultValue='1' onValueChange={(value) => (setId(parseInt(value)))}>
            <ToggleGroupItem variant={'outline'} value="1"> <Droplets /> Menstruação</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="2"> <Baby /> Engravidar</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="3"> <Sprout /> Gestação</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="4"> <Heart /> Maternidade</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="5"> <Ribbon /> Autocuidado</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      <section className='grid grid-cols-4 gap-10 mt-10'>

        <CardArtigo
          id={1}
          idArtigo={1}
          titulo="Aspectos atuais do diagnóstico e tratamento da endometriose"
          body="Essa é uma pergunta que ninguém pode responder por você, a não ser você mesma. A decisão de trazer outro ser humano para este mundo não é fácil..."
          data="15/11/2024"
        />

        <CardArtigo
          id={1}
          idArtigo={2}
          titulo="Aspectos atuais do diagnóstico e tratamento da endometriose"
          body="Essa é uma pergunta que ninguém pode responder por você, a não ser você mesma. A decisão de trazer outro ser humano para este mundo não é fácil..."
          data="15/11/2024"
        />

        <CardArtigo
          id={1}
          idArtigo={3}
          titulo="Aspectos atuais do diagnóstico e tratamento da endometriose"
          body="Essa é uma pergunta que ninguém pode responder por você, a não ser você mesma. A decisão de trazer outro ser humano para este mundo não é fácil..."
          data="15/11/2024"
        />
        <CardArtigo
          id={1}
          idArtigo={4}
          titulo="Aspectos atuais do diagnóstico e tratamento da endometriose"
          body="Essa é uma pergunta que ninguém pode responder por você, a não ser você mesma. A decisão de trazer outro ser humano para este mundo não é fácil..."
          data="15/11/2024"
        />
        <CardArtigo
          id={1}
          idArtigo={5}
          titulo="Aspectos atuais do diagnóstico e tratamento da endometriose"
          body="Essa é uma pergunta que ninguém pode responder por você, a não ser você mesma. A decisão de trazer outro ser humano para este mundo não é fácil..."
          data="15/11/2024"
        />


      </section>
    </main>
  )
}

export default page