import foto1 from '../../../static/img/foto1.png'
import foto2 from '../../../static/img/foto4.png'
import foto3 from '../../../static/img/foto7.png'
interface IProyectos {
    id: number
    name: string
    img?: string
    tag?: Array<string>
    enlaces?: Array<string>
    descript: string
}

export const apiProyectos : Array<IProyectos> = [
    {
       id: 1,
       name: "Valorant Web",
       img: foto1,
       tag: ["React","Typescript"],
       enlaces: [""],
       descript:"Pagina web sobre la informacion de los personajes y armas del juego valorant,con todas las estadisticas de daño de las armas"
    },
    {
       id: 2,
       name: "Jardineria Web",
       img: foto2,
       tag: ["React","Javascript","Tailwind"],
       enlaces: [""],
       descript:"Pagina web sobre la informacion de los personajes y armas del juego valorant,con todas las estadisticas de daño de las armas"
    },
    {
        id:3,
        name: "Manga List",
        img: foto3,
        tag: ["Html","CSS","JavaScript"],
        enlaces: [""],
        descript:"Pagina web sobre la informacion de los personajes y armas del juego valorant,con todas las estadisticas de daño de las armas"
    },
    {
        id:4,
        name: "Manga List",
        tag: ["Html","CSS","JavaScript"],
        enlaces: [""],
        descript:"Pagina web sobre la informacion de los personajes y armas del juego valorant,con todas las estadisticas de daño de las armas"
    },
    {
        id:5,
        name: "Manga List",
        tag: ["Html","CSS","JavaScript"],
        enlaces: [""],
        descript:"Pagina web sobre la informacion de los personajes y armas del juego valorant,con todas las estadisticas de daño de las armas"
    },
    {
        id:6,
        name: "Manga List",
        tag: ["Html","CSS","JavaScript"],
        enlaces: [""],
        descript:"Pagina web sobre la informacion de los personajes y armas del juego valorant,con todas las estadisticas de daño de las armas"
    }
]