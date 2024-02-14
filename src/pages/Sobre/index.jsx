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
                <div className="contact col2">
                    <p><span>contato@nrvrarquitetos.com</span></p>
                    <h3><span>Vitor Reisdörfer</span></h3>
                    <Link to="https://wa.me/5542998003356" target="blank"><span>42 9 9800 3356</span></Link>
                    <h3><span>Nilton Ribeiro</span></h3>
                    <Link to="https://wa.me/5544999189608" target="blank"><span>44 9 9918 9608</span></Link>
                    <Link to="https://www.instagram.com/nrvrarquitetos/" target="blank"><img className="instagram" src={instagram} alt="Link para o nosso Instagram" /></Link>
                </div>
            </div>
        </Container>
    )
}