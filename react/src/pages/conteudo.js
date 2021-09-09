import Cabecalho from "../components/cabecalho"
import { MatriculaInput } from "../components/outros/inputs"
import { ConteudoSite } from "./conteudo.styled"
import { IconesTabela, TabelaMatriculados } from "../components/outros/table"

import Api from '../../service/api';
const api = new Api();

export default function Conteudo() {

    const removerAluno = async (id) => {
        const r = await api.apagarMatricula(id);
    }

    return (
        <ConteudoSite>
            <div class="container">
            <div class="box1">
            <div class="cabecalho-b1">
                <div class="logo"> <img src="./assets/images/Logo.png" alt=""/> </div>
            </div>

            <div class="espaco"></div>
            <div class="gerenciamento">
                <div class="texto-gere">Gerenciamento</div>
                <div class="setinha"> <img src="./assets/images/Vector.png" alt=""/> </div>
            </div>

            <div class="linha1"> <img src="./assets/images/Retangulo.png" alt=""/> </div>
            <div class="alunos">
                <div class="titulo-alunos"><b>Alunos</b></div>
            </div>
        </div>


        <div class="box2">
            <Cabecalho/>
            <div class="box-aluno">
                <div class="alu">
                    <div class="linha2"> <img src="./assets/images/linha1.png" alt=""/> </div>
                    <div class="novo-aluno">Novo Aluno</div>
                </div>

                <div class="inputs1">
                    <div class="input-nome">
                        <div class="label">Nome:</div>
                        <MatriculaInput/>
                    </div>

                    <div class="input-curso">
                        <div class="label">Curso:</div>
                        <MatriculaInput/>
                    </div>
                </div>

                <div class="inputs2">
                    <div class="input-chamada">
                        <div class="label">Chamada:</div>
                        <MatriculaInput/>
                    </div>

                    <div class="input-turma">
                        <div class="label">Turma:</div>
                        <MatriculaInput/>
                    </div>
                    <div class="botao-cadastrar"> <button>Cadastrar</button> </div>
                </div>
            </div>

            <div class="box-matriculados">
                <div class="matriculados">
                    <div class="linha3"> <img src="./assets/images/linha1.png" alt=""/> </div>
                    <div class="alu-matricula">Alunos Matriculados</div>
                </div>

                        <TabelaMatriculados>
                            
                        <thead>
                            <tr class="cabecalho-table">
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Chamada</th> 
                                <th>Turma</th>
                                <th>Curso</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tr>
                            <td>1</td>
                            <td>Fulao da Silva Sauro</td>
                            <td>14</td>
                            <td>InfoX</td>
                            <td>Informática</td>

                            <IconesTabela>
                                <div class="editar">
                                    <div class="icon-editar"> <img src="./assets/images/edit.png" alt=""/> </div>
                                </div>
        
                                <div class="deletar">
                                    <div class="icon-deletar"> <img onClick={() => removerAluno(x.id_matricula)} src="./assets/images/delete.png" alt=""/> </div>
                                </div>
                            </IconesTabela>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Fulao da Silva Sauro</td>
                            <td>15</td>
                            <td>InfoX</td>
                            <td>Informática</td>

                            <IconesTabela>
                            <div class="editar">
                                    <div class="icon-editar"> <img src="./assets/images/edit.png" alt=""/> </div>
                                </div>
        
                                <div class="deletar">
                                    <div class="icon-deletar"> <img src="./assets/images/delete.png" alt=""/> </div>
                                </div>
                            </IconesTabela>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Fulao da Silva Sauro</td>
                            <td>16</td>
                            <td>InfoX</td>
                            <td>Informática</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Fulao da Silva Sauro</td>
                            <td>17</td>
                            <td>InfoX</td>
                            <td>Informática</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>Fulao da Silva Sauro</td>
                            <td>18</td>
                            <td>InfoX</td>
                            <td>Informática</td>
                            <td></td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>Fulao da Silva Sauro</td>
                            <td>19</td>
                            <td>InfoX</td>
                            <td>Informática</td>
                            <td></td>
                        </tr>
                        </TabelaMatriculados>
                </div>
            </div>
        </div>
        
        </ConteudoSite>
    )
}