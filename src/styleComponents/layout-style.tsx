import styled from 'styled-components'

export const FondoPrincipal = styled.div`
    
`
export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500&display=swap');
    display: grid;
    grid-template-areas: "navbar"
                          "body"
                         "footer";
    grid-template-rows:    1fr 10fr 1fr;
    grid-template-columns: 12fr;
    margin: auto;
    min-height: 100vh;
    max-height: 100vh;
    font-family: 'Cinzel', serif;
    color: white;
`

//Body

export const ContainerBody = styled.div`
    grid-area: "body";
`

//footer    

export const ContainerFooter = styled.div`
    display: flex;
    grid-area: "footer";
    align-items: center;
    justify-content: center;
    background-color: #383e3c;
    text-align: center;
    padding: 10px;
    
    @media (max-width: 1600px) {
        padding: 20px;
    }
    //tablet
    @media (max-width: 1440px) {
        font-size: 1.5rem;
    }
    @media (max-width: 425px) {
        display: flex;
        font-size: 0.8rem;
        height: 100%;
        align-items: center;
        justify-content: center;
        padding: 10px;
    }
    @media (max-width: 375px) {
        font-size: 0.8rem;
        padding: 10px;
    }
`