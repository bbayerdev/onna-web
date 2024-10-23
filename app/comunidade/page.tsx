'use client'
import CardUser from './components/CardUser';
import CarrosselNewPosts from './components/carrosselNewPosts';

function Home() {

  return (
    <main>
      <div className='p-6'>
        <h1 className='text-xl'>Novos Posts</h1>
      </div>
      <div className='relative mt-6'>
        <CarrosselNewPosts />
      </div>

      <section className='flex flex- mt-16 px-4 shadow-none'>
        <div className='w-2/5'>
          <CardUser />
        </div>
        <div>

        </div>
      </section>

    </main>
  );
}

export default Home;
