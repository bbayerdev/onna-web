'use client'
import CarrosselNewPosts from './components/carrosselNewPosts';
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


function Home() {

  return (
    <main>
      <div className='p-6'>
        <h1 className='text-xl mt-4'>Novos Posts</h1>
      </div>
      <div className='relative mt-6'>
        <CarrosselNewPosts />
      </div>
      <section className='flex flex-row mt-20 px-6 shadow-none'>
        <div className='w-2/5'>
          <Card className='bg-gray-950/[.01] flex'>
            <CardHeader>
              <Avatar className='size-52 shadow'>
                <AvatarImage src="https://github.com/bbayerdev.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent className='p-5'>
              
            </CardContent>
          </Card>
        </div>
        <div>

        </div>
      </section>
    </main>
  );
}

export default Home;
