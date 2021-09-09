import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {
    async listarAlunos(idAluno) {
        let r = await api.get(`/matricula/${idAluno}`);
        return r.data;
    }

    async apagarMatricula(id) {
        let r = await api.delete(`/matricula/${id}`);
        return r.data;
    }

    
}