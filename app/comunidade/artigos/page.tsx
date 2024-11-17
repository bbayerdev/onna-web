'use client'
import React, { useEffect, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Baby, Droplets, Heart, Ribbon, Search, Sprout } from 'lucide-react'
import CardArtigo from './components/CardArtigo'
import axios from 'axios'


const page = () => {
  const [id, setId] = useState('menstruacao')
  const [artigos, setArtigos] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {

    const fetchArtigos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/artigo/${id}`)
        console.log(response.data)// teste no console  
        setArtigos(response.data)
      }
      catch (erro) {

      }
      finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchArtigos()
    }

  }, [id])

  return (
    <main>
      <section className='flex flex-row gap-4'>
        <div className='flex gap-4 mt-1'>
          <h1 className='text-xl font-bold'>Artigos</h1> <h1 className='text-xl'>•</h1>
        </div>
        <div>
          <ToggleGroup type="single" defaultValue='menstruacao' onValueChange={(value) => value && setId(value)}>
            <ToggleGroupItem variant={'outline'} value="menstruacao"> <Droplets /> Menstruação</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="engravidar"> <Baby /> Engravidar</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="gestacao"> <Sprout /> Gestação</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="maternidade"> <Heart /> Maternidade</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="cuidadosCorpo"> <Ribbon /> Autocuidado</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <h1>selecionado {id}</h1>
      </section>

      {loading ? (
        <section className='grid grid-cols-4 gap-10 mt-10'>
          <h1>CARREGANDO</h1>
        </section>
      ) : (

        <section className="grid grid-cols-4 gap-8 mt-10">
          {artigos.map((artigo) => (
            <CardArtigo
              key={artigo.idArtigo} // Sempre inclua uma key única
              id={artigo.idArtigo}
              idArtigo={id}
              titulo={artigo.titulo}
              body={artigo.resumo}
              data={artigo.data_Publicacao}
            />
          ))}
        </section>
      )}

    </main>
  )
}

export default page