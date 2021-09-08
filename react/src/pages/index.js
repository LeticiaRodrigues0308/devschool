import { Container } from "./styled"
import Cabecalho from "../components/cabecalho"
import Conteudo from "./conteudo"

export default function DevSchool() {
    return (
        <Container>
            <Cabecalho/>
            <Conteudo/>
        </Container>
    )
}