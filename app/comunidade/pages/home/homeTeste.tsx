import React, { use, useEffect, useState } from 'react'
import api from '@/api/api'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
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
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

const postagemShema = z.object({
  titulo: z.string()
    .nonempty('Digite um título'),
  subtitulo: z.string()
    .max(2000)
})
//inteligencia do ts:
type postagemData = z.infer<typeof postagemShema>;
//intel do get
interface Ipost {
  titulo: string;
  subtitulo: string;
  img: string;
}

const Home = () => {
  //faz parte da tipagem:
  const [output, setOutput] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<postagemData>({
    resolver: zodResolver(postagemShema)
  });
  // Função para criar o usuário e enviar para a API:
  async function postagemUser(data: postagemData) {
    setOutput(JSON.stringify(data, null, 2));
    await createPostagem(data);
  }
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  // API
  // post: api/postagem/idForum/idTipo_Usuario
  // get: api/postagem/idForum
  async function createPostagem(data: postagemData) {
    try {
      const res = await api.post(`/api/postagem/${1}/${1}`, {
        titulo: data.titulo,
        subtitulo: data.subtitulo,
        imagem: null
      });
    } catch (error) {
      console.log("ERRO: " + error);
    }
  }


const [post, setPost] = useState<Ipost>({ titulo: "", subtitulo: "", img: "" })

  async function readPostagem() {
    try {
      const res = await api.get("/api/postagem/" + 1)

     setPost(res.data[19])

    } catch (error) {
      console.log("ERRO: " + error)
    }
  }
  useEffect(() => {
    readPostagem()
  }, [0])

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
            <form onSubmit={handleSubmit(postagemUser)}>
              <div className="flex flex-col gap-5">
                <div className="">
                  <Label htmlFor="name" className="text-right">
                    Título
                  </Label>
                  <Input
                    id="name"
                    className="col-span-3"
                    placeholder='Digite o título do seu post aqui'
                    {...register('titulo')}

                  />
                  {errors.titulo && <span className="text-red-500 text-sm">{errors.titulo.message}</span>}
                </div>
                <div className="">
                  <Textarea
                    className='h-[300px]'
                    placeholder="Digite sua mensagem aqui..."
                    {...register('subtitulo')}
                  />
                  {errors.subtitulo && <span className="text-red-500 text-sm">{errors.subtitulo.message}</span>}
                </div>
              </div>
              <DialogFooter className='flex justify-between pt-5 '>
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
                <Button type="submit" className='bg-red-900 hover:bg-red-950'>Criar post</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-2xl'>{post.titulo}</h1>
        <p>{post.subtitulo}</p>
      </div>
    </div>
  )
}

export default Home