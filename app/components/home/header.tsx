"use client"
import React, { useState } from 'react'
import Logo from './images/logo'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { Button } from '@/components/ui/button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="mx-auto flex items-center justify-between p-8 max-md:p-6">
            <Link href='/'>
                <Logo />
            </Link>

            <div className='md:flex hidden flex-row gap-12 max-md:gap-6'>
                <Link href='/comunidade'> <Button variant={'ghost'} className='text-2xl'> Comunidade</Button></Link>
                <Link href='/sobre'> <Button variant={'ghost'} className='text-2xl'> Sobre nós</Button></Link>
                <Link href='/ajuda'> <Button variant={'ghost'} className='text-2xl'> Ajuda</Button></Link>
            </div>
            <div className='md:flex hidden flex-row gap-10 max-md:gap-5'>
                <Link href='/login'> <Button variant={'link'} className='text-2xl'> Login</Button></Link>                <Link href='/cadastro'> <Button className='text-2xl  bg-black' >Cadastro</Button> </Link>
            </div>

            <i className='flex md:hidden  text-5x1 cursor-pointer w-8 h-8' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <IoMenu size={30} />
            </i>
            <div className={`mt-10 absolute md:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
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