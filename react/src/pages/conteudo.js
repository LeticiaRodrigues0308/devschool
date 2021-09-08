import { MatriculaInput } from "../components/outros/inputs";
import { ConteudoSite } from "./conteudo.styled";

export default function Conteudo() {
    return (
        <ConteudoSite>
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
            <div class="box-aluno">
                <div class="alu">
                    <div class="linha2"> <img src="./assets/images/linha1.png" alt=""/> </div>
                    <div class="novo-aluno">Novo Aluno</div>
                </div> 
            </div>
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

        
        </ConteudoSite>
    )
}