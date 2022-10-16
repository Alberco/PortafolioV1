import { BoxPresenta, ContainerGeneral, TituloSkills } from "../styleComponents/skills-style";
import fondo1 from '../static/img/presentacion2.jpg'
import { BoxMarcadores, ContenedorIz, ContenedorProyect, ContenedorRepositorio, Descripcion, ImagenProjecto, Marcador, Proyecto, Redireccion, TituloProyecto } from "../styleComponents/projects-style";
import { apiProyectos } from "../components/subpestañas/models/proyectos-model";

function Projects() {

    return (
        <ContainerGeneral>
            <BoxPresenta urlFondo={fondo1}>
                <TituloSkills>
                    Proyectos
                </TituloSkills>
            </BoxPresenta>
            <ContenedorProyect>
                {
                    apiProyectos.map( item => (
                        <Proyecto key={item.id}>
                            <ContenedorIz>
                                <TituloProyecto>{item.name}</TituloProyecto>
                                {
                                    item.img === undefined ? null : (
                                        <ImagenProjecto src={item.img} alt="no image" />
                                    )
                                }
                                <Descripcion>
                                    {item.descript}
                                </Descripcion>
                                <BoxMarcadores>
                                    {item.tag?.map((t,index) =>(
                                        <Marcador key={index + "002"}>{t}</Marcador>
                                    ))}
                                </BoxMarcadores>
                                <ContenedorRepositorio>
                                    <Redireccion href="https://dashing-sorbet-06036a.netlify.app/" target="_blank">Visitar Web</Redireccion>
                                    <Redireccion href="https://dashing-sorbet-06036a.netlify.app/" target="_blank">Ver Repositorio</Redireccion>
                                </ContenedorRepositorio>
                            </ContenedorIz>
                        </Proyecto>
                    ))
                }
            </ContenedorProyect>
            
        </ContainerGeneral>
      );
}

export default Projects;