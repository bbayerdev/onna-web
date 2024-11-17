'use client'
import React, { useEffect, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Baby, Droplets, Heart, Ribbon, Search, Sprout } from 'lucide-react'
import CardArtigo from './components/CardArtigo'
import axios from 'axios'
import { Skeleton } from '@/components/ui/skeleton'


const page = () => {
  const [id, setId] = useState(1)
  const [artigos, setArtigos] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {

    const fetchArtigos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/artigoG/${id}`)
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
          <ToggleGroup type="single" defaultValue='1' onValueChange={(value) => setId(parseInt(value))}>
            <ToggleGroupItem variant={'outline'} value="1"> <Droplets /> Menstruação</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="2"> <Baby /> Engravidar</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="3"> <Sprout /> Gestação</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="4"> <Heart /> Maternidade</ToggleGroupItem>
            <ToggleGroupItem variant={'outline'} value="5"> <Ribbon /> Autocuidado</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      {loading ? (
        <section className='grid grid-cols-4 gap-10 mt-10'>
          <Skeleton className="h-[490px] w-80 rounded-xl">
          </Skeleton>

          <Skeleton className="h-[490px] w-80 rounded-xl">
          </Skeleton>

          <Skeleton className="h-[490px] w-80 rounded-xl">
          </Skeleton>
          
          <Skeleton className="h-[490px] w-80 rounded-xl">
          </Skeleton>
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