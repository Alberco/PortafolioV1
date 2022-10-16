import { ContainerMenu ,  ListaLinks, Li, LinkNavbar} from "../styleComponents/navbar-style";



function Navbar() {

    return ( 
        <ContainerMenu>
            <ListaLinks>
                <Li>
                    <LinkNavbar to="/">Inicio</LinkNavbar>
                </Li>
                <Li>
                    <LinkNavbar to="skills">Habilidades</LinkNavbar>
                </Li>
                <Li>
                    <LinkNavbar to="projects">Projectos</LinkNavbar>
                </Li>
                <Li>
                    <LinkNavbar to="contact">Contacto</LinkNavbar>
                </Li>
            </ListaLinks>
        </ContainerMenu>
     );
}

export default Navbar;