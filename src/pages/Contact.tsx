import { BoxPresenta, ContainerGeneral, TituloSkills } from "../styleComponents/skills-style";
import fondoContacto from '../static/img/contactoFondo.jpg'
import { BoxContact, BoxIcon, ImagenContacto, InfoContact } from "../styleComponents/contact-style";
import demon from '../static/img/demon.gif'


function Contact() {
    return (
        <ContainerGeneral>
            <BoxPresenta urlFondo={fondoContacto}>
                <TituloSkills>
                    Cantacto
                </TituloSkills>
            </BoxPresenta>
            <BoxContact>
                <InfoContact>
                    <div>
                        <BoxIcon>
                            <img style={{height: "4rem"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="no imagen"  />
                        </BoxIcon>
                        <p>AlbercoSupernova@gmail.com</p>
                    </div>
                    <div>
                        <BoxIcon>
                             <img style={{height: "4rem"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="no imagen" />
                        </BoxIcon>
                        <p>Alberco</p>
                    </div>
                </InfoContact>
                <div>
                    <ImagenContacto src={demon} />
                </div>
            </BoxContact>


        </ContainerGeneral>
      );
}

export default Contact;