'use client'
import React from 'react'
import PostCardUser from './components/PostCardUser'

const page = () => {
  return (
    <main>
      <h1 className='text-xl font-bold'>Seus Posts</h1>
      <section className='mt-10 flex flex-col gap-10'>
        <PostCardUser
          data=''
          hora=''
          idForum=''
          reacoes={0}
          subtitulo=''
          titulo=''
        />
      </section>
    </main>
  )
}

export default page