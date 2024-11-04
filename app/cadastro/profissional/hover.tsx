import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const Hover = () => {
  return (
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
  )
}

export default Hover
