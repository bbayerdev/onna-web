
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
            <h1 className='text-5xl text-red-900 font-bold text-left'>Metas</h1>

            <Accordion type="single" collapsible className="w-full pt-16 space-y-10">
                <AccordionItem value="item-1">
                    <AccordionTrigger className='text-2xl'>Aumentar o engajamento do usuário</AccordionTrigger>
                    <AccordionContent className='text-lg'>
                        Aumentar o número de usuárias ativas em nossa plataforma
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className='text-2xl'>Melhorar a acessibilidade </AccordionTrigger>
                    <AccordionContent className='text-lg'>
                        Plataforma mais acessível e fácil de usar para mulheres de todas as origens e níveis de experiência
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className='text-2xl'>Atualizar regularmente os conteúdos</AccordionTrigger>
                    <AccordionContent className='text-lg'>
                        Garantindo que nossas usuárias tenham acesso a conteúdos precisos e úteis em sua jornada de cuidados com a saúde
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </section>
    )
}

export default SectionMetas