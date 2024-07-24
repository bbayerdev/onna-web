import qrCode from '../../../../public/imgs/github.png'
import React from 'react'
import Image from 'next/image'


const GitIco = () => {
    return (
        <Image src={qrCode} alt='logo' width={0} height={0} className='select-none w-max h-auto max-md:w-24'/>
    )
}

export default GitIco