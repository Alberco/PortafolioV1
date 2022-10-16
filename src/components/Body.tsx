import { ContainerContentBody, ContenidoInfo, ImgUsuario } from "../styleComponents/body-content-style";
import { ContainerBody } from "../styleComponents/layout-style";
import overlord from '../static/img/1b.png'
function Body() {
    return ( 
    <ContainerBody>
        <ContainerContentBody>
            <ContenidoInfo>
                <p>Hola Soy Guillermo Alberco</p>
                <p>Estudiante de Ingenieria de Software</p>
            </ContenidoInfo>
            <ImgUsuario src={overlord} alt="assa"/>
        </ContainerContentBody>
    </ContainerBody> 
    );
}

export default Body;