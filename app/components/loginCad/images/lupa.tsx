import React from 'react'
import Image from 'next/image'
import lupa from '../../../../public/imgs/gatoLupa.png'

const GatoLupa = () => {
  return (
    <Image src={lupa} alt='logo' width={0} height={500} className='select-none w-max h-auto'/>
  )
}

export default GatoLupa