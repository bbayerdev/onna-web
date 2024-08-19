import GatoPrancheta from '../../../public/imgs/gatoPrancheta.png'
import React from 'react'
import Image from 'next/image'


const ImgGatoPrancheta = () => {
    return (
        <Image src={GatoPrancheta} alt='um gato com uma lupa' width={0} height={500} className='select-none'/>
    )
}

export default ImgGatoPrancheta