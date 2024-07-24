import React from 'react'
import Image from 'next/image'
import logo from '../../../../public/imgs/insta.png'

const InstaIco = () => {
  return (
    <Image src={logo} alt='logo' width={100} height={0} className='select-none w-max h-auto max-md:w-24'/>
  )
}

export default InstaIco