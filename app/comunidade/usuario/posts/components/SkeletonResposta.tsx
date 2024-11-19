import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonResposta = () => {
    return (
        <Skeleton className='h-52 mx-11 rounded-xl'>
            <div className="flex flex-col p-5 space-x-4">
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <Skeleton className="h-4 mt-4 ml-5 w-[250px]" />
                    </div>
                    <div className='flex flex-row'>
                        <Skeleton className="h-4 mt-5 ml-5 w-[180px]" />
                    </div>
                </div>

                <div className="space-y-4 mt-5 px-5 flex flex-col">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </Skeleton>
    )
}

export default SkeletonResposta