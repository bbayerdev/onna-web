"use client";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import api from '../../api/api';
import { Checkbox } from "@/components/ui/checkbox";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation';

// Tipagem zod:
const cadastroUserSchema = z.object({
  nome: z.string()
    .nonempty('Nome obrigatório')
    .min(6, 'Mínimo 6 caracteres'),
  email: z.string()
    .nonempty('Email obrigatório')
    .email('Formato de email inválido'),
  dataNasc: z.string()
    .nonempty('Data de nascimento obrigatória')
    .refine(dateString => {
      const today = new Date();
      const birthDate = new Date(dateString);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        return age - 1 >= 13;
      }
      return age >= 13;
    }, {
      message: 'Idade miníma para se registrar é 13 anos.',
    }),
  senha: z.string()
    .nonempty('Senha obrigatória')
    .min(10, 'A senha deve ter no mínimo 10 caracteres')
    .regex(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .regex(/[0-9]/, 'A senha deve conter pelo menos um número')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'A senha deve conter pelo menos um caractere especial'),
  confirmSenha: z.string()
    .nonempty('Confirmação obrigatória')
}).refine((data) => data.senha === data.confirmSenha, {
  message: 'As senhas não coincidem',
  path: ['confirmSenha'],
});
//inteligencia do ts:
type cadastroUserData = z.infer<typeof cadastroUserSchema>;


export function Page() {
  //eye password:
  const [isShow1, setIsShow1] = useState(false)
  const eyePassword1 = () => setIsShow1(!isShow1)
  //eye confirm:
  const [isShow2, setIsShow2] = useState(false)
  const eyePassword2 = () => setIsShow2(!isShow2)

  //faz parte da tipagem:
  const [output, setOutput] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<cadastroUserData>({
    resolver: zodResolver(cadastroUserSchema)
  });

  //conta profissional?
  const [tipoUsuario, setTipoUsuario] = useState(0)
  const checkboxAtivo = (ativo: boolean) => {
    setTipoUsuario(ativo ? 1 : 0)
  }

  // Função para criar o usuário e enviar para a API:
  async function createUser(data: cadastroUserData) {
    setOutput(JSON.stringify(data, null, 2));
    await createTipoUsuario(data);
  }
  // API - post usuario:
  async function createTipoUsuario(data: cadastroUserData) {
    try {
      const res = await api.post("/api/tipoUsuario", {
        email: data.email,
        senha: data.senha,
        nome: data.nome,
        dataNasc: data.dataNasc,
        avatar: 1,
        tipo_Usuario: tipoUsuario
      });

      setTimeout(() => {
        router.push("/login");
      }, 1200)
      // toast de sucesso indo pra comunidade
      toast({
        title: "Sucesso!",
        description: "Sua conta foi criada com sucesso. Agora faça seu login.",
        className: 'bg-green-400',
        duration: 1100
      })
    }
    catch (error: any) {
      console.log("ERRO: " + error);

      // ve se o email ja esta cadastrado
      if (error.response && error.response.status === 500) {
        toast({
          title: "Este email já está cadastrado.",
          description: "Faça seu login ou altere sua senha se nao lembrar!",
          className: 'bg-red-400',
          duration: 2000
        });
      } else {
        toast({
          title: "Erro!",
          description: "Ocorreu um erro ao criar sua conta.",
          className: 'bg-red-400',
          duration: 2000
        });
      }
    }
  }
  //toast
  const { toast } = useToast()
  const router = useRouter(); // hook para redirecionamento

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className=" text-5xl text-red-900 font-bold">Cadastro</h1>
            <p className="text-balance text-muted-foreground">
              Junte-se a comunidade ONNA hoje mesmo!
            </p>
          </div>
          <form onSubmit={handleSubmit(createUser)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="nome">Nome</Label>
              <Input
                id="nome"
                type="text"
                placeholder="Luiz Ricardo"
                {...register('nome')}
                maxLength={50} 
                pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$" 
                onInput={(e) => {
                  const input = e.target as HTMLInputElement
                  input.value = input.value.replace(/[0-9]/g, "")
                }}
              />
              {errors.nome && <span className="text-red-500 text-sm">{errors.nome.message}</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="bombomreidelas@example.com"
                {...register('email')}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nasc">Nascimento</Label>
              <Input
                id="nascimento"
                type="date"
                {...register('dataNasc')}
              />
              {errors.dataNasc && <span className="text-red-500 text-sm">{errors.dataNasc.message}</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="senha">Senha</Label>
              <div className="flex border-[1px] rounded-md">
                <Input
                  className="border-none"
                  id="senha"
                  type={isShow1 ? "text" : "password"}
                  {...register('senha')}
                />
                <button onClick={eyePassword1} type="button" className="px-4">
                  {isShow1 ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
              {errors.senha && <span className="text-red-500 text-sm">{errors.senha.message}</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmSenha">Confirmar Senha</Label>
              <div className="flex border-[1px] rounded-md">
                <Input
                  className="border-none"
                  id="confirmSenha"
                  type={isShow2 ? "text" : "password"}
                  {...register('confirmSenha')}
                />
                <button onClick={eyePassword2} type="button" className="px-4">
                  {isShow2 ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
              {errors.confirmSenha && <span className="text-red-500 text-sm">{errors.confirmSenha.message}</span>}

              <div className="flex items-center space-x-2 p-2">
                <Checkbox onCheckedChange={checkboxAtivo} id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Deseja criar conta
                  <HoverCard>
                    <HoverCardTrigger className="underline hover:font-bold"> profissional?</HoverCardTrigger>
                    <HoverCardContent className="space-y-2">
                      <h1>
                        O profissional ajuda com seus conhecimentos na área da saúde que se formou e <span className="text-green-500"> auxilia e responde </span>a paciente em perguntas recorrentes.
                      </h1>
                      <h1 className="text-red-500">Para se cadastrar é necessário uma confirmação por parte de nossos moderadores.</h1>
                    </HoverCardContent>
                  </HoverCard>
                </label>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Cadastrar-se
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Já possui uma conta?{" "}
            <Link href="/login" className="underline">
              Entrar
            </Link>
          </div>
        </div>
        <Toaster />
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale  bg-red-50"
        />
      </div>
    </div>
  );
}

export default Page;
