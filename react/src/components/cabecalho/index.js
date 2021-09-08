import { ContainerCabecalho, Perfil} from "./styled"

export default function Cabecalho() {
    return (
        <ContainerCabecalho>
            <Perfil> 
                <div class="cabecalho-b2">
                <div class="perfil">
                    <div class="notificacao">3</div>
                    <img src= "/assets/images/perfil.png"/> 
                    <div class="nome">Olá, <b>Letícia Rodrigues</b></div>
                    </div>
                </div>
            </Perfil>
                <div class="bolinhas">
                    <div class="box-carregar">
                        <div class="carregar"> <img src="/assets/images/carregar.png" alt=""/> </div>
                    </div>
                    <div class="box-sair">
                        <div class="sair"> <img src="/assets/images/logout.png" alt=""/> </div>
                    </div>
                </div>
        </ContainerCabecalho>
    )
}