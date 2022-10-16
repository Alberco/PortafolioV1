import { BoxSkills, ContainerSkills, IconLenguajes } from "../../styleComponents/skills-style";

const iconFrontend = [
    {"name":"React", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {"name":"Next", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"},
    {"name":"Vue", "url":"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"}
]

function Frontend() {
    return (
        <ContainerSkills>
        {
            iconFrontend.map( (item,index) => (
                <BoxSkills key={index + 29999}>
                    <IconLenguajes src={item.url} />
                    <p>{item.name}</p>
                </BoxSkills>
            ))
        }
        </ContainerSkills>
      );
}

export default Frontend;