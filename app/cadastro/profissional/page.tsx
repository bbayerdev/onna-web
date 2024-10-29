'use client'
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Toaster } from "@/components/ui/toaster"
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
    //faz parte do command
    const [openDoc, setOpendoc] = useState(false)
    const [documento, setDocumento] = useState("") //variavel do docmento escolhido
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")//variavel da area de atuacao
    const [openUf, setOpenUf] = useState(false);
    const [ufSelecionada, setUfSelecionada] = useState("")// variavel da uf

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
            <div className="flex items-center justify-center py-12">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className=" text-5xl text-red-900 font-bold">Cadastro Profissional</h1>
                        <p className="text-balance text-muted-foreground">
                            Insira seus dados abaixo para finalizar seu cadastro como usuário
                            <HoverCard>
                                <HoverCardTrigger className="underline hover:font-bold"> profissional.</HoverCardTrigger>
                                <HoverCardContent className="text-left text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    <h1>
                                        O profissional ajuda com seus conhecimentos na área da saúde que se formou e <span className="text-green-500"> auxilia e responde </span>a paciente em perguntas recorrentes.
                                    </h1>
                                    <br />
                                    <h1 className="text-red-500">Para se cadastrar é necessário uma confirmação por parte de nossos moderadores.</h1>
                                </HoverCardContent>
                            </HoverCard>
                        </p>
                    </div>

                    <form className="grid gap-4">
                        <div className="flex flex-row gap-2">
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
                                                : "Selecione"}
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
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email">{documento ? `Seu ${documento}` : 'Documento'}</Label>
                                <Input
                                    id="documento"
                                    type="text"
                                    placeholder="12345-SP"
                                    required
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
                                                : "Estado"}
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

                    </form>

                </div>
                <Toaster />
            </div>
        </div>
    )
}
export default page
