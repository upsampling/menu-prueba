import React from 'react'
import { Bebidas } from './body/Bebidas';
import { Carne } from './body/Carne';
import { Pastas } from './body/Pastas';
import { Populares } from './body/Populares';
import { Recomendados } from './body/Recomendados';


export const Body = () => {
    return (
        <>
            <Carne id="carne" />
            <Pastas id="pastas" />
            <Recomendados id="recomendados" />
            <Populares id="populares" />
            <Bebidas id="bebidas"/>
        </>
    )
}
