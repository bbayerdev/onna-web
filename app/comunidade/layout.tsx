'use client'
import React, { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import Aside from './components/Aside';
import Header from './components/Header';

export default function CommunityLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    //exibir pagina da aba
    const [exibir, setExibir] = useState(0)
    const atualizar = (index: number) => {
        setExibir(index)
    }

    return (
        <div className="flex min-h-screen w-full">
            <Aside exibir={exibir} atualizar={atualizar} />
            <div className="flex flex-col flex-1">
                <div className="fixed w-full z-20">
                    <Header exibir={exibir} atualizar={atualizar} />
                    <Separator className="z-10" />
                </div>
                <main className="w-screen p-32 pt-20 max-sm:p-10 max-sm:pt-24 overflow-y-auto h-screen">
                    {children}
                </main>
            </div>
        </div>
    );
}
