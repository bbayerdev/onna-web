
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const SectionMetas = () => {
    return (
        <section className='flex justify-center flex-col m-auto w-2/3'>
            <h1 className='md:text-5xl text-3xl text-red-900 font-bold text-left'>Metas</h1>

            <Accordion type="single" collapsible className="w-full pt-16 space-y-10">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='md:text-2xl text-1xl'>Aumentar o engajamento do usuário</AccordionTrigger>
                    <AccordionContent className='md:text-lg text-sm'>
                        Aumentar o número de usuárias ativas em nossa plataforma
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='md:text-2xl text-1xl'>Melhorar a acessibilidade </AccordionTrigger>
                    <AccordionContent className='md:text-lg text-sm'>
                        Plataforma mais acessível e fácil de usar para mulheres de todas as origens e níveis de experiência
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='md:text-2xl text-1xl'>Atualizar regularmente os conteúdos</AccordionTrigger>
                    <AccordionContent className='md:text-lg text-sm'>
                        Garantindo que nossas usuárias tenham acesso a conteúdos precisos e úteis em sua jornada de cuidados com a saúde
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </section>
    )
}

export default SectionMetas