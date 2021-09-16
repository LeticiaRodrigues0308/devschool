import styled from 'styled-components'

const ConteudoSite = styled.div`
.container {
    display: flex;
    flex-direction: row;
}
    .box1 {
    display: flex;
    flex-direction: column;

    background-color: #2B3031;
    color: white;

    width: 360px;
    height: 100vh;

    position: sticky;
    top: 0px;
}

.cabecalho-b1 {
    display: flex;
    justify-content: center;
    margin: 3em 0em 3em 0em;
}

.espaco {
    width: 360px;
    height: 60px;

    background-color: #262626;
}

.gerenciamento {
    display: flex;
    flex-direction: row;

    margin: 2em 0em 2em 4em;
    font-size: 18px;
}

.setinha img {
    margin-left: 7em;
}

.alunos {
    display: flex;
    flex-direction: row;
    width: 16em;
    height: 24px;
    padding: 1em 0em 1em 4em;

    background-color: white;
    color: #1a1a1a;
    border: 5px;
    font-size: 18px;
}

.linha1 img {
    position: absolute;
    width: 4px;
    height: 60px;
}


.box2 {
    display: flex;
    flex-direction: column;

    background-color: #F5F5F5;
    width: 100%;
}

.box-aluno {
    width:  91%;
    height: 250px;

    margin: 2em 0em 0em 4em;
    background-color: #FFFFFF;

    padding: 1em;
    color: #3C3939;
}

.alu {
    display: flex;
    flex-direction: row;

    font-size: 32px;
    font-weight: 700;
    padding: 1em 0em 1em 1em;
}

.linha2 img {
    margin-right: 10px;
}

.inputs1, .inputs2 {
    display: flex;
    flex-direction: row;
}

.input-nome, .input-curso, .input-chamada, .input-turma {
    display: flex;
    flex-direction: row;
}

.label {
    font-size: 18px;
    font-weight: 700;
    color: #615858;

    margin-right: 15px;
}

.inputs1 {
    padding-left: 4em;
}

.inputs2 {
    margin: 1em 0em 0em 0em;
    padding-left: 2em;
}

.input-curso, .input-turma {
    margin-left: 4em;
}

.botao-cadastrar button {
    width: 106px;
    height: 36px;
    margin-left: 3em;

    border-radius: 45px;
    border: none;

    background-color: #E911C6;
    color: #FFFFFF;

    font-weight: bold;
    cursor: pointer;
}

.botao-cadastrar button:hover {
        background-color: #aa3997;
        transition: 2s;
    }

.box-matriculados {
    width: 93%;
    height: auto;

    margin: 2em 4em;
    padding-bottom: 50px;

    background-color: #FFFFFF;
}

.matriculados {
    display: flex;
    flex-direction: row;
    margin: 2em;

    font-size: 32px;
    font-weight: bold;
    color: #3C3939;
}

.linha3 {
    margin-right: 10px;
}

.alu-matricula {
    margin-right: 20px;
}

td{
    padding: 1em;
    font-size: 18px;
    text-align: left;
}

th {
    text-align: left;
    padding-left: 20px;
    font-size: 18px;

    background-color: #986CDF;
}

table tr:nth-child(odd){
    background-color: #F5F5F5;
}

table tr:nth-child(even) {
    background-color: #FFFFFF;
}

td button {
    border-radius: 40px;
    border: 0px;
    background-color: #565656;
    cursor: pointer;
}

tr:hover {

    .acao > button {
    visibility: visible;
}

}

.acao > button {
    visibility: hidden;
}
`

export {ConteudoSite}