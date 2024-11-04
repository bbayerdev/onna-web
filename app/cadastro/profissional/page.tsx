'use client'
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Toaster } from "@/components/ui/toaster"
import { toast } from "@/hooks/use-toast"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Check, ChevronsUpDown, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import api from '../../../api/api';
import { useRouter } from 'next/navigation';
import router from "next/router";
import Hover from "./hover"

const cadastroProfissionalSchema = z.object({
    documento: z.string().nonempty("Documento é obrigatório"),
  });
//ts sendo ts
type CadastroProfissionalFormData = z.infer<typeof cadastroProfissionalSchema>;

//arrays dos drops
const docUser = [
    { id: 1, value: "CRM", label: "CRM" },
    { id: 2, value: "CRP", label: "CRP" },
];
const itensCRM = [
    { value: "alergia-e-imunologia", label: "Alergia e Imunologia" },
    { value: "anestesiologia", label: "Anestesiologia" },
    { value: "angiologia", label: "Angiologia" },
    { value: "cardiologia", label: "Cardiologia" },
    { value: "cirurgia-geral", label: "Cirurgia Geral" },
    { value: "cirurgia-pediatrica", label: "Cirurgia Pediátrica" },
    { value: "clinica-medica", label: "Clínica Médica" },
    { value: "dermatologia", label: "Dermatologia" },
    { value: "genetica-medica", label: "Genética Médica" },
    { value: "geriatria", label: "Geriatria" },
    { value: "ginecologia-e-obstetricia", label: "Ginecologia e Obstetrícia" },
    { value: "infectologia", label: "Infectologia" },
    { value: "mastologia", label: "Mastologia" },
    { value: "medicina-de-emergencia", label: "Medicina de Emergência" },
    { value: "medicina-de-familia-e-comunidade", label: "Medicina de Família e Comunidade" },
    { value: "medicina-fisica-e-reabilitacao", label: "Medicina Física e Reabilitação" },
    { value: "neurologia", label: "Neurologia" },
    { value: "nutrologia", label: "Nutrologia" },
    { value: "ortopedia-e-traumatologia", label: "Ortopedia e Traumatologia" },
    { value: "psiquiatria", label: "Psiquiatria" },
    { value: "radiologia-e-diagnostico-por-imagem", label: "Radiologia e Diagnóstico por Imagem" },
    { value: "radioterapia", label: "Radioterapia" },
    { value: "urologia", label: "Urologia" },
];
const itensCRP = [
    { value: 'psicologia_escolar', label: 'Psicologia Escolar e Educacional' },
    { value: 'psicologia_organizacional', label: 'Psicologia Organizacional e do Trabalho' },
    { value: 'psicologia_clinica', label: 'Psicologia Clínica' },
    { value: 'psicologia_hospitalar', label: 'Psicologia Hospitalar' },
    { value: 'psicopedagogia', label: 'Psicopedagogia' },
    { value: 'psicologia_social', label: 'Psicologia Social' },
    { value: 'neuropsicologia', label: 'Neuropsicologia' },
    { value: 'psicologia_saude', label: 'Psicologia em Saúde' },
    { value: 'avaliacao_psicologica', label: 'Avaliação Psicológica' },
];
const estadosBrasil = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
];

export function page() {

    const { register, handleSubmit, formState: { errors } } = useForm<CadastroProfissionalFormData>({
        resolver: zodResolver(cadastroProfissionalSchema)
    });

    //faz parte do command do docmento
    const [documento, setDocumento] = useState(() => {
        const crmDoc = docUser.find((doc) => doc.label === "CRM")
        return crmDoc ? crmDoc.value : ""// usa o valor correspondente ao CRM, ou "" se não existir
    });
    const [openDoc, setOpendoc] = useState(false)
    //esse da area de atuacao
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")//variavel da area de atuacao
    // e esse do uf
    const [openUf, setOpenUf] = useState(false);
    const [ufSelecionada, setUfSelecionada] = useState("")// variavel da uf

    async function cadastrarPerfilProfissional(data: { documento: string }) {
        if (!ufSelecionada || !value) {
            toast({
                title: "Erro ao cadastrar perfil!",
                description: "UF e Área de Formação são obrigatórios.",
                className: 'bg-red-400',
                duration: 2000,
            });
            return;
        }
    
        try {
            const res = await api.post("/api/perfilProfissional", {
                crm: documento === "CRM" ? data.documento : null,
                crp: documento === "CRP" ? data.documento : null,
                uf: ufSelecionada,
                area_Formacao: value,
                idTipo_Usuario: 1
            });
    
            if (res.status === 200) {
                toast({
                    title: "Cadastro realizado!",
                    description: "Seu perfil foi cadastrado com sucesso.",
                    className: 'bg-green-400',
                    duration: 2000,
                });
                setTimeout(() => {
                    router.push("/perfilProfissional");
                }, 1900);
            }
        } catch (error) {
            console.error("Erro ao cadastrar perfil profissional:", error);
            toast({
                title: "Erro ao cadastrar perfil!",
                description: "Verifique os dados e tente novamente.",
                className: 'bg-red-400',
                duration: 2000,
            });
        }
    }
    const router = useRouter()

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="hidden bg-muted lg:block">
                <Image
                    src="/"
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale  bg-red-50"
                />
            </div>
            <div className="flex items-center justify-center">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className=" text-5xl text-red-900 font-bold">Cadastro Profissional</h1>
                       <Hover/>
                    </div>

                    <form onSubmit={handleSubmit(cadastrarPerfilProfissional)} className="grid gap-4">
                        <div className="flex wflex-row gap-2">
                            <div className="flex flex-col gap-2">
                                <Label className="" htmlFor="Fórum">
                                    Documento
                                </Label>
                                <Popover open={openDoc} onOpenChange={setOpendoc}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={openDoc}
                                            className="w-full justify-between"
                                        >
                                            {documento
                                                ? docUser.find((docUser) => docUser.value === documento)?.label
                                                : ""}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[120px] p-0">
                                        <Command>
                                            <CommandList>
                                                <CommandGroup>
                                                    {docUser.map((docUser) => (
                                                        <CommandItem
                                                            key={docUser.value}
                                                            value={docUser.value}
                                                            onSelect={(currentValue) => {
                                                                setDocumento(currentValue === documento ? "" : currentValue)
                                                                setOpendoc(false)
                                                            }}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    documento === docUser.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                            {docUser.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <Label htmlFor="email">{documento ? `Seu ${documento}` : 'Documento'}</Label>
                                {errors.documento && <span className="text-red-500 text-sm">{errors.documento.message}</span>}
                                <Input
                                    id="documento"
                                    type="text"
                                    placeholder={documento === 'CRM' ? 'ex: 12345' : 'ex: 54321'}
                                    required
                                    {...register('documento')}
                                    maxLength={5} // Limita a entrada a 5 caracteres
                                    pattern="[0-9]*" // Aceita apenas números
                                    onInput={(e) => {
                                        const input = e.target as HTMLInputElement; // Faz a assertiva de tipo
                                        input.value = input.value.replace(/\D/g, ""); // Remove qualquer caractere que não seja número
                                    }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 justify-between">

                            <div className=" flex flex-col gap-2">
                                <Label className="" htmlFor="Fórum">
                                    UF
                                </Label>
                                <Popover open={openUf} onOpenChange={setOpenUf}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={openUf}
                                            className="w-auto justify-between"
                                        >
                                            {ufSelecionada
                                                ? estadosBrasil.find((estado) => estado.value === ufSelecionada)?.label
                                                : "Selecione"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[180px] p-0">
                                        <Command>
                                            <CommandList>
                                                <CommandGroup>
                                                    {estadosBrasil.map((estado) => (
                                                        <CommandItem
                                                            key={estado.value}
                                                            value={estado.value}
                                                            onSelect={(currentValue) => {
                                                                setUfSelecionada(currentValue === ufSelecionada ? "" : currentValue);
                                                                setOpenUf(false);
                                                            }}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    "mr-2 h-4 w-4",
                                                                    ufSelecionada === estado.value ? "opacity-100" : "opacity-0"
                                                                )}
                                                            />
                                                            {estado.label}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="flex-col flex gap-2">
                                <Label className="" htmlFor="Fórum">
                                    Área de formação
                                </Label>
                                {documento === "CRM" ? (
                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="w-full justify-between"
                                            >
                                                {value
                                                    ? itensCRM.find((item) => item.value === value)?.label
                                                    : "Especialidade"}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[300px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Selecione sua especialidade" />
                                                <CommandList>
                                                    <CommandEmpty>Nenhuma especialidade encontrada.</CommandEmpty>
                                                    <CommandGroup>
                                                        {itensCRM.map((item) => (
                                                            <CommandItem
                                                                key={item.value}
                                                                value={item.value}
                                                                onSelect={(currentValue) => {
                                                                    setValue(currentValue === value ? "" : currentValue);
                                                                    setOpen(false);
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        value === item.value ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                                {item.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>

                                ) : (

                                    <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="outline"
                                                role="combobox"
                                                aria-expanded={open}
                                                className="w-full justify-between"
                                            >
                                                {value
                                                    ? itensCRP.find((item) => item.value === value)?.label
                                                    : "Especialidade"}
                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[300px] p-0">
                                            <Command>
                                                <CommandInput placeholder="Selecione sua especialidade" />
                                                <CommandList>
                                                    <CommandEmpty>Nenhuma especialidade encontrada.</CommandEmpty>
                                                    <CommandGroup>
                                                        {itensCRP.map((item) => (
                                                            <CommandItem
                                                                key={item.value}
                                                                value={item.value}
                                                                onSelect={(currentValue) => {
                                                                    setValue(currentValue === value ? "" : currentValue);
                                                                    setOpen(false);
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        "mr-2 h-4 w-4",
                                                                        value === item.value ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                                {item.label}
                                                            </CommandItem>
                                                        ))}
                                                    </CommandGroup>
                                                </CommandList>
                                            </Command>
                                        </PopoverContent>
                                    </Popover>
                                )}
                            </div>
                        </div>
                        <Button type="submit" className="mt-10 w-full">
                            Cadastrar-se
                        </Button>
                    </form>

                </div>
                <Toaster />
            </div>
        </div>
    )
}
export default page
