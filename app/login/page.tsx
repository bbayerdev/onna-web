'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation';
import api from '../../api/api';
import { Toaster } from "@/components/ui/toaster"

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
    //limpa o local storage
    useEffect(() => {
        localStorage.clear(); // Limpa todos os itens do localStorage
    }, []);

    //eye password:
    const [isShow, setIsShow] = useState(false)
    const eyePassword = () => setIsShow(!isShow)
    //faz parte da tipagem:
    const { register, handleSubmit, formState: { errors } } = useForm<loginUserData>({
        resolver: zodResolver(loginUserSchema)
    });
   
    // Função para realizar o login
    async function loginUser(data: loginUserData) {
        try {
            const res = await api.post("/api/auth/tipoUsuario", {
                email: data.email,
                senha: data.senha,
            });

            if (res.status === 200) {
                const usuario = res.data;

                // salva todos os dados do usuário no localStorage
                localStorage.setItem("usuarioData", JSON.stringify(usuario));
                const idProfissional = usuario?.tipo_Usuario; // pega so o idTipo_Usuario diretamente dos dados retornados

                toast({
                    title: "Login realizado!",
                    description: "Você será redirecionado em 2 segundos.",
                    className: 'bg-green-400',
                    duration: 2000,
                })

                // Redireciona conforme o id do tipo de usuário
                setTimeout(() => {
                    if (idProfissional === 1) {
                        // Redireciona para a página do cadastro/profissional
                        router.push("cadastro/profissional");
                    } else {
                        // Redireciona para a página de comunidade
                        router.push("/comunidade");
                    }
                }, 1900);
            }
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            toast({
                title: "Houve um erro!",
                description: "Revise suas credenciais e tente novamente.",
                className: 'bg-red-400',
                duration: 2000,
            });
        }
    }

    const router = useRouter(); // hook para redirecionamento

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="hidden bg-muted lg:block bg-red-100">

            </div>
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className=" text-5xl text-red-900 font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Digite seu e-mail abaixo para fazer login em sua conta
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(loginUser)} className="grid gap-4">
                        <div className="grid gap-2">
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
                                href="/forgot-password"
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
                <Toaster />
            </div>
        </div>
    )
}
export default page
