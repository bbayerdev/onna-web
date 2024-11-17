import React from 'react'
import { Baby, Droplets, Heart, Ribbon, Search, Sprout } from 'lucide-react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'
import { Button } from '@/components/ui/button'


type Props = {
    id: number,
    idArtigo: number,
    titulo: string,
    body: string,
    data: string
}

const CardArtigo = ({ body, data, idArtigo, id, titulo }: Props) => {
    return (
        <Card>
            <div className='hover:bg-zinc-100 transition-transform h-full flex flex-col justify-between'>
                <CardHeader>
                    <div className="flex flex-row justify-between">
                        {
                            idArtigo === 1 ? (
                                <div className="bg-red-200 rounded-lg p-1">
                                    <Droplets className="size-8" color="#ef4444" />
                                </div>
                            ) : idArtigo === 2 ? (
                                <div className="bg-blue-50 rounded-lg p-1">
                                    <Baby className="size-8" color="#60a5fa" />
                                </div>
                            ) : idArtigo === 3 ? (
                                <div className="bg-green-100 rounded-lg p-1">
                                    <Sprout className="size-8" color="#4ade80" />
                                </div>
                            ) : idArtigo === 4 ? (
                                <div className="bg-indigo-100 rounded-lg p-1">
                                    <Heart className="size-8" color="#8b5cf6" />
                                </div>
                            ) : (
                                <div className="bg-yellow-50 rounded-lg p-1">
                                    <Ribbon className="size-8" color="#fde047" />
                                </div>
                            )
                        }
                        <h1 className="text-zinc-500 font-bold mt-2">• {data}</h1>
                    </div>
                    <div>
                        <CardTitle className="text-xl mt-2">
                            {titulo}
                        </CardTitle>
                    </div>
                </CardHeader>

                <CardContent>
                    <p className='text-xl'>
                        {body.length > 120 ? `${body.slice(0, 120)}...` : body}
                    </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Link href={'#'}>
                        <Button className="mr-1 hover:bg-blue-100" variant="outline" size="icon">
                            <Search color="#2563eb" className="h-4 w-4" />
                        </Button>
                    </Link>
                </CardFooter>


            </div>
        </Card>


    )
}

export default CardArtigo