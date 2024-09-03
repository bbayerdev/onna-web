import React from 'react'
import Image from 'next/image'
import menuhome from '../../../../public/imgs/menuhome.png'

const Menuhome = () => {
    return (
      <Image src={menuhome} alt='logo' width={100} height={100} className=''/>
    )
  }
  
  export default Menuhome