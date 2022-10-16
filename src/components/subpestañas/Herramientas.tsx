import { BoxSkills, ContainerSkills, IconLenguajes } from "../../styleComponents/skills-style";

function Herramientas() {

    const iconHerramientas = [
        {"name":"Postgres", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"},
        {"name":"SQLite", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg"},
        {"name":"Mysql", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"},
        {"name":"Git","url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
        {"name":"GitHub","url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"}
    ]

    return ( 
        <ContainerSkills>
        {
            iconHerramientas.map( (item,index) => (
                <BoxSkills key={index + 2346565}>
                    <IconLenguajes src={item.url} />
                    <p>{item.name}</p>
                </BoxSkills>
            ))
        }
        </ContainerSkills>
     );
}

export default Herramientas;