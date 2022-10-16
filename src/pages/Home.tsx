import styled from 'styled-components'
import fondo  from '../static/img/home1.png'
import animacion2 from '../static/img/king.gif'
import fondo1 from '../static/img/back.png'

const Contenedor = styled.div`
    background-image: url(${fondo});
    z-index: 100;
    background-repeat: no-repeat;
    background-size: cover;
`

const BoxContenido = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin: 3rem 15rem;
    height: 40rem;
    background-color: #383e3c;
    border-radius: 0px;
    border: solid 2px;
    text-align: center;
    padding: 1rem;
    gap: 1rem;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    //laptop1
    @media (max-width: 1600px) {
        font-size: 1.1rem;
        margin: 3rem 6rem;
        padding: 2rem;
    }
    //tablet
    @media (max-width: 1440px) {
        font-size: 1.5rem;
    }
    //movileL
    @media (max-width: 425px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        font-size: 1rem;
        margin: 2rem 1rem;
        justify-items: center;
        height: 38rem;
    }
    @media (max-width: 375px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        font-size: 1rem;
        margin: 1rem 0.3rem;
        justify-items: center;
        height: 38rem;
    }
`

const BoxTitulo = styled.div`
    padding: 3rem;
    width:80%;
    background-image: url(${fondo1});
    background-repeat: no-repeat;
    @media (max-width: 425px) {
        padding:0;
        background-image: url();
        grid-row: 1;
        margin: auto;
        width:100%;
    }

`
const BoxTitulo2 = styled.div`
    bottom: 40px;
    padding: 5rem 1rem;
    @media (max-width: 425px) {
        position: relative;
        text-align: center;
        padding: 2rem 1rem;
        grid-row: 2;
    }
`
const TituloPrincipal = styled.p`
    font-size: 3rem;
    margin-top: 1rem;
    font-weight: bold;

    @media (max-width: 425px) {
        font-size: 1.3rem;
    }
`

const ParrafoPrincipal = styled.p`
    margin-bottom: 4rem;
    font-size: 1.4rem;
    //laptop1
    @media (max-width: 1440px) {
        font-size: 1.2rem;
    }
    //tablet
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    @media (max-width: 425px) {
        font-size: 1rem;
    }
`
const ButtomPrincipal = styled.button`
    border: solid 2px white;
    padding: 1rem 3rem;
    background-color: #383e3c;
    color: white;
    font-size: 1rem;  
    transition: 0.5s;
    cursor: pointer; 
    &:hover {
        background-color: white;
        color: black;
    }
    @media (max-width: 425px) {
        padding: 1rem 2rem;
        font-size: 0.8rem;
    }
`
const LogoPrincipal = styled.img`
    height: 480px;
    @media (max-width: 425px) {
        height: 200px;
    }
`
function Home() {
    return ( 
        <Contenedor>
            <BoxContenido>
                <BoxTitulo2>
                    <p style={{display:"flex", alignItems:"center" , justifyContent:"center"}}>Developer Software
                       {/*  <span>
                            <img style={{ height: "100px" }}  src={animacion2} />
                        </span> */}
                    </p>
                    <TituloPrincipal>Soy Guillermo Alberco Capistrano</TituloPrincipal>
                    <ParrafoPrincipal>
                        Desarrollador de software , me apasiona las nuevas tecnologias de la programacion 
                        ademas me encanta los videojuegos JRPG.
                    </ParrafoPrincipal>
                    <div style={{ display:"flex", justifyContent:"center",gap:"1rem" }}>
                        <ButtomPrincipal>Descargar CV</ButtomPrincipal>
                        <ButtomPrincipal>GitHub</ButtomPrincipal>
                    </div>
                </BoxTitulo2>
                <BoxTitulo>
                    <LogoPrincipal src={animacion2} />
                </BoxTitulo>
            </BoxContenido>
        </Contenedor>
     );
}

export default Home;
