import { useState } from "react";
import Backend from "../components/subpestañas/Backend";
import Frontend from "../components/subpestañas/Frontend";
import Herramientas from "../components/subpestañas/Herramientas";
import Lenguajes from "../components/subpestañas/Lenguajes";
import { BoxPresenta, ContainerGeneral, NavbarSecundario, Pestañas, TituloSkills } from "../styleComponents/skills-style";
import fondo from "../static/img/presentacion1.png"

interface Habilidades {
    name: string
    color: string
}

interface Opcion {
    name: string
    activo: boolean
} 

function Skills() {

    const [newcomponente,setNewcomponente] = useState<Habilidades>({
        "name":"lenguajes",
        "color": "white"
    })

    const opciones: Array<Opcion> = [
        {name:"Lenguajes",activo:true},
        {name:"Frontend",activo:false},
        {name:"Backend",activo:false},
        {name:"Herramientas",activo:false},
    ]
    
    const hlanderButtom = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setNewcomponente({...newcomponente,"name":event.currentTarget.name,"color":"white"})
    }
    return (
        <ContainerGeneral>
            <BoxPresenta urlFondo={fondo}>
                <TituloSkills>Habilidades</TituloSkills>
            </BoxPresenta>
            <NavbarSecundario>
                {
                    opciones.map( (item,index) => (
                        <Pestañas key={index + "032"}  name={item.name.toLowerCase()} activo={newcomponente.name === item.name.toLowerCase() ? "black" : undefined } onClick={hlanderButtom}>{item.name}</Pestañas>
                    ))
                }
            </NavbarSecundario>
            {
                newcomponente.name === "lenguajes" ? (
                    <Lenguajes />
                ) : null
            
            }
            {
                newcomponente.name === "frontend" ? (
                    <Frontend />
                ) : null
            
            }
            {
                newcomponente.name === "backend" ? (
                    <Backend />
                ) : null
            
            }
            {
                newcomponente.name === "herramientas" ? (
                    <Herramientas/>
                ) : null
            
            }
        </ContainerGeneral>
      );
}

export default Skills;