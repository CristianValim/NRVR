import { Container } from "./styles";
import background from '../../assets/background.png'
import { Header } from "../../components/header";

export function Home() {
    return (
        <Container>
            <Header />

            <div className="background">
                <img src={background} alt="Imagem de um edificio" />
            </div>
        </Container>
    )
}