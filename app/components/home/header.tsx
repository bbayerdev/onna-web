
"use client"

import React, { useState } from 'react'
import Logo from './images/logo'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { Button } from '@/components/ui/button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="mx-auto flex items-center justify-between p-8 max-md:p-6 bg-white">
            <Link href='/'>
                <Logo />
            </Link>

            <div className='md:flex hidden flex-row gap-12 max-md:gap-6'>
                <Link href='/sobre' className='text-xl drop-shadow-xl hover:font-medium hover:underline'>Sobre nós</Link>
                <Link href='/ajuda' className='text-xl drop-shadow-xl hover:font-medium hover:underline'>Ajuda</Link>
            </div>
            <div className='md:flex hidden flex-row gap-10 max-md:gap-5'>
                <Link href='/login' className='md:text-xl  text-3xl underline drop-shadow-xl hover:font-medium'>Login</Link>
                <Link href='/cadastro'> <Button className='text-xl  bg-black' >Cadastro</Button> </Link>
            </div>

            <i className='flex md:hidden text-5x1 cursor-pointer w-8 h-8' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IoMenu size={30} />
            </i>
            <div className={`mt-10 absolute z-50 md:invisible top-24 left-0 w-full bg-white flex flex-col items-center gap-6 transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                style={{ transition: "transform 0.3 ease, opacity 0.3s ease" }}>
                <a href='/sobre' className='list-none w-full text-center p-4 hover:bg-slate-100 transition-none cursor-pointer'>Sobre nós</a>
                <a href='/ajuda' className='list-none w-full text-center p-4 hover:bg-slate-100 transition-none cursor-pointer'>Ajuda</a>
                <a href='/login' className='list-none px-11 text-center font-semibold text-red-900 border-2 border-red-900 py-2 mt-2 mb-2 transition-none cursor-pointer rounded-3xl '>Login</a>
                <a href='/cadastro' className='list-none text-center px-11 py-2 mt-2 mb-2 rounded-3xl border-2 transition-none cursor-pointer'>Cadastro</a>

            </div>


        </header>
    )
}

export default Header