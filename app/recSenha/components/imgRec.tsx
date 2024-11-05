import imgRecSenha from '../../../public/imgs/imgRecSenha.png'
import React from 'react'
import Image from 'next/image'


const ImgRecSenha = () => {
    return (
        <Image src={imgRecSenha} alt='quadrinho de gatos' width={0} height={625} className='select-none mt-5'/>
    )
}

export default ImgRecSenha