import imgCadastro from '../../../public/imgs/imgCadastro.png'
import React from 'react'
import Image from 'next/image'


const ImgCadastro = () => {
    return (
        <Image src={imgCadastro} alt='gato cadastrando um usuario' width={0} height={1000} className='select-none -mt-40 ml-40'/>
    )
}

export default ImgCadastro