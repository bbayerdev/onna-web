'use client'
import { Separator } from "@/components/ui/separator"
import Header from "./components/Header"
import Aside from "./components/Aside"
import { useState } from "react"
import Home from "./pages/home"
import Popular from "./pages/popular"
import Gravidez from "./pages/gravidez"
import Desabafos from "./pages/desabafos"
import Autocuidado from "./pages/autocuidado"
import Config from "./pages/config"

export function page() {

    //exibir pagina da aba
    const [exibir, setExibir] = useState(0)
    const atualizar = (index: number) => {
        setExibir(index)
    }
    //renderizar pagina
    const renderizar = () => {
        switch (exibir) {
            case 1:
                return <Home />
            case 2:
                return <Popular />
            case 3:
                return <Gravidez />
            case 4:
                return <Desabafos />
            case 5:
                return <Autocuidado />
            case 6:
                return <Config />
            default:
                return <Home />
        }
    }

    return (
        <div className="flex min-h-screen w-full">
            <Aside exibir={exibir} atualizar={atualizar} />
            <div className="flex flex-col flex-1">
                <div className="fixed w-full z-20">
                    <Header exibir={exibir} atualizar={atualizar} />
                    <Separator className="z-10"/>
                </div>
                <main className="p-20 pt-20 max-sm:p-10 max-sm:pt-24 overflow-y-auto h-screen">
                    {renderizar()}
                </main>
            </div>
        </div>
    )
}

export default page
