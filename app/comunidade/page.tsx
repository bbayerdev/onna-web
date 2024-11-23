'use client'
import { Button } from '@/components/ui/button';
import CardUser from './components/CardUser';
import { Newspaper, PencilLine } from 'lucide-react';
import Link from 'next/link';
import CarrosselSeusPosts from './components/CarrosselSeusPosts';
import { CarrosselNewPosts } from './components/carrosselNewPosts';

function Home() {

  return (
    <main>
      <div className='p-1'>
        <Link href={'/comunidade/popular'}>
          <Button variant={'ghost'} className='text-xl font-bold'>Novos Posts</Button>
        </Link>
      </div>
      <div className='relative mt-4'>
        <CarrosselNewPosts />
      </div>
      <section className='flex mt-12 shadow-none'>
        <div className='w-1/2 mt-10 ml-10'>
          <CardUser />
          <Link href={'comunidade/novoPost'}>
            <Button className='mt-10 w-full gap-2 h-12 text-md hover:bg-green-400 shadow' variant={'outline'}>
              Escrever novo post <PencilLine className='size-4' />
            </Button>
          </Link>

          <Link href={'comunidade/artigos'}>
            <Button className='mt-5 w-full gap-2 h-12 text-md hover:bg-zinc-200 shadow' variant={'outline'}>
              Ler artigos<Newspaper className='size-4' />
            </Button>
          </Link>
        </div>
        <div className='w-3/5 flex justify-center items-center px-5'>
          <CarrosselSeusPosts />
        </div>
      </section>
    </main>
  );
}

export default Home;
