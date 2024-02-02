import { Container } from "./styles";

import sobre from '../../assets/sobre.png'
import instagram from '../../assets/instagram.svg'
import { Link } from "react-router-dom";

export function Sobre() {
    return (
        <Container>
            <div className="sobre">
                <h1>o escritório</h1>
                    <p>nrvr arquitetos, prática de arquitetura e urbanismo, do objeto ao lugar.
por nilton ribeiro e vitor reisdörfer.
                    <br/>
                    <br/>
                    O lugar é um fundamento cíclico, um encontro de fluxos e de acontecimentos, um local de transformação das possibilidades humanas. É onde produzimos coletivamente as nossas ideias, onde produzimos coletivamente a nós mesmos.</p>

            <img src={sobre} alt="Foto dos fundadores NRVR" />

                <h1>contato</h1>
                <p><span>nrvr@gmail.com</span></p>
                <Link className="col2" to="https://wa.me/5544991030389" target="blank"><span>+5544 99103 0389</span></Link>
                <Link className="col2" to="https://www.instagram.com/nrvrarquitetos/" target="blank"><img className="instagram" src={instagram} alt="Link para o nosso Instagram" /></Link>
            </div>
        </Container>
    )
}