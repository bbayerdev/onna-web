
import React from 'react'
import Logo from './images/logo'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="mx-auto flex items-center justify-between p-8 max-md:p-6">
            <Link href='/'>
                <Logo/>
            </Link>
            <div className='flex flex-row gap-12 max-md:gap-6'>
                <Link href='/sobre' className='max-md:text-2xl text-3xl drop-shadow-xl hover:font-medium hover:underline'>Sobre nós</Link>
                <button className='max-md:text-2xl text-3xl drop-shadow-xl hover:font-medium hover:underline'>Ajuda</button>
            </div>
            <div className='flex flex-row gap-10 max-md:gap-5'>
                <Link href='/login' className='max-md:text-2xl mt-1 text-3xl underline drop-shadow-xl hover:font-medium'>Login</Link>
                <Link href='/cadastro' className='max-md:text-2xl text-3xl bg-black text-white px-4 py-1 rounded-3xl shadow-xl transition duration-500 hover:scale-105'>Cadastro</Link>
            </div>
        </header>
    )
}

export default Header