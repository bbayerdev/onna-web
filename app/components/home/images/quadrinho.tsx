import React from 'react'
import Image from 'next/image'
import home from '../../../../public/imgs/home.png'

const Quadrinho = () => {
  return (
    <Image src={home} alt='logo' width={350} height={0} className='select-none h-auto max-lg:w-72 max-lg:mt-16 max-md:w-60 max-md:mt-28'/>
  )
}

export default Quadrinho