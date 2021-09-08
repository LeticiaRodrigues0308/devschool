import styled from "styled-components";

const TabelaMatriculados = styled.table`
    .cabecalho-table{
    height: 67px;
    color: #FFFFFF;
}

    width: 900px;
    margin-left: 5em;

    border-left: 1px solid #E2E2E2;
    border-right: 1px solid #E2E2E2;
    border-bottom: 1px solid #E2E2E2;

    border-collapse: collapse;
`

const IconesTabela = styled.table`
        display: flex;
        flex-direction: row;
        margin-top: 15px;
    

    .editar img {
        margin-right: 10px;
    }
`

export {TabelaMatriculados, IconesTabela}