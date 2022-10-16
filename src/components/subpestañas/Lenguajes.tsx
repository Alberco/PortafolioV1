import { BoxSkills, ContainerSkills, IconLenguajes } from "../../styleComponents/skills-style";

interface IconNombres {
    name: string
    url: string
}

function Lenguajes() {

    const iconNombres: Array<IconNombres> = [
        {"name":"HTML", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
        {"name":"CSS", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
        {"name":"Javascript", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
        {"name":"Typescript", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
        {"name":"Python", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
        {"name":"Ruby", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"}
    ]

    return (
        <ContainerSkills>
        {
            iconNombres.map( (item,index) => (
                <BoxSkills key={index + 1234}>
                    <IconLenguajes src={item.url} />
                    <p>{item.name}</p>
                </BoxSkills>
            ))
        }
        </ContainerSkills>
     );
}

export default Lenguajes;