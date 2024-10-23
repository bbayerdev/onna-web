import React from 'react'
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
  import { CalendarDays, NotebookPen, Pencil } from 'lucide-react';
  import { Button } from '@/components/ui/button';

const CardUser = () => {
    return (
        <div>


            <Card className='bg-gray-950/[.01] flex'>
                <CardHeader>
                    <Avatar className='size-32 shadow'>
                        <AvatarImage src="https://github.com/bbayerdev.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent className='p-3 mt-7 w-full'>
                    <h1 className='font-bold text-xl'>Eminem</h1>
                    <h1>slimshady@gmail.com</h1>
                    <div className='mt-1 ml-1'>
                        <div className='flex flex-row'>
                            <NotebookPen color='#71717a' className='mt-1' size={15} /> <p className='text-zinc-700 text-sm ml-1'>14 posts</p>
                        </div>
                        <div className='flex flex-row'>
                            <CalendarDays color='#71717a' className='mt-1' size={15} /> <p className='text-zinc-700 text-sm ml-1'>entrou em outubro 2024</p>
                        </div>
                    </div>
                    <div className='flex justify-end '>
                        <Button className='mr-1' variant="outline" size="icon">
                            <Pencil className="h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardUser