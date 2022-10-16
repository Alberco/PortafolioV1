import styled from 'styled-components'

export const BoxContact = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    color: black;
    font-size: 1.5rem;
    text-align: center;
    margin: auto 20%;
    @media (max-width: 1600px) {
        margin: auto;
        text-align: center;
        width: 50%;
    }
    @media (max-width: 425px) {
        grid-template-columns: 1fr;
        margin: auto;
        font-size: 1rem;
        margin: auto 2%;
    }
`
export const InfoContact = styled.div`
    display: grid;
    justify-content: center;
    margin: auto;
`

export const BoxIcon = styled.div`
    margin: 1rem 10rem;
    padding: 25px; 
    border-bottom: solid 5px;
    @media (max-width: 425px) {
        margin: 1rem;
        border-bottom: solid 1px;
    }
`

export const ImagenContacto = styled.img`
    height: 35rem;
    @media (max-width: 1600px) {
        height: 25rem;
    }
    @media (max-width: 425px) {
        width: 380px;
        height: 300px;
    }
`