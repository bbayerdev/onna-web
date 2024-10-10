'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginUserSchema = z.object({
    email: z.string()
        .nonempty('Digite seu email')
        .email('Formato de email inválido'),
    senha: z.string()
        .nonempty('Digite sua senha')
})
//inteligencia do ts:
type loginUserData = z.infer<typeof loginUserSchema>;

export function page() {

    //faz parte da tipagem:
    const [output, setOutput] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm<loginUserData>({
        resolver: zodResolver(loginUserSchema)
    });

    // Função para criar o usuário e enviar para a API:
    async function loginUser(data: loginUserData) {
        setOutput(JSON.stringify(data, null, 2));
        // await postTipo_Usuario(data);
    }

    //eye password:
    const [isShow, setIsShow] = useState(false)
    const eyePassword = () => setIsShow(!isShow)

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="hidden bg-muted lg:block">
                <Image
                    src="/placeholder.svg"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale  bg-red-50"
                />
            </div>
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className=" text-5xl text-red-900 font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground text-1xl">
                            Digite seu e-mail abaixo para fazer login em sua conta
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(loginUser)} className="grid gap-4">
                        <div className="grid gap-2 ">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seuemail@example.com"
                                required
                                {...register('email')}
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirmSenha">Confirmar Senha</Label>
                            <div className="flex border-[1px] rounded-md">
                                <Input
                                    className="border-none"
                                    id="confirmSenha"
                                    type={isShow ? "text" : "password"}
                                    {...register('senha')}
                                />
                                <button onClick={eyePassword} type="button" className="px-4">
                                    {isShow ? <Eye size={18} /> : <EyeOff size={18} />}
                                </button>
                            </div>
                            {errors.senha && <span className="text-red-500 text-sm">{errors.senha.message}</span>}
                            <Link
                                href="/recSenha"
                                className="ml-auto inline-block text-sm underline"
                            >
                                Esqueceu sua senha?
                            </Link>
                        </div>
                        <Button type="submit" className="w-full">
                            Entrar
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        Não possui uma conta ainda?{" "}
                        <Link href="/cadastro" className="underline">
                            Cadastre-se
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
