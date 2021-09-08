import styled from 'styled-components'

const Perfil = styled.div`
    display: flex;
    flex-direction: row;

    img {
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

const Icones = styled.div`
    .bolinhas {
    display: flex;
    flex-direction: row;
    margin-left: 70em;
}

    .box-carregar {
        display: flex;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50px;

        background-color: #986CDF;
    }

    .box-sair {
        display: flex;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50px;

        background-color: #986CDF;
    }

    .box-carregar {
        margin-right: 0.5em;
    }

    .carregar, .sair {
        padding-left: 10px;
    }
`

const ContainerCabecalho = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

    padding: 2em;
    background-color: #FFFFFF;

    border-bottom: 1px solid #D9D9D9;
`

export {Perfil, Icones, ContainerCabecalho}