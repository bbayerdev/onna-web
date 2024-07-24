
import tt from '../../../../public/imgs/tt.png'
import React from 'react'
import Image from 'next/image'


const TtIco = () => {
    return (
        <Image src={tt} alt='logo' width={0} height={0} className='select-none w-max h-auto max-md:w-24'/>
    )
}

export default TtIco