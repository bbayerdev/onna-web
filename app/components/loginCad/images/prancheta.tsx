import React from 'react'
import Image from 'next/image'
import Prancheta from '../../../../public/imgs/gatoPrancheta.png'

const GatoPrancheta = () => {
  return (
    <Image src={Prancheta} alt='logo' width={0} height={500} className='select-none w-max h-auto'/>
  )
}

export default GatoPrancheta