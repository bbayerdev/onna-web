import Gatolupa from '../../../public/imgs/gatoLupa.png'
import React from 'react'
import Image from 'next/image'


const ImgLogin = () => {
    return (
        <Image src={Gatolupa} alt='um gato com uma lupa' width={0} height={500} className='select-none'/>
    )
}

export default ImgLogin