import { ContainerCabecalho, Icones, Perfil } from "./styled";

export default function Cabecalho() {
    return (
        <ContainerCabecalho>
            <Perfil>
                <div class="notificacao">3</div>
                <img src='/assets/images/perfil.png' alt=""/> 
                <div class="nome">Olá, <b>Letícia Rodrigues</b></div>
             </Perfil>
            <Icones>
                <div class="bolinhas">
                    <div class="box-carregar">
                        <div class="carregar"><img src='/assets/images/carregar.png' alt="" /></div>
                    </div>
                    <div class="box-sair">
                        <div class="sair"><img src='/assets/images/logout.png' alt="" /></div>
                    </div>
                </div>
            </Icones>
        </ContainerCabecalho>
    )
}
