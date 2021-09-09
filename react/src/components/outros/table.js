import styled from "styled-components";

const TabelaMatriculados = styled.table`
    .cabecalho-table{
    height: 67px;
    color: #FFFFFF;
}

    width: auto;
    margin-left: 2em;

    border-left: 1px solid #E2E2E2;
    border-right: 1px solid #E2E2E2;
    border-bottom: 1px solid #E2E2E2;

    border-collapse: collapse;
`

const IconesTabela = styled.table`
        display: flex;
        flex-direction: row;
    

    .editar img {
        margin-right: 10px;
    }
`

export {TabelaMatriculados, IconesTabela}