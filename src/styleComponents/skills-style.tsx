import styled from "styled-components";
export const ContainerGeneral = styled.div`
    grid-area: "body";
    background: #f7f7f1;
    padding-bottom: 50px;
    @media (max-width: 425px) {
        padding-bottom: 10px;
    }
`

export const ContainerSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin: auto 20rem;
    gap: 40px;

    //laptop1
    @media (max-width: 1600px) {
        padding: 10px;
        margin: 1rem 10rem;
        gap: 30px;
        justify-items: center;
    }
    //tablet
    @media (max-width: 1440px) {
        
    }
    //movileL
    @media (max-width: 425px) {
        grid-template-columns: 1fr;
        padding: 20px;
        margin: auto;
        gap: 20px;
        justify-items: center;
    }
    /* @media (max-width: 375px) {
        grid-template-columns: 1fr;
    } */
`
export const BoxSkills = styled.div`
    background-size:cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 7rem 4rem;
    border-radius: 0.4rem;
    font-size: 1.3rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: solid 2px white;
    color: black;
    transition: 0.5s;
    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 1600px) {
       /*  padding: 3rem 2.8rem; */
        text-align: center;
        width: 6rem;
        height: 4rem;
    }
    @media (max-width: 425px) {
        padding: 3rem;
        width: 100px;
        width: 6rem;
        height: 10rem;
    }
`
export const IconLenguajes = styled.img`
    width:95px;
    height:95px;
    margin-top: 10px;
`
//boxPresentacion
export const TituloSkills = styled.div`
    font-size: 2rem;
    font-weight: bold;
    color: #000;
    text-align: center;
    background: #ffffff8b;
    width: 20%;
    margin: auto;
    @media (max-width: 425px) {
        width: 100%;
    }
`
type FondoBoxPresenta = {
    urlFondo : string
}

export const BoxPresenta = styled.div<FondoBoxPresenta>`
    background-image: url(${props => props.urlFondo});
    padding: 50px;
    background-repeat: no-repeat;
    background-size:cover;
    filter: grayscale(48%);
    background-position: center;
    @media (max-width: 425px) {
        padding: 10px;
    }
    
`

//NAVSECUNDARIO
export const NavbarSecundario = styled.div`
    display: flex;
    justify-content: center;
    padding: 30px 30px;
    gap: 30px;
    font-size: 1rem;
    font-weight: bold;
    @media (max-width: 425px) {
        flex-direction: column;
        gap: 5px;
        font-size: 0.7rem;
        padding: 10px;
    }
`
type ActivoProps = {
    activo?: string
}
export const Pestañas = styled.button<ActivoProps>`
    background: none;
    color: black;
    border:none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    padding: 5px;
    border-bottom: solid 2px ${ props => props.activo || "trasparent" };
    @media (max-width: 425px) {
        width: 30%;
        margin: auto;
    }
`