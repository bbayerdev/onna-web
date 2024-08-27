'use client'
import React, { useEffect, useState } from "react"
import { FaRegUserCircle } from "react-icons/fa"
import api from "@/api/api"

interface IUser {
    nome: string;
    dataNasc: string;
    status_Ban?: boolean
}

function Page() {

    const [user, setUser] = useState<IUser>({ nome: "", dataNasc: "" })

    const [email, setEmail] = useState("deus@gmail.com");

    const data = new Date(user.dataNasc);
    const dias = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`;

    async function getUser() {
        try {
            const userFromApi = await api.get("/api/get/users/" + email)

            setUser(userFromApi.data[0])

        } catch (error) {
            console.log("ERRO: " + error)
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    function statusBan(){

        if(user.status_Ban == false){
            return('Ativo')
        }
        else{
            return('Banido')
        }
    
    }

    return (
        <main className="flex h-screen justify-center p-16 items-center">
            <section>
                <div className="flex flex-col space-y-8 items-center">
                    <FaRegUserCircle size={150} />
                    <button className="text-3xl border-2 px-4 p-2 border-black rounded-full font-bold duration-150 hover:bg-red-100">Alterar foto de perfil</button>
                    <h1 className="text-3xl font-opensans font-bold">Minhas informações</h1>
                </div>

                <div className="w-full mt-10 flex flex-col space-y-4">
                    <h1 className="text-3xl font-bold ">Nome:  <span className="font-normal ml-2">{user.nome}</span></h1>
                    <h1 className="text-3xl font-bold">Data de nascimento:  <span className="font-normal ml-2">{dias}</span></h1>
                    <h1 className="text-3xl font-bold">Email:  <span className="font-normal ml-2">{email}</span></h1>
                    <h1 className="text-3xl font-bold">Status:  <span className="font-normal ml-2">{statusBan()}</span></h1>
                    <a className="text-right text-2xl p-2 rounded-full hover:underline">Alterar dados</a>
                </div>

            </section>

        </main>
    )
}

export default Page