import React from 'react'
import Image from 'next/image'
import mascote from '../../../../public/imgs/mascote.png'

const Mascote = () => {
  return (
    <Image src={mascote} alt='logo' width={0} height={500} className='select-none w-max h-auto'/>
  )
}

export default Mascote