import React, { useEffect } from 'react'
import api from '@/api/api'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea'
import { Check, ChevronsUpDown, Image } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from 'next/link'

const frameworks = [
  {
    value: "Gravidez",
    label: "Gravidez",
  },
  {
    value: "Desabafos",
    label: "Desabafos",
  },
  {
    value: "Autocuidado",
    label: "Autocuidado",
  },
]

const Home = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  // API

  // post: api/postagem/idForum/idTipo_Usuario
  // get: api/postagem/idForum
  async function createPostagem() {
    try {
      const res = await api.post(`/api/postagem/${1}/${1}`, {
        titulo: "data.email",
        subtitulo: "data.senha",
        imagem: "data.nome"
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }

  async function readPostagem() {
    try {
      const userFromApi = await api.get("/api/postagem/" + 1)

      console.log((userFromApi.data[0]))

    } catch (error) {
      console.log("ERRO: " + error)
    }
  }
  useEffect(() => {
    readPostagem()
  }, [])

  return (
    <div>
      <h1>Página inicial</h1>
      <div className='p-10'>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Post</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className='text-3xl text-red-900'>Novo post</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-5">
              <div className="">
                <Label htmlFor="name" className="text-right">
                  Título
                </Label>
                <Input
                  id="name"
                  className="col-span-3"
                  placeholder='Digite o título do seu post aqui'
                />
              </div>
              <div className="">
                <Textarea className='h-[300px]' placeholder="Digite sua mensagem aqui..." />
              </div>
            </div>
            <DialogFooter className='flex justify-between '>
              <div className=''>
                <Button variant={'ghost'} >
                  <Image color='#525252' size={30} />
                </Button>
              </div>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                  >
                    {value
                      ? frameworks.find((framework) => framework.value === value)?.label
                      : "Selecione um fórum"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandList>
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue)
                              setOpen(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                value === framework.value ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <Button type="submit" className='bg-red-900 hover:bg-red-950' onClick={createPostagem} >Criar post</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-2xl'>Titulo</h1>
        <p>texto digitado</p>
      </div>
    </div>
  )
}

export default Home