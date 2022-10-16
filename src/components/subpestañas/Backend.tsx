import { BoxSkills, ContainerSkills, IconLenguajes } from "../../styleComponents/skills-style";


const iconBackend = [
    {"name":"Django", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"},
    {"name":"Flask", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"},
    {"name":"FastApi", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original-wordmark.svg"},
    {"name":"Express", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"},
    {"name":"Ruby on rails", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg"},    {"name":"Next", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"}
]

function Backend() {
    return ( 
        <ContainerSkills>
        {
            iconBackend.map( (item,index) => (
                <BoxSkills key={index + 332234}>
                    <IconLenguajes src={item.url} />
                    <p>{item.name}</p>
                </BoxSkills>
            ))
        }
        </ContainerSkills>
     );
}

export default Backend;