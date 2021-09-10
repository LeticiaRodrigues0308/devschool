import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {
    async listarAlunos() {
        let r = await api.get('/matricula/');
        return r.data;
    }

    async inserirAluno(nome, chamada, curso, turma) {
        let r = await api.post('/matricula', {nome, chamada, curso, turma});
        return r.data;
    }

    async alterarMatricula(id, nome, chamada, curso, turma) {
        let r = await api.put('/matricula/' + id, {nome, chamada, curso, turma});
        return r.data;
    }

    async removerMatricula(id) {
        let r = await api.delete('/matricula/' + id);
        return r.data;
    }
}