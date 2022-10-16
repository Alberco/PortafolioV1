import styled from 'styled-components'

export const ContenedorProyect = styled.div`
    color: black;
    display: grid;
    margin: 3rem 20rem;
    grid-template-columns: repeat(2,1fr);
    grid-auto-flow: row dense;
    gap: 50px;
    @media (max-width: 1600px) {
        margin: 2rem 10rem;
        
    }
    @media (max-width: 425px) {
        grid-template-columns: 1fr;
        padding: 15px;
        margin: auto;
        gap: 30px;
        justify-items: center;
    }
    
`
export const Proyecto = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    color: black;
    background-color: #ffffff8b;
    width: auto;
    height: auto;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: solid 2px white;
    color: black;
    padding: 30px;
    transition: 0.8s;
    &:hover {
        transform: scale(1.03);
    }
    //laptop1
    @media (max-width: 1600px) {
        
    }
    @media (max-width: 425px) {
        width: 270px;
        padding: 20px;
        justify-items: center;
    }
`
export const ContenedorIz = styled.div`
    text-align: center;
`

export const ImagenProjecto = styled.img`
    width: 480px;
    height: 260px;
    border-radius: 5px;
    margin-top: 10px;
    @media (max-width: 425px) {
        width: 260px;
        height: 160px;
    }
`

export const BoxMarcadores = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    gap: 10px;
`
export const ContenedorRepositorio = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px;
`

export const Redireccion = styled.a`
    outline: none;
    text-decoration: none;
    border: solid 2px white;
    padding: 0.7rem 2rem;
    background-color: #383e3c;
    color: white;
    font-size: 1rem;  
    transition: 0.5s;
    cursor: pointer; 
    &:hover {
        background-color: #383e3cbb;
    }
    @media (max-width: 425px) {
        padding: 0.7rem 1rem;
        font-size: 0.5rem;
    }
`

export const TituloProyecto = styled.p`
    display: inline;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`

export const Descripcion = styled.p`
    @media (max-width: 425px) {
        font-size: 0.8rem;
    }
`

export const Marcador = styled.p`
    background:#383e3c;
    color: white;
    border-radius: 5px;
    padding: 5px;
    @media (max-width: 425px) {
        font-size: 0.4rem;
    }
`