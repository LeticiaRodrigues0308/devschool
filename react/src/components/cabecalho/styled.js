import styled from 'styled-components'


const ContainerCabecalho = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    padding: 2em;
    background-color: #FFFFFF;

    border-bottom: 1px solid #D9D9D9;
`
const Perfil = styled.div`
    .perfil img {
        width: 60px;
        height: 60px;
        border-radius: 50px;
    }

    .notificacao {
        width: 25px;
        height: 25px;
        border-radius: 50px;
        border: 2px solid #FFFFFF;
    
        background-color: #DB21BD;
        color: #FFFFFF;
    
        text-align: center;
        font-weight: 700;
    
        position: absolute;
        left: 435px;
    }
    
    .nome {
        color: #615858;
        margin: 1em;
    }
`

export {ContainerCabecalho, Perfil}