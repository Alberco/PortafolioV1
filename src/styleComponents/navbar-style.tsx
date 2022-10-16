import styled from "styled-components";
import { Link } from 'react-router-dom';


export const ContainerMenu = styled.div`
    grid-area: "navbar";
    background-color: #383e3c;
    font-weight: bold;
    border-bottom: solid 10px;
`
export const ListaLinks = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1.8rem;
    list-style-type: none;
    font-size: 1.6rem;
    color: white;
    padding: 0.5rem 1rem;
    //laptop1
    @media (max-width: 1600px) {
        font-size: 1.3rem;
    }
    //tablet
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    //movil1
    @media (max-width:  425px) {
        font-size: 0.8rem;
        padding: 0.5rem;
        gap: 1rem;
        
    }
`

export const LinkNavbar = styled(Link)`
    text-decoration: none;
    color: white;
    border-bottom: solid 2px transparent;
    &:hover {
        border-bottom: solid 2px white;
    }
`
export const Li = styled.li`
    display: flex;
    padding: 0px;
    align-items: center;
`