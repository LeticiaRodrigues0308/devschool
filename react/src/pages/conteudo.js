import Cabecalho from "../components/cabecalho"
import { MatriculaInput } from "../components/outros/inputs"
import { ConteudoSite } from "./conteudo.styled"
import { IconesTabela, TabelaMatriculados } from "../components/outros/table"

import LoadingBar from 'react-top-loading-bar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {confirmAlert} from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { useState, useEffect, useRef } from "react"

import Api from "../service/api"
const api = new Api();

export default function Conteudo() {

    const [matriculas, setMatriculas] = useState([]);
    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState('');
    const [turma, setTurma] = useState('');
    const [curso, setCurso] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

    const loading = useRef(null);

    async function listarAlunos() {

        let r = await api.listarAlunos();
        setMatriculas(r)
    }

    async function cadastrarAluno() {
        loading.current.complete();

        if(idAlterando == 0) {
            let r = await api.inserirAluno(nome, chamada, curso, turma);

            if(r.erro){
                toast.error(r.erro);
            }
            else {
                toast.success('Aluno inserido com sucesso!');
            }
        } else {
            let r = await api.alterarMatricula(idAlterando, nome, chamada, curso, turma);
            console.log(r);

            if(r.erro) {
                toast.error(r.erro);
            }
            else {
                toast.success('Aluno alterado com sucesso!');
            }
        }

        limparCampos();
        listarAlunos();
    }

    function limparCampos(){
        setNome('');
        setChamada('');
        setCurso('');
        setTurma('');
        setIdAlterando(0);
    }

    async function removerMatricula(id) {
        loading.current.complete();

        confirmAlert({
            title: 'Remover aluno',
            message: `Tem certeza que deseja remover o aluno ${id} ?`, 
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.removerMatricula(id);
                        if(r.erro)
                            toast.error(`${r.erro}`);
                        else {
                            toast.success('🗑️ Aluno removido com sucesso!');
                            listarAlunos();
                        }
                    }
                },
                {
                    label: 'Não'
                }
            ]
        });
    }

    async function alterar(item) {
        loading.current.complete();

        setNome(item.nm_aluno);
        setChamada(item.nr_chamada);
        setCurso(item.nm_curso);
        setTurma(item.nm_turma);
        setIdAlterando(item.id_matricula);
    }


    // chamada apenas 1 vez, quando a tela abre
    useEffect(() => {
        listarAlunos();
    }, [])


    return (
        <ConteudoSite>
            <ToastContainer/>
            <LoadingBar color='#DB21BD' ref={loading}/>
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
                    <div class="novo-aluno"> {idAlterando == 0 ? "Novo Aluno" : "Alterando Aluno " + idAlterando}</div>
                </div>

                <div class="inputs1">
                    <div class="input-nome">
                        <div class="label">Nome:</div>
                        <MatriculaInput type="text" required value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>

                    <div class="input-curso">
                        <div class="label">Curso:</div>
                        <MatriculaInput type="text" value={curso} onChange={e => setCurso(e.target.value)}/>
                    </div>
                </div>

                <div class="inputs2">
                    <div class="input-chamada">
                        <div class="label">Chamada:</div>
                        <MatriculaInput type="text" value={chamada} onChange={e => setChamada(e.target.value)} required/>
                    </div>

                    <div class="input-turma">
                        <div class="label">Turma:</div>
                        <MatriculaInput type="text" value={turma} onChange={e => setTurma(e.target.value)}/>
                    </div>
                    <div class="botao-cadastrar"> <button onClick={cadastrarAluno}>  {idAlterando == 0 ? "Cadastrar" : "Alterar"}</button></div>
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

                        <tbody>

                            {matriculas.map(item =>

                                <tr>
                                    <td>{item.id_matricula}</td>
                                    <td title={item.nm_aluno}>
                                            {item.nm_aluno != null && item.nm_aluno.length >= 25 
                                                ? item.nm_aluno.substring(0, 25) + '...' 
                                                : item.nm_aluno}
                                    </td>
                                    <td>{item.nr_chamada}</td>
                                    <td>{item.nm_curso}</td>
                                    <td>{item.nm_turma}</td>

                                    <IconesTabela>
                                        <td className="acao"> <button onClick={() => alterar(item)} > <img src="./assets/images/edit.png" alt=""/> </button> </td>
                                        <td className="acao"> <button onClick={() => removerMatricula(item.id_matricula)} > <img src="./assets/images/delete.png" alt=""/> </button> </td>
                                    </IconesTabela>
                                </tr>
                            )}

                        </tbody>
                        </TabelaMatriculados>
                </div>
            </div>
        </div>
        
        </ConteudoSite>
    )
}